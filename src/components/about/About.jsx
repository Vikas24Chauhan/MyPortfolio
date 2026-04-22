import { React, useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a React JS Developer with 2+ years of experience in building
            scalable, responsive, and high-performance web applications. I
            specialize in React.js, JavaScript (ES6+), HTML, CSS, and Tailwind
            CSS, with a strong focus on creating clean, reusable components and
            delivering intuitive user experiences.
            <br />
            <br />I have hands-on experience with API integration, state
            management, and modern development tools like Git and Vite.
            Passionate about clean code and performance optimization, I
            continuously work on improving my skills and building efficient,
            user-centric digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
