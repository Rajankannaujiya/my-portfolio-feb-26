"use client"

import { useState } from "react"
import { FadeIn, StaggerChildren, StaggerChild } from "./animations"
import { ExternalLink, Github, Terminal } from "lucide-react"

const projects = [
  {
    title: "HomeGrocery",
    role: "Full Stack Developer",
    period: "Project • Online Grocery Platform",
    url: "https://home-grocery-rho.vercel.app/",
    github: "https://github.com/Rajankannaujiya/HomeGrocery",
    description: [
      "Optimized application response times by 30% using database indexing and RTK Query",
      "Architected a Role-Based Access Control (RBAC) system for Users, Admins, and Delivery personnel",
      "Developed a live delivery tracking and chat system using WebSockets with AI-based recommendations",
    ],
    technologies: ["Next.js", "MongoDB", "Prisma", "Auth.js", "Websockets", "Razorpay"],
  },
  {
    title: "InterviewPlat",
    role: "Full Stack Developer",
    period: "Project • Online Interview Platform",
    url: "https://ip-interview-client.vercel.app/",
    github: "https://github.com/Rajankannaujiya/ip-interview",
    description: [
      "Engineered a secure application featuring OTP-authentication and WebRTC video conferencing",
      "Implemented interview management, live communication, and status tracking systems",
      "Developed an AI chatbot for real-time query resolution for interviewers and candidates",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "WebRTC", "WebSocket"],
  },
  {
    title: "SIH 2024 Finalist",
    role: "National Finalist",
    period: "Achievement • Smart India Hackathon",
    github: "https://github.com/Rajankannaujiya/SIH2024",
    description: [
      "Developed a blockchain-based solution for tracking illicit drug transactions at a national level ",
      "Demonstrated strong problem-solving and collaboration in a high-pressure, competitive environment",
    ],
    technologies: ["Blockchain", "Problem Solving", "Team Collaboration"],
  },
  {
    title: "Project Management",
    role: "Full Stack Developer",
    period: "Project • Web-Based Management System",
    url: "https://pm-frontend-x6p3.onrender.com/",
    github: "https://github.com/Rajankannaujiya/projectmangement",
    description: [
      "Built an online management platform with full CRUD functionality for projects and tasks",
      "Reduced duplicate code by ~30% through the development of reusable UI components",
      "Implemented task assignment, deadlines, and dashboards using RESTful APIs",
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Node.js", "JWT"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Where I've Focused My Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-100">
          {/* LEFT SIDE: TAB LIST */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            {projects.map((proj, index) => (
              <button
                key={proj.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-5 py-3 text-sm font-mono transition-all duration-300 text-left border-b-2 md:border-b-0 md:border-l-2
                  ${
                    activeTab === index
                      ? "text-primary border-primary bg-primary/5"
                      : "text-muted-foreground border-border hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {proj.title}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: CONTENT AREA */}
          <div className="flex-1">
            <StaggerChildren key={activeTab} staggerDelay={80}>
              <StaggerChild>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group flex items-center gap-2">
                    <span className="text-primary">@</span>
                    {projects[activeTab].role}
                  </h3>
                  
                  <div className="flex gap-4">
                    {projects[activeTab].github && (
                      <a 
                        href={projects[activeTab].github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                        title="View GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {projects[activeTab].url && (
                      <a 
                        href={projects[activeTab].url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerChild>

              <StaggerChild>
                <div className="flex items-center gap-2 mb-6">
                  <Terminal className="w-4 h-4 text-primary" />
                  <p className="text-sm font-mono text-primary uppercase tracking-wider">
                    {projects[activeTab].period}
                  </p>
                </div>
              </StaggerChild>

              <div className="space-y-4">
                {projects[activeTab].description.map((item, index) => (
                  <StaggerChild key={index}>
                    <div className="flex gap-3 text-muted-foreground leading-relaxed group">
                      <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">▹</span>
                      <p className="text-md">{item}</p>
                    </div>
                  </StaggerChild>
                ))}
              </div>

              <StaggerChild>
                <div className="flex flex-wrap gap-2 mt-10">
                  {projects[activeTab].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded hover:border-primary/40 hover:text-primary transition-colors duration-300 bg-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </StaggerChild>
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}