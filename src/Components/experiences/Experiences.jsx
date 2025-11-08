import React, { useEffect } from "react";
import "./Experiences.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LeewayHertz from "../Images/leewayHertz.png";
import Ten from "../Images/ten.webp";

export const Experiences = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="experiences-container">
      <p className="experiences-heading">Experiences</p>
      <p className="experiences-desc">
        The experiences and roles that have helped me grow and develop my skills
        in the tech field.
      </p>
      <div className="experiences-timeline">
        <div className="experiences-box experiences-left_box">
          <img
            className="experiences-icons"
            src={Ten}
            alt="TEn Logo"
            data-aos="zoom-in"
          />
          <div className="experiences-text_box" data-aos="fade-up">
            <p className="experiences-title">The Entrepreneurship Network</p>
            <p className="experiences-subtitle">React Js Developer</p>
            <p className="experiences-subtitle">September 2024 - Present</p>
            <div className="experiences-tags_box">
              <span className="experiences-tags">React js</span>
              <span className="experiences-tags">JavaScript</span>
              <span className="experiences-tags">HTML</span>
              <span className="experiences-tags">CSS</span>
            </div>
            <p className="experiences-description">
              As a React.js Developer Intern at The Entrepreneurship Network, I
              am actively involved in developing dynamic, user-friendly web
              applications. My role focuses on building and optimizing
              responsive UI components, integrating APIs, and ensuring smooth
              application performance. I bring a strong passion for crafting
              scalable and maintainable React applications while collaborating
              effectively with cross-functional teams.
            </p>
            <div className="experiences-button_box">
              {/* <a href="#" target="_blank" rel="noreferrer">
                Experience Letter
              </a> */}
              <a>Experience Letter</a>
            </div>
            <span className="experiences-left_box_arrow"></span>
          </div>
        </div>

        <div className="experiences-box experiences-right_box">
          <img
            className="experiences-icons"
            src={LeewayHertz}
            alt="LeewayHertz Logo"
            data-aos="zoom-in"
          />
          <div className="experiences-text_box" data-aos="fade-up">
            <p className="experiences-title">LeewayHertz Technology</p>
            <p className="experiences-subtitle">Node Js Developer</p>
            <p className="experiences-subtitle">February 2022 - March 2023</p>
            <div className="experiences-tags_box">
              <span className="experiences-tags">Node js</span>
              <span className="experiences-tags">React js</span>
              <span className="experiences-tags">Express js</span>
              <span className="experiences-tags">MongoDB</span>
              <span className="experiences-tags">JavaScript</span>
            </div>
            <p className="experiences-description">
              As a Node.js Developer with one year of hands-on experience at
              LeewayHertz, I am passionate about building efficient, scalable,
              and robust backend systems. My expertise lies in developing
              RESTful APIs, optimizing server performance, and ensuring seamless
              integration with frontend applications. I am committed to writing
              clean, maintainable code and solving complex problems to deliver
              high-quality backend solutions.
            </p>
            <div className="experiences-button_box">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-e032c.appspot.com/o/experience%20letter.pdf?alt=media&token=c44063e2-7f8a-4ab0-836f-8e07351865f0"
                target="_blank"
                rel="noreferrer"
              >
                Experience Letter
              </a>
            </div>
            <span className="experiences-right_box_arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
