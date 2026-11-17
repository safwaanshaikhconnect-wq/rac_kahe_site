"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "hero", href: "/#hero" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "History", id: "history", href: "/#history" },
  { label: "Team", id: "team", href: "/#team" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy active sections on Home page
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["hero", "about", "stats", "projects", "history", "team", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHome]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const top = sectionId === "hero" ? 0 : el.offsetTop - 72;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveSection(sectionId);
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Main Club Logo & Club Lockup */}
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]"
          aria-label="Rotaract Club of Karpagam Academy of Higher Education — District 3206"
        >
          <div className="relative h-9 sm:h-10 md:h-11 w-auto shrink-0 flex items-center">
            <Image
              src="/assets/main_logo.png"
              alt="Rotaract Club of Karpagam Academy of Higher Education Logo"
              width={130}
              height={48}
              className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-110 group-hover:brightness-125 transition-all"
              priority
            />
          </div>
          <div className="flex flex-col justify-center max-w-[210px] xs:max-w-[260px] sm:max-w-none">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--gold-light)] transition-colors leading-tight">
              Rotaract Club of <span className="inline lg:block xl:inline">Karpagam Academy of Higher Education</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[var(--gold)] mt-0.5 leading-none">
              District 3206
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--gold)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-3.5 h-[2px] bg-[var(--gold)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-[3px] bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--background)] transition-colors duration-200 shadow-sm"
          >
            Join us
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm uppercase tracking-wider py-2 border-b border-[var(--border)] flex items-center justify-between ${
                  isHome && activeSection === item.id
                    ? "text-[var(--gold)] font-bold"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                <span>{item.label}</span>
                {isHome && activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--cranberry)]" />
                )}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider mt-4 px-5 py-2.5 rounded-[3px] bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--background)] text-center shadow-sm"
            >
              Join us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
