import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Experiences } from "../components/experiences/Experiences";
import Projects from "../components/projects/Projects";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default HomePage;
