"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
    return (
        <header className="w-full px-4 py-4 border-b">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo and Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="LocalCert Logo"
                        width={40}
                        height={40}
                        className="hidden md:block h-10 w-10 mr-1"
                    />
                    <span className="block font-semibold text-lg text-foreground">LocalCert</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-4">
                    <Button asChild variant="outline">
                        <Link href="/">Home</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="https://docs.localcert.net" target="_blank" rel="noopener noreferrer">
                            Documentation
                        </Link>
                    </Button>
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/dashboard">Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="https://docs.localcert.net" target="_blank" rel="noopener noreferrer">
                                    Documentation
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
