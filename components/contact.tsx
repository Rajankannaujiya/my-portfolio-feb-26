"use client"

import { FadeIn, Magnetic } from "./animations"
import { Mail, Copy, Check, Send, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "rajankannaujiya2034@gmail.com"
  const phone = "+91 8260645476"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm tracking-tighter">04. What's Next?</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter">
            Let's <span className="text-primary">Connect.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            I’m currently exploring new <span className="text-foreground font-medium">Full Stack</span> and <span className="text-foreground font-medium">DevOps</span> opportunities. 
            My inbox is always open for collaborations or a friendly "Hello."
          </p>
        </FadeIn>

        {/* Contact Actions Grid */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <FadeIn delay={300}>
              <Magnetic>
                <a
                  href={`mailto:${email}`}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Say Hello
                </a>
              </Magnetic>
            </FadeIn>

            <FadeIn delay={400}>
              <Magnetic>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`} // Removes spaces for the link
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-border bg-card/50 backdrop-blur-sm text-foreground rounded-2xl font-medium hover:border-primary/50 transition-all active:scale-95"
                >
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  {phone}
                </a>
              </Magnetic>
            </FadeIn>
          </div>

          <FadeIn delay={500}>
            <Magnetic>
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 px-8 py-3 text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />
                    <span className="text-green-500">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </Magnetic>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}