import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experiences } from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      {/* <Hero /> */}

      <section id="/">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <Footer />
    </Router>
  );
}

export default App;
