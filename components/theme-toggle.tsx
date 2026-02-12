"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2.5 h-10 w-10" />; 
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-colors relative h-10 w-10 focus:outline-none"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.1rem] w-[1.1rem] transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`h-[1.1rem] w-[1.1rem] transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}