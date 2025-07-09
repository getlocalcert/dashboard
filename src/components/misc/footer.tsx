"use client";

import { FooterObject } from "@/components/ui/footer-object";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full">
            <FooterObject
                mainLinks={[
                    { href: "https://wdh.gg/donate", label: "Donate" },
                    { href: "/privacy", label: "Privacy Policy" },
                    { href: "mailto:support@localcert.net", label: "Contact Us" }
                ]}
                copyright={`© 2023-${currentYear} LocalCert - All Rights Reserved.`}
            />
        </div>
    );
}
