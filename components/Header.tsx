import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import logoLight from "@/public/images/logo-light.png";

// Only Articles/Thoughts and The Crew have pages so far; the rest stay "#" until they do.
const NAV = [
  { label: "Articles", href: "/articles" },
  { label: "Film", href: "#" },
  { label: "The Crew", href: "/the-crew" },
  { label: "What’s Next", href: "#" },
  { label: "About", href: "#" },
  { label: "Thoughts", href: "/articles" },
  { label: "Shop", href: "#" },
];

type Props = {
  className: string;
  /** Painted under the nav bar, e.g. a full-bleed photo and its scrim. */
  backdrop?: ReactNode;
  /** Rendered after the nav bar, e.g. the hero headline. */
  children?: ReactNode;
};

export default function Header({ className, backdrop, children }: Props) {
  return (
    <header className={className}>
      {backdrop}

      <div className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-4 pt-5 md:px-10 md:pt-6">
        <Link href="/" aria-label="Offstage home" className="shrink-0">
          <Image src={logoLight} alt="Offstage" className="h-8 w-auto md:h-10" sizes="180px" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-[clamp(24px,3.4vw,64px)]">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-curtain-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ponytail: native <details> menu, no JS state */}
        <details className="group/menu lg:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden className="flex w-6 flex-col gap-1.5">
              <span className="h-px bg-white transition-transform duration-200 group-open/menu:translate-y-[3.5px] group-open/menu:rotate-45" />
              <span className="h-px bg-white transition-transform duration-200 group-open/menu:-translate-y-[3.5px] group-open/menu:-rotate-45" />
            </span>
          </summary>
          <nav aria-label="Main" className="absolute inset-x-0 top-full z-30 bg-ink px-4 pb-6 pt-2 md:px-10">
            <ul>
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    className="block py-3.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-curtain-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>

      {children}
    </header>
  );
}
