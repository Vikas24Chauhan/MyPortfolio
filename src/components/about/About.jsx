import { useEffect, useRef } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the SVG draw animation
            if (svgRef.current) {
              svgRef.current.classList.add("animate");
            }
          }
        });
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-section" ref={sectionRef}>
        <div className="about-content">
          <h2>
            <span className="heading-wrap">
              About
              <svg
                ref={svgRef}
                className="sketch-oval"
                viewBox="0 10 220 60"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 12,34
                     A 104,22 0 1 1 30,54"
                  fill="none"
                  stroke="#feb122"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="oval-path"
                />
              </svg>
            </span>{" "}
            Me
          </h2>
          <p>
            React.js Developer with 2+ years of experience in building scalable,
            high-performance, and responsive web applications, actively seeking
            a Frontend / React.js Developer role. Proficient in React.js,
            JavaScript (ES6+), HTML, CSS, and Tailwind CSS, with a strong focus
            on developing clean, reusable components and delivering seamless
            user experiences.
            <br />
            <br />
            Hands-on expertise in API integration, state management, and modern
            development tools such as Git and Vite, enabling efficient and
            maintainable application development. Strong focus on performance
            optimization, code quality, and user-centric design to deliver
            impactful solutions.
            <br />
            <br />
            Driven by continuous learning, I stay updated with the latest
            industry trends to build efficient, scalable, and production-ready
            frontend applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
