import { motion } from "framer-motion"
import { FiCode, FiMonitor, FiLayers, FiArrowUpRight } from "react-icons/fi"

export default function About() {
    const stats = [
        {
            number: "10+",
            label: "Projects Built"
        },
        {
            number: "4+",
            label: "Years Learning"
        },
        {
            number: "8+",
            label: "Technologies"
        }
    ]

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
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
            id="about"
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
            <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-red-600/5 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-red-600" />

                        <span className="text-xs uppercase tracking-[0.3em] text-red-500">
                            01 / About
                        </span>
                    </div>

                    <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                        I DON'T JUST WRITE CODE.
                        <br />
                        <span className="text-zinc-600">I BUILD EXPERIENCES.</span>
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}>
                        <motion.p
                            variants={itemVariants}
                            className="max-w-2xl text-lg leading-8 text-zinc-400">
                            I'm a{" "}
                            <span className="font-medium text-white">Front-End Developer</span>{" "}
                            focused on building modern, responsive and interactive web experiences.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
                            I enjoy turning ideas into clean and functional interfaces using modern
                            technologies. My focus is writing maintainable code while creating
                            interfaces that feel smooth, intuitive and enjoyable to use.
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 grid gap-4 sm:grid-cols-3">
                            {/* Card */}
                            <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:bg-red-600/[0.03]">
                                <FiCode
                                    size={24}
                                    className="mb-5 text-red-500 transition-transform duration-300 group-hover:scale-110"
                                />

                                <h3 className="font-semibold text-white">Clean Code</h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    Structured and maintainable code.
                                </p>
                            </div>

                            {/* Card */}
                            <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:bg-red-600/[0.03]">
                                <FiMonitor
                                    size={24}
                                    className="mb-5 text-red-500 transition-transform duration-300 group-hover:scale-110"
                                />

                                <h3 className="font-semibold text-white">Responsive</h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    Interfaces for every screen.
                                </p>
                            </div>

                            {/* Card */}
                            <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:bg-red-600/[0.03]">
                                <FiLayers
                                    size={24}
                                    className="mb-5 text-red-500 transition-transform duration-300 group-hover:scale-110"
                                />

                                <h3 className="font-semibold text-white">Modern UI</h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    Modern and interactive experiences.
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.a
                            variants={itemVariants}
                            href="#projects"
                            className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                            Explore my work
                            <FiArrowUpRight
                                size={18}
                                className="text-red-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </motion.a>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut"
                        }}
                        className="relative">
                        {/* Decorative Circle */}
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-red-600/10" />

                        {/* Main Card */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 shadow-2xl">
                            {/* Card Header */}
                            <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-5">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                        Developer
                                    </p>

                                    <h3 className="mt-2 text-xl font-bold text-white">
                                        Ziad Mohamed
                                    </h3>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/20 bg-red-600/5">
                                    <FiCode
                                        className="text-red-500"
                                        size={20}
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-zinc-600">Role</span>

                                    <span className="text-sm text-zinc-300">
                                        Front-End Developer
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-zinc-600">Focus</span>

                                    <span className="text-sm text-zinc-300">Web Development</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-zinc-600">Stack</span>

                                    <span className="text-sm text-zinc-300">React + Tailwind</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-zinc-600">Status</span>

                                    <span className="flex items-center gap-2 text-sm text-red-500">
                                        <span className="h-2 w-2 rounded-full bg-red-500" />
                                        Available
                                    </span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-8 grid grid-cols-3 border-t border-white/5 pt-7">
                                {stats.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className={`text-center ${
                                            index !== 0 ? "border-l border-white/5" : ""
                                        }`}>
                                        <div className="text-2xl font-black text-white">
                                            {stat.number}
                                        </div>

                                        <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
