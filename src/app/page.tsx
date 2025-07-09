"use client";

import Image from "next/image";
import { Lock } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center text-center px-4 my-16">
            {/* Logo */}
            <Image src="/logo.png" alt="Logo" width={128} height={128} className="h-24 w-24 mb-6" />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-foreground mb-4">
                <Lock className="text-green-500 h-6 w-6" />
                Secure Your Private Networks
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground text-base max-w-lg mb-6">
                We provide free <code className="text-white font-semibold">.localcert.net</code> subdomains for use with
                public CAs like{" "}
                <Link
                    href="https://letsencrypt.org"
                    className="text-blue-500 hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let's Encrypt
                </Link>{" "}
                for your private networks, removing the hassle of managing your own CA.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" className="w-full sm:w-auto">
                    <Link href="/dashboard" className="flex items-center justify-center gap-2">
                        Get started <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
