import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiBriefcase, FiCalendar, FiArrowUpRight, FiBookOpen, FiChevronDown } from "react-icons/fi"

export default function Experience() {
    const [openCurriculum, setOpenCurriculum] = useState(false)

    const experiences = [
        {
            year: "2023 — 2025",
            role: "Front-End Developer",
            company: "Freelance",
            description:
                "Building responsive and interactive web applications with modern front-end technologies and reusable components.",
            technologies: ["React", "Tailwind CSS", "JavaScript", "Git"]
        },

        {
            year: "2025 — Present",
            role: "Programming Instructor",
            company: "Freelance / Training",
            description:
                "Teaching front-end development through a structured curriculum focused on building strong fundamentals and real-world projects.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "React"
            ],

            curriculum: [
                "HTML Fundamentals",
                "Semantic HTML",
                "Forms & Validation",

                "CSS Fundamentals",
                "Flexbox",
                "CSS Grid",
                "Responsive Design",

                "JavaScript Fundamentals",
                "Variables & Data Types",
                "Operators & Conditions",
                "Loops",
                "Functions",
                "Arrays & Objects",
                "DOM Manipulation",
                "Events",
                "ES6+",
                "Asynchronous JavaScript",
                "Fetch API",

                "Bootstrap",
                "Tailwind CSS",

                "Git & GitHub",

                "React.js Fundamentals",
                "Components & Props",
                "State & Events",
                "React Hooks",
                "React Router",
                "API Integration",

                "Building Real Projects"
            ]
        }
    ]

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
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
            id="experience"
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
            <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-[140px]" />

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
                            03 / Experience
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                        WHERE I'VE
                        <br />
                        <span className="text-zinc-600">BEEN.</span>
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
                        A journey through my work, teaching experience, and continuous growth in web
                        development.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.15
                    }}
                    className="relative">
                    {/* Timeline Line */}
                    <motion.div
                        initial={{
                            scaleY: 0
                        }}
                        whileInView={{
                            scaleY: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut"
                        }}
                        className="absolute left-[231px] top-4 hidden h-[calc(100%-32px)] w-px origin-top bg-gradient-to-b from-red-600 via-red-600/30 to-transparent lg:block"
                    />

                    <div className="space-y-10">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={`${experience.role}-${index}`}
                                variants={itemVariants}
                                className="relative grid gap-8 lg:grid-cols-[240px_1fr]">
                                {/* Date */}
                                <div className="hidden pt-8 lg:block">
                                    <div className="flex items-center justify-end gap-3 pr-10">
                                        <FiCalendar
                                            size={15}
                                            className="shrink-0 text-red-500"
                                        />

                                        <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-zinc-600">
                                            {experience.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{
                                        scale: 0
                                    }}
                                    whileInView={{
                                        scale: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.2
                                    }}
                                    className="absolute left-[220px] top-7 z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-red-600/30 bg-[#050505] lg:flex">
                                    <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
                                </motion.div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{
                                        y: -5
                                    }}
                                    transition={{
                                        duration: 0.25
                                    }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 transition-all duration-300 hover:border-red-600/30">
                                    {/* Hover Glow */}
                                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-600/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Mobile Date */}
                                    <div className="relative z-10 mb-6 flex items-center gap-2 lg:hidden">
                                        <FiCalendar
                                            size={14}
                                            className="text-red-500"
                                        />

                                        <span className="text-xs uppercase tracking-wider text-zinc-600">
                                            {experience.year}
                                        </span>
                                    </div>

                                    {/* Card Header */}
                                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                                                    <FiBriefcase
                                                        size={18}
                                                        className="text-red-500"
                                                    />
                                                </div>

                                                <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                                    Experience
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white">
                                                {experience.role}
                                            </h3>

                                            <p className="mt-1 text-sm text-red-500">
                                                {experience.company}
                                            </p>
                                        </div>

                                        <FiArrowUpRight
                                            size={22}
                                            className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                                        />
                                    </div>

                                    {/* Description */}
                                    <p className="relative z-10 mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
                                        {experience.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500 transition-colors duration-300 hover:border-red-600/30 hover:text-zinc-300">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Curriculum Button */}
                                    {experience.curriculum && (
                                        <div className="relative z-10 mt-7 border-t border-white/5 pt-6">
                                            <button
                                                onClick={() => setOpenCurriculum(!openCurriculum)}
                                                className="flex w-full items-center justify-between text-left">
                                                <span className="flex items-center gap-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white">
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/20 bg-red-600/5">
                                                        <FiBookOpen
                                                            size={17}
                                                            className="text-red-500"
                                                        />
                                                    </span>
                                                    View Course Curriculum
                                                </span>

                                                <motion.span
                                                    animate={{
                                                        rotate: openCurriculum ? 180 : 0
                                                    }}
                                                    transition={{
                                                        duration: 0.3
                                                    }}>
                                                    <FiChevronDown
                                                        size={19}
                                                        className="text-zinc-600"
                                                    />
                                                </motion.span>
                                            </button>

                                            {/* Curriculum */}
                                            <AnimatePresence>
                                                {openCurriculum && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="overflow-hidden">
                                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                                            {experience.curriculum.map(
                                                                (item, curriculumIndex) => (
                                                                    <motion.div
                                                                        key={item}
                                                                        initial={{
                                                                            opacity: 0,
                                                                            x: -10
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                            x: 0
                                                                        }}
                                                                        transition={{
                                                                            delay:
                                                                                curriculumIndex *
                                                                                0.03
                                                                        }}
                                                                        className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-600/10 text-[10px] font-bold text-red-500">
                                                                            {String(
                                                                                curriculumIndex + 1
                                                                            ).padStart(2, "0")}
                                                                        </span>

                                                                        <span className="text-xs text-zinc-500">
                                                                            {item}
                                                                        </span>
                                                                    </motion.div>
                                                                )
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
