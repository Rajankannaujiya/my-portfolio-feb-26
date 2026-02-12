"use client";

import { useEffect } from "react";
import { FadeIn, Magnetic } from "./animations";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "HomeGrocery - Online Grocery Store",
    image: "/homegrocery.png",
    description:
      "A MERN/Next.js platform featuring a Role-Based Access Control system for Users, Admins, and Delivery personnel. It includes live delivery tracking via WebSockets and integrated Razorpay for secure transactions.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "Auth.js",
      "Websockets",
      "Razorpay",
    ],
    github: "https://github.com/Rajankannaujiya/HomeGrocery",
    live: "https://home-grocery-rho.vercel.app/",
    video: "https://www.youtube.com/watch?v=Gdh_BSAE3QM",
  },
  {
    title: "InterviewPlat - Online Interview Platform",
    image: "/interviewPlat.png",
    description:
      "An end-to-end interview management system with WebRTC video conferencing and OTP-authentication. Features an AI chatbot for real-time query resolution and status tracking for candidates.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebRTC",
      "Websockets",
    ],
    github: "https://github.com/Rajankannaujiya/ip-interview",
    live: "https://ip-interview-client.vercel.app/",
    video: "https://www.youtube.com/watch?v=3pgEbPBgc1E",
  },
  {
    title: "Project Management System",
    image: "/projectManagement.png",
    description:
      "A web-based platform with full CRUD functionality for projects and tasks. Built with reusable components that reduced code duplication by ~30% and implemented responsive dashboards via RESTful APIs.",
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Material UI",
      "RTK Query",
    ],
    github: "https://github.com/Rajankannaujiya/projectmangement",
    live: "https://pm-frontend-x6p3.onrender.com/",
    video: "https://www.youtube.com/watch?v=va62d8F6cpA",
  },
];

const otherProjects = [
  {
    title: "Course Publish",
    description:
      "Built a course Management System with secure roles, CRUD functionality, email notifications, and automated certificate generation.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Prometheus",
      "Grafana",
      "Nodemailer",
    ],
    github: "https://github.com/Rajankannaujiya/coursePublish",
    live: "https://course-publish-usin.vercel.app",
  },
  {
    title: "Muzer",
    description:
      "Developed a collaborative video sharing platform using YouTube links with real-time upvoting/downvoting features.",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/Rajankannaujiya/muzer",
    live: "https://muzer-kappa.vercel.app",
  },
  {
    title: "Blog Website",
    description:
      "A secure, full-stack blogging platform supporting complete CRUD operations for posts and user profiles.",
    technologies: [
      "React.js",
      "Hono",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Node.js",
    ],
    github: "https://github.com/Rajankannaujiya/myblog-ts",
    live: "https://myblog-theta-gules.vercel.app",
  },
];

export function Projects() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }, []);

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
              Selected Works
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
          </div>
        </FadeIn>

        <div className="space-y-32 md:space-y-48">
          {featuredProjects.map((project, index) => {
            const videoId = project.video.split("v=")[1]?.split("&")[0];

            return (
              <FadeIn key={project.title} delay={index * 100}>
                <div
                  className={`relative grid md:grid-cols-12 gap-8 items-center`}
                >
                  {/* Media Section */}
                  <div
                    className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""} relative group`}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-black shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                      {project.video ? (
                        <>
                          <iframe
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 scale-[1.02]"
                            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&vq=hd1080`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            onLoad={(e) => {
                              const frame = e.target as HTMLIFrameElement;

                              // Function to send speed command
                              const setSpeed = () => {
                                if (frame.contentWindow) {
                                  // Change '2' to '3' if you want 3x speed
                                  frame.contentWindow.postMessage(
                                    JSON.stringify({
                                      event: "command",
                                      func: "setPlaybackRate",
                                      args: [2, true],
                                    }),
                                    "*",
                                  );
                                }
                              };

                              // Execute immediately and then again after 1s to ensure it takes effect
                              setSpeed();
                              setTimeout(setSpeed, 1000);
                            }}
                            style={{ pointerEvents: "none" }}
                          />
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                          />
                          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-20 pointer-events-none" />
                        </>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div
                    className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""} z-30`}
                  >
                    <div
                      className={`flex flex-col ${index % 2 === 1 ? "md:items-end md:text-right" : "md:items-start"}`}
                    >
                      <p className="text-primary font-mono text-xs font-semibold tracking-widest uppercase mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>

                      <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-xl mb-6 relative">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div
                        className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                      >
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono font-bold text-muted-foreground border border-border px-2 py-1 rounded bg-secondary/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <Magnetic>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all font-mono text-sm group"
                          >
                            <Github className="w-5 h-5" /> Code
                          </a>
                        </Magnetic>
                        <Magnetic>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all font-mono text-sm group"
                          >
                            <ExternalLink className="w-5 h-5" /> Live
                          </a>
                        </Magnetic>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Small Projects Grid */}
        <div className="mt-48 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-16">
            Other Noteworthy Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 50}>
              <div className="group h-full bg-card/40 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-8 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
