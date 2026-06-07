"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonStyles } from "@/components/ActionButton";
import { navLinks, site } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3">
      {isHome ? (
        <a
          href={site.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.secondary}
        >
          cv
        </a>
      ) : null}
      {navLinks.map(({ href, label, ...link }) =>
        "external" in link && link.external ? (
          <a key={href} href={href} className={buttonStyles.secondary}>
            {label}
          </a>
        ) : (
          <Link key={href} href={href} className={buttonStyles.secondary}>
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}
