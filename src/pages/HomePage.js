import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import References from "../components/References";
import Contact from "../components/Contact";

export default function HomePage() {
    return (
        <>
            <Intro/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
        </>
    )
}