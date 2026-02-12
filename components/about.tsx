"use client"

import { FadeIn, StaggerChildren, StaggerChild } from "./animations"
import Image from "next/image"

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Node.js", "MongoDB", "Express", "PostgreSQL", 
  "Tailwind CSS", "Prisma", "Docker", "WebSockets", 
  "Redux", "AWS (EC2)"
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Left: Text Content (Spans 3 columns) */}
          <div className="md:col-span-3 space-y-6">
            <FadeIn delay={100}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hello! I'm <span className="text-foreground font-medium">Rajan Kannaujiya</span>. My journey into web development started with a curiosity for how things work under the hood. Today, I specialize in the <span className="text-primary">MERN & Next.js stack</span>, turning complex problems into simple, beautiful, and scalable digital solutions.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                I don’t just write code; I build infrastructure. Whether it's architecting a 
                <span className="text-foreground"> Role-Based Access Control</span> system or implementing 
                <span className="text-foreground"> real-time WebSockets</span>, I focus on the "Full Stack" 
                experience—ensuring the backend is as sturdy as the frontend is fluid.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-muted-foreground mb-4">
                Here are the tools I use to bring ideas to life:
              </p>
            </FadeIn>

            {/* Redesigned Skills Grid */}
            <StaggerChildren staggerDelay={40} className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill) => (
                <StaggerChild key={skill}>
                  <div className="px-3 py-1.5 rounded-md border border-border bg-card/50 text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                    <span className="text-primary mr-1.5">#</span>
                    {skill}
                  </div>
                </StaggerChild>
              ))}
            </StaggerChildren>
          </div>

          {/* Right: The "Signature" Image Style (Spans 2 columns) */}
          <div className="md:col-span-2">
            <FadeIn delay={500} direction="up">
              <div className="relative mx-auto w-full max-w-70 aspect-4/5 group">
                {/* Background Solid Frame */}
                <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
                
                {/* Image Wrapper */}
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-muted shadow-2xl">
                  {/* Replace with your image */}
                  <Image
                    src="/Rajan-edit-image.jpeg" // Use a different pose or a more "dev-at-work" photo here
                    alt="Rajan Kannaujiya"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                  
                  {/* The "Glassmorphism" Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl z-20" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}