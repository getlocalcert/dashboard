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
import { Loader2Icon } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-10 space-y-8">

      {/* Create Subdomain Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Create localcert sub-domain:</CardTitle>
          <CardDescription>
            This will create a new LocalCert subdomain. No input is required. 1 request every 24 hours ratelimit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Click the button below to generate a new subdomain automatically.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Call Create API</Button>
        </CardFooter>
      </Card>

      {/* Delete Subdomain Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Delete localcert sub-domain:</CardTitle>
          <CardDescription>
            Deletes the domain and all associated certificates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subdomain">
              Subdomain
            </label>
            <input
              id="subdomain"
              name="subdomain"
              type="text"
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="example.localcert.net"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-md border px-3 py-2 bg-background border-border focus:outline-none focus:ring focus:ring-ring text-foreground"
              placeholder="••••••••"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">Delete Domain</Button>
        </CardFooter>
      </Card>
    </main>
  );
}