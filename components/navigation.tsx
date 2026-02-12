"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // 1. Import dynamic
import { Magnetic } from "./animations";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";

// 2. Import the ThemeToggle DYNAMICALLY with SSR disabled
const ThemeToggle = dynamic(() => import("./theme-toggle").then(mod => mod.ThemeToggle), {
  ssr: false,
  loading: () => <div className="h-10 w-10" /> // Placeholder while loading
});

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
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle body overflow
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ease-in-out ${isScrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm" : "py-6 bg-transparent"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          
          <Magnetic>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-3 text-left focus:outline-none">
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-10">
                <div className="absolute inset-0 bg-primary rounded-xl -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-primary/20" />
                <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-primary-foreground/20 bg-card z-10">
                  <Image src="/Rajan-edit-image.jpeg" alt="Rajan" fill className="object-cover" priority />
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl tracking-tighter text-foreground group-hover:text-primary transition-colors uppercase">RK</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Portfolio</span>
              </div>
            </button>
          </Magnetic>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted/40 backdrop-blur-md p-1 rounded-full border border-border/40">
              {navItems.map((item, index) => (
                <button key={item.label} onClick={() => handleNavClick(item.href)} className="px-5 py-2 rounded-full text-[13px] font-medium text-muted-foreground hover:text-primary hover:bg-background/80 transition-all duration-300">
                  <span className="text-primary/40 font-mono text-[10px] mr-1.5 font-bold">0{index + 1}.</span>
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-border/60 mx-1" />
            
            {/* The Dynamic Component */}
            <ThemeToggle />

            <Magnetic>
              <a href="https://drive.google.com/file/d/1QR5Sz7Hnzxx1TyuR24zMb3HhN7zCH0Ne/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-2 px-6 py-2.5 bg-foreground text-background dark:bg-primary dark:text-primary-foreground text-[13px] font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                <Download className="w-3.5 h-3.5" /> Resume
              </a>
            </Magnetic>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 rounded-xl bg-muted/50 text-foreground transition-colors z-70">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-50 md:hidden bg-background transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
          {navItems.map((item, index) => (
            <button key={item.label} onClick={() => handleNavClick(item.href)} className={`flex items-baseline gap-4 group transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="text-primary font-mono text-lg">0{index + 1}.</span>
              <span className="text-5xl font-bold tracking-tighter group-hover:text-primary transition-colors">{item.label}</span>
            </button>
          ))}
          <div className="flex flex-col w-full gap-4 mt-12">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}