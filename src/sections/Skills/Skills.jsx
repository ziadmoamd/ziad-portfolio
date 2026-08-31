import { motion } from "framer-motion"
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiVite, SiBootstrap, SiGithub } from "react-icons/si"

export default function Skills() {
    const skills = [
        {
            name: "React",
            level: 90,
            icon: FaReact,
            color: "text-[#61DAFB]"
        },
        {
            name: "JavaScript",
            level: 85,
            icon: FaJs,
            color: "text-[#F7DF1E]"
        },
        {
            name: "HTML",
            level: 95,
            icon: FaHtml5,
            color: "text-[#E34F26]"
        },
        {
            name: "CSS",
            level: 90,
            icon: FaCss3Alt,
            color: "text-[#1572B6]"
        },
        {
            name: "Tailwind CSS",
            level: 90,
            icon: SiTailwindcss,
            color: "text-[#06B6D4]"
        },
        {
            name: "Bootstrap",
            level: 85,
            icon: SiBootstrap,
            color: "text-[#7952B3]"
        },
        {
            name: "Git",
            level: 80,
            icon: FaGitAlt,
            color: "text-[#F05032]"
        },
        {
            name: "GitHub",
            level: 85,
            icon: SiGithub,
            color: "text-white"
        },
        {
            name: "Vite",
            level: 85,
            icon: SiVite,
            color: "text-[#646CFF]"
        }
    ]

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            id="skills"
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
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-red-600/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-red-600" />

                        <span className="text-xs uppercase tracking-[0.3em] text-red-500">
                            02 / Skills
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                        WHAT I
                        <br />
                        <span className="text-zinc-600">WORK WITH.</span>
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
                        Technologies and tools I use to build modern, responsive and interactive web
                        experiences.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.15
                    }}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => {
                        const Icon = skill.icon

                        return (
                            <motion.div
                                key={skill.name}
                                variants={cardVariants}
                                whileHover={{
                                    y: -6
                                }}
                                transition={{
                                    duration: 0.25
                                }}
                                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:border-red-600/30">
                                {/* Hover Glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-600/10 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Top */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-red-600/30">
                                            <Icon
                                                size={26}
                                                className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-white">
                                                {skill.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-zinc-600">Front-End</p>
                                        </div>
                                    </div>

                                    <span className="text-sm font-medium text-zinc-500">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="relative z-10 mt-7 h-1 overflow-hidden rounded-full bg-white/5">
                                    <motion.div
                                        initial={{
                                            width: 0
                                        }}
                                        whileInView={{
                                            width: `${skill.level}%`
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.15,
                                            ease: "easeOut"
                                        }}
                                        className="h-full rounded-full bg-red-600"
                                    />
                                </div>

                                {/* Bottom Line */}
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                                        Proficiency
                                    </span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Bottom Tech Stack */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25
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
                        duration: 0.6,
                        delay: 0.2
                    }}
                    className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                Currently exploring
                            </p>

                            <p className="mt-2 text-sm text-zinc-400">
                                Always learning and improving my stack.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["React", "JavaScript", "Tailwind", "Git", "Vite"].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-500 transition-colors duration-300 hover:border-red-600/30 hover:text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
