import { Navbar } from "./Components/navbar/Navbar";
import { About } from "./Components/about/About";
import { Skills } from "./Components/skills/Skills";
import { Projects } from "./Components/projects/Projects";
import { Experiences } from "./Components/experiences/Experiences";
import { Education } from "./Components/education/Education";
import { Footer } from "./Components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router basename="MyPortfolio">
      <Navbar />
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
};

export default App;
