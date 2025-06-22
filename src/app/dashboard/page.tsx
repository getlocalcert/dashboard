"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export default function DashboardPage() {
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingAcme, setLoadingAcme] = useState(false);

  const [subdomain, setSubdomain] = useState("");
  const [password, setPassword] = useState("");
  const [acmeToken, setAcmeToken] = useState("");

  const [createResponse, setCreateResponse] = useState<null | {
    subdomain: string;
    domain: string;
    password: string;
    expiresAt: string;
  }>(null);
  const [createError, setCreateError] = useState<string | null>(null);

  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);

  const [acmeError, setAcmeError] = useState<string | null>(null);
  const [acmeSuccess, setAcmeSuccess] = useState<null | {
    type: string;
    name: string;
    content: string;
    ttl: number;
  }>(null);

  const handleCreate = async () => {
    setLoadingCreate(true);
    setCreateResponse(null);
    setCreateError(null);
    try {
      const res = await fetch("https://api.localcert.net/v1/domains/create", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setCreateResponse(data.data);
      } else {
        setCreateError(
          res.status + ": " + data.message || "Failed to create subdomain.",
        );
      }
    } catch (error) {
      setCreateError("Failed to create subdomain.");
    } finally {
      setLoadingCreate(false);
    }
  };

  const handleDelete = async () => {
    setDeleteError(null);
    setDeleteSuccess(null);

    if (!subdomain.trim() || !password.trim()) {
      setDeleteError("Subdomain and password are required.");
      return;
    }

    setLoadingDelete(true);
    try {
      const res = await fetch("https://api.localcert.net/v1/domains/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subdomain, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setDeleteSuccess(data.message);
        setSubdomain("");
        setPassword("");
      } else {
        setDeleteError(`${res.status}: ${data.message}`);
      }
    } catch (error) {
      setDeleteError("Failed to delete subdomain.");
    } finally {
      setLoadingDelete(false);
    }
  };

  const handleAcme = async () => {
    setAcmeError(null);
    setAcmeSuccess(null);

    if (!subdomain.trim() || !password.trim() || !acmeToken.trim()) {
      setAcmeError("Subdomain, password, and ACME token are required.");
      return;
    }

    setLoadingAcme(true);
    try {
      const res = await fetch("https://api.localcert.net/v1/acme/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subdomain, password, acme_token: acmeToken }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAcmeSuccess(data.record);
        setAcmeToken("");
      } else {
        setAcmeError(`${res.status}: ${data.message}`);
      }
    } catch (error) {
      setAcmeError("Failed to create ACME record.");
    } finally {
      setLoadingAcme(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-10 space-y-8">
      {/* Create Subdomain Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Create localcert sub-domain:
          </CardTitle>
          <CardDescription>
            This will create a new <code>*.localcert.net subdomain</code>. No
            input is required. 1 request every 24 hours ratelimit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Click the button below to generate a new subdomain automatically.
          </p>
          {createError && (
            <div className="mb-4 p-3 border border-destructive text-destructive bg-destructive/10 rounded-md">
              {createError}
            </div>
          )}
          {createResponse && (
            <div className="space-y-2 rounded-md border p-4">
              <div>
                <span className="font-semibold">Subdomain:</span>{" "}
                <Badge variant="outline">
                  {createResponse.subdomain}.localcert.net
                </Badge>
              </div>
              <div>
                <span className="font-semibold">Password:</span>{" "}
                <Badge variant="outline">{createResponse.password}</Badge>
              </div>
              <div>
                <span className="font-semibold">Expires At:</span>{" "}
                <Badge variant="outline">
                  {new Date(createResponse.expiresAt).toLocaleString()}
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreate} disabled={loadingCreate}>
            {loadingCreate ? (
              <>
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />{" "}
                Creating...
              </>
            ) : (
              "Create Sub-domain"
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Delete Subdomain Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Delete localcert sub-domain:
          </CardTitle>
          <CardDescription>
            Deletes the domain and all associated certificates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {deleteError && (
            <div className="mb-4 p-3 border border-destructive text-destructive bg-destructive/10 rounded-md">
              {deleteError}
            </div>
          )}
          {deleteSuccess && (
            <div className="mb-4 p-3 border border-green-600 text-green-600 bg-green-600/10 rounded-md">
              {deleteSuccess}
            </div>
          )}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="subdomain"
            >
              Subdomain
            </label>
            <input
              id="subdomain"
              name="subdomain"
              type="text"
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="abcd1234"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="••••••••"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loadingDelete}
          >
            {loadingDelete ? (
              <>
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />{" "}
                Deleting...
              </>
            ) : (
              "Delete Domain"
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Create ACME Challenge Record Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Create ACME Challenge Record:
          </CardTitle>
          <CardDescription>
            Creates a DNS TXT record for an ACME challenge under the subdomain.
            This is typically used with Let's Encrypt or other certificate
            authorities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {acmeError && (
            <div className="mb-4 p-3 border border-destructive text-destructive bg-destructive/10 rounded-md">
              {acmeError}
            </div>
          )}
          {acmeSuccess && (
            <div className="mb-4 p-3 border border-green-600 text-green-600 bg-green-600/10 rounded-md space-y-1">
              <div>
                <span className="font-semibold">Record Type:</span>{" "}
                {acmeSuccess.type}
              </div>
              <div>
                <span className="font-semibold">Record Name:</span>{" "}
                {acmeSuccess.name}
              </div>
              <div>
                <span className="font-semibold">Content:</span>{" "}
                {acmeSuccess.content}
              </div>
              <div>
                <span className="font-semibold">TTL:</span> {acmeSuccess.ttl}
              </div>
            </div>
          )}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="acme-subdomain"
            >
              Subdomain
            </label>
            <input
              id="acme-subdomain"
              name="acme-subdomain"
              type="text"
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="example.localcert.net"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="acme-password"
            >
              Password
            </label>
            <input
              id="acme-password"
              name="acme-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="acme-token"
            >
              ACME Token
            </label>
            <input
              id="acme-token"
              name="acme-token"
              type="text"
              value={acmeToken}
              onChange={(e) => setAcmeToken(e.target.value)}
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="your-acme-token"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAcme} disabled={loadingAcme}>
            {loadingAcme ? (
              <>
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />{" "}
                Creating...
              </>
            ) : (
              "Create ACME Record"
            )}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
