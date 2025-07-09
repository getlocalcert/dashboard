"use client";

import Link from "next/link";

export default function Privacy() {
    return (
        <div className="flex flex-col items-center text-center px-4 my-10">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-foreground mb-4">
                Privacy Policy
            </h2>

            {/* Policy Content */}
            <div className="text-muted-foreground text-base max-w-xl space-y-6 text-left">
                <div>
                    <h3 className="font-semibold text-foreground mb-1">What We Collect</h3>
                    <p>
                        We do <strong>not</strong> collect or store any personal information, IP addresses, or usage
                        data on our servers.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-1">Third-Party Services</h3>
                    <p>
                        We use{" "}
                        <Link
                            href="https://sentry.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Sentry
                        </Link>{" "}
                        to monitor and log application errors. Sentry <strong>may collect limited data</strong>, such as
                        IP addresses, to help us diagnose and fix issues. You can learn more by reading their{" "}
                        <Link
                            href="https://sentry.io/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-1">Cookies</h3>
                    <p>
                        We do <strong>not</strong> use cookies or tracking technologies.
                    </p>
                </div>
            </div>
        </div>
    );
}
