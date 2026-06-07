"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

const linkClassName = (isActive: boolean) =>
  `px-3 text-sm font-medium capitalize text-white transition ${
    isActive
      ? "underline decoration-white/80 underline-offset-[0.35em]"
      : "opacity-85 hover:opacity-100"
  }`;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mb-12 flex min-h-8 items-center justify-between gap-6">
      <Link href="/" className="inline-flex shrink-0 items-center">
        <Image
          src="/static/img/logo.png"
          alt="Home"
          width={32}
          height={32}
          className={`h-8 w-8 ${isHome ? "" : "invert"}`}
        />
      </Link>

      <nav
        aria-hidden={isHome}
        className={`flex flex-wrap items-center justify-end gap-x-6 gap-y-2 ${
          isHome ? "invisible pointer-events-none" : ""
        }`}
      >
        {navLinks.map(({ href, label, ...link }) => {
          const isActive = !("external" in link) && pathname === href;

          if ("external" in link && link.external) {
            return (
              <a key={href} href={href} className={linkClassName(false)} tabIndex={isHome ? -1 : undefined}>
                {label}
              </a>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              className={linkClassName(isActive)}
              aria-current={isActive ? "page" : undefined}
              tabIndex={isHome ? -1 : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
