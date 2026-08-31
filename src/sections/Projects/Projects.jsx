import { motion } from "framer-motion"
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Projects() {
    const projects = [
        {
            number: "01",
            slug: "roadcom",
            title: "RoadCom",
            category: "Web Application",
            description:
                "A modern transportation platform built with React, focusing on a clean user experience, responsive design and reusable components.",
            image: "/projects/roadcom.png",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            github: "#",
            live: "#"
        },

        {
            number: "02",
            slug: "trend-hub",
            title: "Trend Hub",
            category: "E-Commerce",
            description:
                "A modern e-commerce interface designed to provide a smooth shopping experience with responsive layouts and reusable UI components.",
            image: "/projects/trendhub.png",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            github: "#",
            live: "#"
        },

        {
            number: "03",
            slug: "quran",
            title: "Quran & Azkar",
            category: "Web Application",
            description:
                "A clean Islamic web application featuring Quran audio, Hadith content and an interactive Azkar counter with persistent local storage.",
            image: "/projects/quran.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "#",
            live: "#"
        },

        {
            number: "04",
            slug: "portfolio",
            title: "Portfolio",
            category: "Personal Website",
            description:
                "A modern developer portfolio designed with a strong visual identity, smooth animations and responsive layouts.",
            image: "/projects/portfolio.png",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            github: "#",
            live: "#"
        }
    ]

    const containerVariants = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#050505] py-28">
            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(#ffffff 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px"
                    }}
                />
            </div>

            {/* Red Glow */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    transition={{
                        duration: 0.6
                    }}
                    className="mb-16">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-red-600" />

                        <span className="text-xs uppercase tracking-[0.3em] text-red-500">
                            04 / Selected Work
                        </span>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                            PROJECTS
                            <br />
                            <span className="text-zinc-600">THAT SPEAK.</span>
                        </h2>

                        <p className="max-w-md text-base leading-7 text-zinc-500">
                            A selection of projects where design, development and problem solving
                            come together.
                        </p>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <motion.article
                            key={project.number}
                            variants={itemVariants}
                            whileHover={{
                                y: -6
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-colors duration-300 hover:border-red-600/30">
                            {/* Image */}
                            <div className="relative overflow-hidden border-b border-white/10">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />

                                    {/* Number */}
                                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-xs font-bold text-white backdrop-blur-md">
                                        {project.number}
                                    </div>

                                    {/* Project Details */}
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-red-700"
                                        aria-label={`View ${project.title} details`}>
                                        <FiArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category */}
                                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-red-500">
                                    {project.category}
                                </p>

                                {/* Title */}
                                <div className="flex items-start justify-between gap-5">
                                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-red-500 sm:text-3xl">
                                        {project.title}
                                    </h3>

                                    <span className="pt-1 text-zinc-700">{project.number}</span>
                                </div>

                                {/* Description */}
                                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500 transition-colors duration-300 hover:border-red-600/30 hover:text-zinc-300">
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex items-center gap-5">
                                    {/* Details */}
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="group/link flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white">
                                        View Details
                                        <FiArrowUpRight
                                            size={16}
                                            className="text-red-500 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                        />
                                    </Link>

                                    {/* Live Demo */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-white">
                                        Live Demo
                                        <FiExternalLink
                                            size={16}
                                            className="text-red-500 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                        />
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-white">
                                        GitHub
                                        <FiGithub
                                            size={17}
                                            className="transition-transform duration-300 group-hover/link:scale-110"
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}
                    className="mt-16 flex flex-col gap-5 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                        More projects coming soon
                    </span>

                    <a
                        href="#contact"
                        className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white">
                        Have a project?
                        <FiArrowUpRight
                            size={16}
                            className="text-red-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
