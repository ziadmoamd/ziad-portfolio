import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi"

export default function Footer() {
    const links = [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Skills",
            href: "#skills"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ]

    const socials = [
        {
            name: "GitHub",
            icon: FiGithub,
            href: "#"
        },
        {
            name: "LinkedIn",
            icon: FiLinkedin,
            href: "#"
        }
    ]

    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505]">
            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
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
            <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-red-600/5 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Main Footer */}
                <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
                    {/* Brand */}
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
                            once: true
                        }}
                        transition={{
                            duration: 0.6
                        }}>
                        {/* Logo */}
                        <a
                            href="#home"
                            className="inline-block text-3xl font-black tracking-tight text-white">
                            ZIAD
                            <span className="text-red-600">.</span>
                        </a>

                        <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">
                            Front-End Developer focused on building modern, responsive and
                            interactive web experiences.
                        </p>

                        {/* Status */}
                        <div className="mt-7 flex items-center gap-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                            </span>

                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                Available for work
                            </span>
                        </div>
                    </motion.div>

                    {/* Navigation */}
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
                            once: true
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }}>
                        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-600">
                            Navigation
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white">
                                    <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-4" />

                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5" />

                {/* Bottom */}
                <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
                    {/* Copyright */}
                    <p className="text-xs text-zinc-700">
                        © {new Date().getFullYear()} Ziad. All rights reserved.
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {socials.map((social) => {
                            const Icon = social.icon

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-600 transition-all duration-300 hover:border-red-600/30 hover:bg-red-600/5 hover:text-red-500">
                                    <Icon
                                        size={17}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </a>
                            )
                        })}

                        {/* Back To Top */}
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="group ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]">
                            <FiArrowUp
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-1"
                            />
                        </a>
                    </div>
                </div>

                {/* Signature */}
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
                        duration: 0.8
                    }}
                    className="border-t border-white/5 py-5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-800">
                        Designed & Built by Ziad
                        <span className="mx-2 text-red-600">•</span>
                        With React
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
