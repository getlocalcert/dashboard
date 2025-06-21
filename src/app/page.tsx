"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-4 my-16">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={96}
        height={96}
        className="h-24 w-24 mb-6"
      />

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-foreground mb-4">
        <Lock className="text-green-500 h-6 w-6" />
        HTTPS for your Private Networks
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-base max-w-lg mb-6">
        We provide free{" "}
        <code className="text-white drop-shadow-[0_0_12px_#38bdf8] font-semibold">
          .localcert.net
        </code>{" "}
        subdomains for hosting internal applications.
      </p>

    </div>
  );
}
