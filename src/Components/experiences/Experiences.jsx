import React, { useEffect } from "react";
import "./Experiences.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LeewayHertz from "../Images/leewayHertz.png";
import Ten from "../Images/ten.webp";
import BD from "../Images/bd-logo.jpg";

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
        <div className="experiences-box experiences-right_box">
          <img
            className="experiences-icons"
            src={BD}
            alt="LeewayHertz Logo"
            data-aos="zoom-in"
          />
          <div className="experiences-text_box" data-aos="fade-up">
            <p className="experiences-title">Believers Destination</p>
            <p className="experiences-subtitle">Web Developer</p>
            <p className="experiences-subtitle">May 2025 - Present</p>
            <div className="experiences-tags_box">
              <span className="experiences-tags">React js</span>
              <span className="experiences-tags">JavaScript</span>
              <span className="experiences-tags">HTML</span>
              <span className="experiences-tags">CSS</span>
              <span className="experiences-tags">Wordpress</span>
            </div>
            <p className="experiences-description">
              As a Web Developer at Believers Destination, I am privileged to
              merge my passion for technology with my dedication to faith. My
              role involves designing, developing, and maintaining web platforms
              that facilitate community, provide spiritual resources, and
              support the organization's mission. I specialize in creating
              seamless, accessible, and engaging online experiences that
              resonate with a global audience and serve a divine purpose. My
              work is more than code; it's a contribution to a community of
              believers.
            </p>
            <div className="experiences-button_box">
              {/* <a
                href="https://drive.google.com/file/d/1odjYJPZPrrafRozvgODwfMmsdhxr4WtV/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Experience Letter
              </a> */}
            </div>
            <span className="experiences-right_box_arrow"></span>
          </div>
        </div>

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
            <p className="experiences-subtitle">September 2024 - May 2025</p>
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
              <a
                href="https://drive.google.com/file/d/1HcDOVHWdth6CdIEcQJ3D9neYOK2cI7GG/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Experience Letter
              </a>
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
            <p className="experiences-subtitle">Software Developer</p>
            <p className="experiences-subtitle">February 2022 - March 2023</p>
            <div className="experiences-tags_box">
              <span className="experiences-tags">Node js</span>
              <span className="experiences-tags">React js</span>
              <span className="experiences-tags">Express js</span>
              <span className="experiences-tags">MongoDB</span>
              <span className="experiences-tags">JavaScript</span>
            </div>
            <p className="experiences-description">
              As a Software Developer with a year of intensive experience at
              LeewayHertz, I have honed my skills in building and optimizing
              sophisticated backend systems. My core expertise lies in Node.js,
              where I developed scalable RESTful APIs, enhanced server
              performance, and ensured seamless integration with frontend
              architectures. I thrive on writing clean, maintainable code and am
              passionate about tackling complex technical challenges to deliver
              reliable and high-impact software solutions.
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
