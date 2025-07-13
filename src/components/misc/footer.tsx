"use client";

import { FooterObject } from "@/components/ui/footer-object";

export default function Footer() {
    return (
        <div className="w-full">
            <FooterObject
                mainLinks={[
                    { href: "https://wdh.gg/donate", label: "Donate" },
                    { href: "/privacy", label: "Privacy Policy" },
                    { href: "mailto:support@localcert.net", label: "Contact Us" }
                ]}
            />
        </div>
    );
}
