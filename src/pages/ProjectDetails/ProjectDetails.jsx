import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck } from "react-icons/fi"
import img1 from "../../assets/p1.png"
const projects = [
    {
        slug: "dashboard",
        number: "01",
        title: "Product Management Dashboard",
        category: "Admin Dashboard",
        subtitle: "Product Management Platform",

        image: img1,

        description:
            "A professional product management dashboard built with React, designed to manage products efficiently through a clean, responsive and intuitive interface.",

        overview:
            "The project focuses on building a complete product management experience with reusable React components, centralized state management, persistent data and interactive analytics.",

        technologies: ["React", "Tailwind CSS", "JavaScript", "React Hook Form", "Recharts", "Git"],

        features: [
            "Full product CRUD operations",
            "Product search and filtering",
            "Stock status management",
            "Pagination and sorting",
            "Product image management",
            "Stock analytics with interactive charts",
            "Form validation",
            "Toast notifications",
            "Delete confirmation modal",
            "Responsive dashboard interface",
            "LocalStorage data persistence"
        ],

        github: "https://github.com/ziadmoamd/dashboard",
        live: "https://dashboard-eight-omega-50.vercel.app/"
    },

    {
        slug: "trend-hub",
        number: "02",
        title: "Trend Hub",
        category: "E-Commerce",
        subtitle: "Modern Shopping Experience",

        image: "/projects/trendhub.png",

        description:
            "Trend Hub is a modern e-commerce interface designed to provide users with a smooth and simple shopping experience.",

        overview:
            "The application focuses on clean UI, reusable components and responsive layouts to create a consistent experience across devices.",

        technologies: ["React", "Tailwind CSS", "JavaScript"],

        features: [
            "Responsive product layout",
            "Reusable product cards",
            "Modern navigation",
            "Interactive UI",
            "Responsive design",
            "Clean component structure"
        ],

        github: "#",
        live: "#"
    },

    {
        slug: "quran",
        number: "03",
        title: "Quran & Azkar",
        category: "Web Application",
        subtitle: "Quran & Islamic Content",

        image: "/projects/quran.png",

        description:
            "A clean Islamic web application featuring Quran audio, Hadith content and an interactive Azkar counter.",

        overview:
            "The project combines a simple interface with interactive features and local storage to provide users with a practical experience.",

        technologies: ["HTML", "CSS", "JavaScript"],

        features: [
            "Quran audio player",
            "Hadith section",
            "Azkar counter",
            "Local storage",
            "Responsive design",
            "Interactive interface"
        ],

        github: "#",
        live: "#"
    },

    {
        slug: "portfolio",
        number: "04",
        title: "Personal Portfolio",
        category: "Personal Website",
        subtitle: "Developer Portfolio",

        image: "/projects/portfolio.png",

        description:
            "A modern developer portfolio designed to showcase experience, skills and selected projects.",

        overview:
            "The portfolio uses a dark visual identity with red accents, smooth animations and responsive layouts to create a professional developer presence.",

        technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],

        features: [
            "Animated sections",
            "Responsive design",
            "Project showcase",
            "Experience timeline",
            "Interactive UI",
            "Modern dark theme"
        ],

        github: "#",
        live: "#"
    }
]

export default function ProjectDetails() {
    const { slug } = useParams()

    const project = projects.find((project) => project.slug === slug)

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
                <div className="text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">404</p>

                    <h1 className="text-4xl font-black">PROJECT NOT FOUND.</h1>

                    <Link
                        to="/#projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-medium transition-colors hover:bg-red-700">
                        <FiArrowLeft size={17} />
                        Back to Projects
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
            {/* Background Grid */}
            <div className="pointer-events-none fixed inset-0 opacity-[0.025]">
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
            <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
                {/* Back Button */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}>
                    <Link
                        to="/#projects"
                        className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-red-600/40 group-hover:bg-red-600/10">
                            <FiArrowLeft
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />
                        </span>
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1
                    }}
                    className="mt-20">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="text-xs font-medium text-red-500">{project.number}</span>

                        <span className="h-px w-8 bg-red-600" />

                        <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                            {project.category}
                        </span>
                    </div>

                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                            {project.title}
                        </h1>

                        <p className="mt-5 text-lg uppercase tracking-[0.2em] text-zinc-600 sm:text-xl">
                            {project.subtitle}
                        </p>
                    </div>
                </motion.header>

                {/* Hero Image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}
                    className="group relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* Main Content */}
                <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
                    {/* Left */}
                    <div>
                        {/* Overview */}
                        <motion.section
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
                                amount: 0.2
                            }}
                            transition={{
                                duration: 0.6
                            }}>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-red-600" />

                                <span className="text-xs uppercase tracking-[0.25em] text-red-500">
                                    Overview
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                About The Project
                            </h2>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-500">
                                {project.description}
                            </p>

                            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-500">
                                {project.overview}
                            </p>
                        </motion.section>

                        {/* Features */}
                        <motion.section
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
                                amount: 0.2
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            className="mt-16">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-red-600" />

                                <span className="text-xs uppercase tracking-[0.25em] text-red-500">
                                    Features
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                Key Features
                            </h2>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{
                                            opacity: 0,
                                            x: -15
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05
                                        }}
                                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-600/10">
                                            <FiCheck
                                                size={15}
                                                className="text-red-500"
                                            />
                                        </span>

                                        <span className="text-sm text-zinc-400">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        className="lg:sticky lg:top-10 lg:self-start">
                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                Technologies
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-red-600/30 hover:text-white">
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between rounded-lg bg-red-600 px-4 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
                                    Live Demo
                                    <FiExternalLink
                                        size={17}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-3.5 text-sm font-medium text-zinc-300 transition-all hover:border-red-600/30 hover:text-white">
                                    GitHub
                                    <FiGithub
                                        size={17}
                                        className="transition-transform group-hover:scale-110"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.aside>
                </div>

                {/* Bottom Navigation */}
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
                        duration: 0.6
                    }}
                    className="mt-20 border-t border-white/5 pt-8">
                    <Link
                        to="/#projects"
                        className="group inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white">
                        <FiArrowLeft
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        Back to all projects
                    </Link>
                </motion.div>
            </div>
        </main>
    )
}
