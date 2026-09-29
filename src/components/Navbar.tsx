"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PHONE_RAW = "+971558664226";
const WA = "https://wa.me/971558664226";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white" : "bg-surface/90 shadow-sm"
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16 md:h-20">
        <Link className="shrink-0" href="/">
          <span className="font-display-lg text-xl font-extrabold text-primary">
            Car Tyre Repair <span className="text-on-surface">Dubai</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-base">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={
                  active
                    ? "text-primary font-bold border-b-2 border-primary px-3 py-2 font-label-md text-label-md"
                    : "text-on-surface-variant hover:text-primary transition-colors px-3 py-2 font-label-md text-label-md"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-xs md:gap-sm shrink-0">
          <a
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-secondary transition-all hover:bg-secondary-container/10"
            href={WA}
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>WhatsApp</span>
          </a>
          <a
            className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-lg bg-primary-container text-on-primary font-bold shadow-md hover:shadow-lg scale-95 active:scale-90 transition-all"
            href={`tel:${PHONE_RAW}`}
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button
            className="lg:hidden shrink-0 flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-secondary-container/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[26px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="lg:hidden border-t border-outline-variant/30 bg-white shadow-lg">
          <div className="flex flex-col px-margin-mobile py-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={
                    active
                      ? "text-primary font-bold py-3 font-label-md text-label-md border-b border-outline-variant/20"
                      : "text-on-surface-variant py-3 font-label-md text-label-md border-b border-outline-variant/20 last:border-b-0"
                  }
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              className="sm:hidden flex items-center gap-2 py-3 font-bold text-secondary font-label-md text-label-md"
              href={WA}
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
