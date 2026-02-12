"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ThemeToggle = dynamic(
  () => import("./theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="h-8 w-8" />,
  },
);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        if (!isOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const RESUME_URL =
  "https://drive.google.com/file/d/1QR5Sz7Hnzxx1TyuR24zMb3HhN7zCH0Ne/view?usp=sharing";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 
        ${isScrolled ? "py-3 bg-background/90 backdrop-blur-md border-b border-border/40" : "py-4 bg-transparent"} 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* COMPACT LOGO */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-110 flex items-center gap-2.5"
          >
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 bg-primary rounded-md -rotate-6" />
              <div className="relative w-7 h-7 rounded-sm overflow-hidden border border-primary-foreground/10 bg-card z-10">
                <Image
                  src="/Rajan-edit-image.jpeg"
                  alt="Rajan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="font-bold text-base tracking-tight text-foreground uppercase">
              RK
            </span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-border/60" />
            <ThemeToggle />
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-primary text-primary-foreground text-[12px] font-semibold rounded-full hover:opacity-90 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3 h-3" /> Resume
            </a>
          </div>

          {/* MOBILE TOGGLE (Clean & Minimal) */}
          <div className="flex md:hidden items-center gap-4 relative z-110">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU - CLEAN COMPACT PANEL */}
      <div
        className={`fixed top-0 left-0 right-0 z-90 md:hidden bg-background/98 backdrop-blur-xl border-b border-border/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isOpen ? "translate-y-0 opacity-100 shadow-2xl" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div className="pt-24 pb-8 px-8 flex flex-col items-center">
          {/* List Style Nav - Much cleaner than boxes */}
          <div className="flex flex-col items-center w-full">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`w-full py-4 text-center text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary active:text-primary transition-colors border-b border-border/10 last:border-none ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Minimal Resume Link */}
          <div
            className={`mt-6 w-full transition-all duration-700 delay-200 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 w-full rounded-xl bg-primary text-primary-foreground text-[13px] font-bold active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
