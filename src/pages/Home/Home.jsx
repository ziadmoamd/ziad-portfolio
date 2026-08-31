import Navbar from "../../components/Navbar/Navbar"

import Hero from "../../sections/Hero/Hero"
import About from "../../sections/About/About"
import Skills from "../../sections/Skills/Skills"
import Experience from "../../sections/Experience/Experience"
import Projects from "../../sections/Projects/Projects"
import Contact from "../../sections/Contact/Contact"

import SEO from "../../SEO/SEO"
import Footer from "../../components/Footer/Footer"

export default function Home() {
    return (
        <>
            <SEO
                title="Ziad | Front-End Developer"
                description="Portfolio of Ziad, a Front-End Developer specializing in React, JavaScript and modern web experiences."
                url="https://your-domain.com/"
            />

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </>
    )
}
