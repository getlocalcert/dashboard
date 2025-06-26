"use client";

import { FooterObject } from "@/components/ui/footer-object";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <FooterObject
        mainLinks={[
          { href: "/privacy-policy", label: "Privacy" },
          { href: "/terms-of-service-policy", label: "Terms of Service" },
          { href: "/abuse-policy", label: "Abuse" },
          { href: "/contact", label: "Contact" },
        ]}
        copyright={{
          text: `© 2023-${currentYear} LocalCert - All Rights Reserved.`,
          text2: "A project by William Harrison",
        }}
      />
    </div>
  );
}
