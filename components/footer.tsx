"use client"

import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Globe } from "lucide-react"
import { Magnetic, FadeIn } from "./animations"

const socialLinks = [
  { icon: Github, href: "https://github.com/Rajankannaujiya", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rajankannaujiya", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_Rajan_108", label: "Twitter" },
  { icon: Mail, href: "mailto:rajankannaujiya2034@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full pt-20 pb-10 px-6 lg:px-20 border-t border-border/40 bg-linear-to-b from-transparent to-primary/5">
      
      {/* 1. DESKTOP SIDEBARS (The Classic "Developer" Sidebars) */}
      <div className="fixed bottom-0 left-6 xl:left-12 hidden lg:flex flex-col items-center gap-6 z-50">
        <FadeIn direction="up" delay={1800}>
          <div className="flex flex-col items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-px h-24 bg-linear-to-t from-primary to-transparent" />
          </div>
        </FadeIn>
      </div>

      <div className="fixed bottom-0 right-6 xl:right-12 hidden lg:flex flex-col items-center gap-6 z-50">
        <FadeIn direction="up" delay={1800}>
          <div className="flex flex-col items-center gap-8">
            <a href={`mailto:rajankannaujiya2034@gmail.com`} className="text-muted-foreground hover:text-primary transition-all duration-300 font-mono text-xs tracking-widest [writing-mode:vertical-rl] hover:-translate-y-1">
              rajankannaujiya2034@gmail.com
            </a>
            <div className="w-px h-24 bg-linear-to-t from-primary to-transparent" />
          </div>
        </FadeIn>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand/Status Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-foreground">Available for new projects</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Rajan Kannaujiya</h3>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Full Stack Engineer specializing in high-performance web applications and digital experiences.
            </p>
          </div>

          {/* Navigation/Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-primary tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-primary tracking-widest">Socials</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 group">
                      {link.label} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter/Contact Call to Action */}
          <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold italic">Let's build something great.</h4>
            <p className="text-xs text-muted-foreground">Have a project in mind? Send me a message and let's discuss the details.</p>
            <a href="mailto:rajankannaujiya2034@gmail.com" className="inline-block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
              Start a Conversation
            </a>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
            © {currentYear} RAJAN KANNAUJIYA • ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              Back to top <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}