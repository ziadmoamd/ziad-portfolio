import { motion, useMotionValue, useSpring } from "framer-motion"
import { FiArrowUpRight, FiDownload } from "react-icons/fi"

export default function Hero() {
    // =========================
    // Mouse Position
    // =========================

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth movement
    const gridX = useSpring(mouseX, {
        stiffness: 50,
        damping: 20
    })

    const gridY = useSpring(mouseY, {
        stiffness: 50,
        damping: 20
    })

    // =========================
    // Mouse Move
    // =========================

    const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 30

        const y = (event.clientY / window.innerHeight - 0.5) * 30

        mouseX.set(x)
        mouseY.set(y)
    }

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-[#050505]">
            {/* ========================================
                Background
            ======================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Base Grid */}
                <div
                    className="absolute -inset-10 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(#ffffff 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px"
                    }}
                />

                {/* Interactive Grid */}
                <motion.div
                    style={{
                        x: gridX,
                        y: gridY
                    }}
                    className="absolute -inset-10 opacity-[0.12]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(#ef4444 1px, transparent 1px),
                                linear-gradient(90deg, #ef4444 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",

                            maskImage: `
                                radial-gradient(
                                    220px circle at 50% 50%,
                                    black 0%,
                                    transparent 100%
                                )
                            `,

                            WebkitMaskImage: `
                                radial-gradient(
                                    220px circle at 50% 50%,
                                    black 0%,
                                    transparent 100%
                                )
                            `
                        }}
                    />
                </motion.div>
            </div>

            {/* ========================================
                Red Glows
            ======================================== */}

            <motion.div
                style={{
                    x: gridX,
                    y: gridY
                }}
                className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[150px]"
            />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-red-700/5 blur-[130px]" />

            {/* ========================================
                Main Content
            ======================================== */}

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* ==================================
                        Left Content
                    ================================== */}

                    <div>
                        {/* Status */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            className="mb-7 flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />

                                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
                            </span>

                            <span className="text-sm uppercase tracking-widest text-zinc-400">
                                Available for work
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 35
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1
                            }}
                            className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                            HI, I'M
                            <br />
                            <span className="text-white">ZIAD</span>
                            <span className="text-red-600">.</span>
                            <br />
                            <span className="text-zinc-500">FRONT-END</span>
                            <br />
                            DEVELOPER
                            <span className="text-red-600">.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.25
                            }}
                            className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                            I build modern, responsive and interactive web experiences that combine
                            clean code with thoughtful design.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.35
                            }}
                            className="mt-9 flex flex-wrap gap-4">
                            {/* Projects */}
                            <a
                                href="#projects"
                                className="group flex items-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                View Projects
                                <FiArrowUpRight
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            {/* CV */}
                            <a
                                href="public/cv/Ziad_Mohamed_Abrahim_Frontend_Instructor_CV.docx"
                                download
                                className="flex items-center gap-3 rounded-lg border border-white/10 px-6 py-3.5 font-medium text-zinc-300 transition-all duration-300 hover:border-red-600 hover:text-white">
                                Download CV
                                <FiDownload size={18} />
                            </a>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5
                            }}
                            className="mt-12">
                            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
                                Currently working with
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {["React", "JavaScript", "Tailwind CSS", "Git"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-500 transition-all duration-300 hover:border-red-600/40 hover:bg-red-600/5 hover:text-zinc-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ==================================
                        Right Visual
                    ================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}
                        className="relative hidden h-[500px] items-center justify-center lg:flex">
                        {/* Outer Circle */}
                        <motion.div
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute h-[380px] w-[380px] rounded-full border border-red-600/10"
                        />

                        {/* Inner Circle */}
                        <motion.div
                            animate={{
                                rotate: -360
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute h-[300px] w-[300px] rounded-full border border-white/5"
                        />

                        {/* Glow */}
                        <div className="absolute h-56 w-56 rounded-full bg-red-600/10 blur-[80px]" />

                        {/* Code Card */}
                        <motion.div
                            style={{
                                x: gridX,
                                y: gridY
                            }}
                            whileHover={{
                                scale: 1.02
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="relative w-[330px] rounded-2xl border border-white/10 bg-[#0a0a0a]/90 p-6 shadow-2xl backdrop-blur-xl">
                            {/* Card Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-600" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                </div>

                                <span className="text-xs text-zinc-600">developer.js</span>
                            </div>

                            {/* Code */}
                            <div className="font-mono text-sm leading-8">
                                <p>
                                    <span className="text-red-500">const</span>{" "}
                                    <span className="text-zinc-300">developer</span> =
                                </p>

                                <p className="pl-5">{"{"}</p>

                                <p className="pl-10">
                                    <span className="text-zinc-500">name:</span>{" "}
                                    <span className="text-red-400">"Ziad"</span>,
                                </p>

                                <p className="pl-10">
                                    <span className="text-zinc-500">role:</span>{" "}
                                    <span className="text-red-400">"Frontend"</span>,
                                </p>

                                <p className="pl-10">
                                    <span className="text-zinc-500">stack:</span>{" "}
                                    <span className="text-red-400">"React"</span>,
                                </p>

                                <p className="pl-10">
                                    <span className="text-zinc-500">passion:</span>{" "}
                                    <span className="text-red-400">"Building"</span>
                                </p>

                                <p className="pl-5">{"}"}</p>

                                <p className="mt-3">
                                    <span className="text-red-500">developer</span>.
                                    <span className="text-zinc-300">create()</span>;
                                </p>
                            </div>

                            {/* Card Bottom */}
                            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                                <span className="text-xs text-zinc-600">2026</span>

                                <span className="flex items-center gap-2 text-xs text-red-500">
                                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    Online
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ========================================
                Scroll Indicator
            ======================================== */}

            <motion.a
                href="#about"
                animate={{
                    y: [0, 8, 0]
                }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-600 md:flex">
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

                <div className="h-10 w-px bg-gradient-to-b from-red-600 to-transparent" />
            </motion.a>
        </section>
    )
}
