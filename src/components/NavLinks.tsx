"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base">
      {isHome ? (
        <a
          href={site.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          cv
        </a>
      ) : null}
      {navLinks.map(({ href, label, ...link }) =>
        "external" in link && link.external ? (
          <a key={href} href={href} className="text-link">
            {label}
          </a>
        ) : (
          <Link key={href} href={href} className="text-link">
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}
