import { motion } from "framer-motion"
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi"

export default function Contact() {
    const contactInfo = [
        {
            icon: FiMail,
            title: "Email",
            value: "ziadabrahimamir@email.com",
            href: "mailto:ziadabrahimamir@email.com"
        },
        {
            icon: FiMapPin,
            title: "Location",
            value: "Egypt",
            href: "#"
        }
    ]

    const socialLinks = [
        {
            icon: FiGithub,
            name: "GitHub",
            href: "#"
        },
        {
            icon: FiLinkedin,
            name: "LinkedIn",
            href: "#"
        }
    ]

    return (
        <section
            id="contact"
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
            <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[150px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-red-700/5 blur-[130px]" />

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
                            09 / Contact
                        </span>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
                            LET'S BUILD
                            <br />
                            <span className="text-zinc-600">SOMETHING.</span>
                        </h2>

                        <p className="max-w-md text-base leading-7 text-zinc-500 sm:text-lg">
                            Have an idea, a project or just want to say hello? Feel free to get in
                            touch.
                        </p>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Left Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        className="space-y-6">
                        {/* Availability Card */}
                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-7">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />

                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
                                </span>

                                <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                                    Available for work
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Let's work together.
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-500">
                                I'm always interested in working on interesting projects and
                                building meaningful digital experiences.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-7">
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                Contact Information
                            </p>

                            <div className="mt-6 space-y-5">
                                {contactInfo.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="group flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-red-600/30 group-hover:bg-red-600/5">
                                                <Icon
                                                    size={18}
                                                    className="text-red-500"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-xs text-zinc-600">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 transition-all duration-300 hover:border-red-600/30">
                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={18}
                                                className="text-zinc-500 transition-colors group-hover:text-red-500"
                                            />

                                            <span className="text-sm text-zinc-400 group-hover:text-white">
                                                {social.name}
                                            </span>
                                        </div>

                                        <FiArrowUpRight
                                            size={16}
                                            className="text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                                        />
                                    </a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }}
                        className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 sm:p-9">
                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-red-500">
                                Start a conversation
                            </p>

                            <h3 className="mt-3 text-3xl font-bold text-white">
                                Tell me about your project.
                            </h3>
                        </div>

                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs uppercase tracking-wider text-zinc-600">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-red-600/50 focus:bg-white/[0.03]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs uppercase tracking-wider text-zinc-600">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-red-600/50 focus:bg-white/[0.03]"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-xs uppercase tracking-wider text-zinc-600">
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project subject"
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-red-600/50 focus:bg-white/[0.03]"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs uppercase tracking-wider text-zinc-600">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-red-600/50 focus:bg-white/[0.03]"
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                whileHover={{
                                    y: -2
                                }}
                                whileTap={{
                                    scale: 0.98
                                }}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                                Send Message
                                <FiSend
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
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
                        delay: 0.2
                    }}
                    className="mt-16 border-t border-white/5 pt-8 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-700">
                        Have an idea?
                    </p>

                    <a
                        href="mailto:your@email.com"
                        className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-zinc-400 transition-colors hover:text-white">
                        Let's make it happen.
                        <FiArrowUpRight
                            size={18}
                            className="text-red-500"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
