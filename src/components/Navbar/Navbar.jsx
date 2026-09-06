import { useState } from "react"
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi"

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-50 min-w-full">
            <nav className="mx-auto max-w-7xl px-6 py-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight text-white">
                        ZIAD<span className="text-red-600">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white">
                                {link.name}

                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Social + CTA */}
                    <div className="hidden items-center gap-4 md:flex">
                        <a
                            href="https://github.com/ziadmoamd"
                            aria-label="GitHub"
                            className="text-zinc-400 transition-colors hover:text-red-500">
                            <FiGithub size={19} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ziad-mohamed-abrahim-98a0732b0/"
                            aria-label="LinkedIn"
                            className="text-zinc-400 transition-colors hover:text-red-500">
                            <FiLinkedin size={19} />
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]">
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white md:hidden"
                        aria-label="Toggle menu">
                        {isOpen ?
                            <FiX size={25} />
                        :   <FiMenu size={25} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
                        isOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
                    }`}>
                    <div className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-white/5 px-3 py-3 text-sm text-zinc-400 transition-colors hover:text-red-500 last:border-0">
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-3 rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-red-700">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
