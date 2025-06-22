"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Heading() {
  return (
    <header className="w-full px-4 py-4 border-b">
      <div className="flex justify-center">
        <div className="flex items-center gap-6">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="LocalCert Logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <span className="font-semibold text-lg text-foreground">
              LocalCert
            </span>
          </Link>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button asChild variant="secondary">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link
                href="https://docs.localcert.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
