"use client"

import { useEffect, useState } from "react"
import { FadeIn, TextReveal, Magnetic } from "./animations"
import { Github, Linkedin, Twitter, ArrowDown, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"

const roles = ["Full Stack Developer", "MERN Stack & Next.js", "Creative Coder", "Problem Solver", "Exploring DevOps"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center relative px-6 lg:px-20 py-20 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <FadeIn delay={100}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <p className="text-primary font-mono text-sm uppercase tracking-[0.2em]">Available for work</p>
            </div>
          </FadeIn>

          <div className="overflow-hidden">
            <TextReveal
              text="Rajan Kannaujiya"
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground"
              delay={200}
            />
          </div>

          <FadeIn delay={400}>
            <div className="h-10 md:h-15 flex items-center mt-2">
              <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground">
                {displayText}
                <span className="ml-1 inline-block w-0.75 h-7.5 md:h-11.25 bg-primary animate-caret" />
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="mt-6 max-w-lg text-muted-foreground text-lg md:text-xl leading-relaxed">
              I specialize in building <span className="text-foreground font-medium">high-performance</span> web applications using the MERN stack. Turning complex logic into seamless digital experiences.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <FadeIn delay={800}>
              <Magnetic>
                <a
                  href="mailto:rajankannaujiya2034@gmail.com"
                  className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </FadeIn>

            <FadeIn delay={1000}>
              <div className="flex items-center gap-5 ml-2">
                {[
                  { icon: Github, href: "https://github.com/Rajankannaujiya", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/rajankannaujiya", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/_Rajan_108", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.3}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end pr-0 lg:pr-10">
  <FadeIn delay={400} direction="left">
    <div className="relative group">
      {/* Outer Glow/Ring - Clip matched to the container */}
      <div 
        className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-700 opacity-50" 
        style={{ clipPath: 'polygon(0% 0%, 95% 0%, 80% 100%, 0% 100%)' }}
      />
      
      {/* Main Image Container */}
      <div 
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-112.5 lg:h-112.5 overflow-hidden rounded-4xl border-l-2 border-y-2 border-border group-hover:border-primary/50 transition-all duration-500 shadow-2xl"
        style={{ 
          // This creates the artistic cut on the right side
          clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)' 
        }}
      >
        <Image
          src="/Rajan-edit-image.jpeg"
          alt="Rajan Kannaujiya"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Subtle Glass Overlay on bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Decorative Tech Badges */}
      <div className="absolute -bottom-6 -left-6 z-20 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
        <p className="text-xs font-mono text-primary">Focused on</p>
        <p className="text-sm font-bold">Full Stack & DevOps</p>
      </div>

      {/* Optional: Add a subtle accent line on the cut edge */}
      <div 
        className="absolute inset-0 border-r-2 border-primary/30 pointer-events-none"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
      />
    </div>
  </FadeIn>
</div>
      </div>

      {/* Scroll Down Indicator */}
      <FadeIn delay={1400} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </FadeIn>
    </section>
  )
}