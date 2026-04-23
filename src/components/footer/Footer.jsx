import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FiUser,
  FiCpu,
  FiBriefcase,
  FiLayers,
  FiBookOpen,
} from "react-icons/fi";

function Footer() {
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80; // 80 for navbar height
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + scrollPosition;
        const height = section.offsetHeight;
        if (
          scrollPosition >= top - windowHeight * 0.5 &&
          scrollPosition < top + height - windowHeight * 0.5
        ) {
          setActiveLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", icon: <FiUser className="footer-icons" />, label: "About" },
    { id: "skills", icon: <FiCpu className="footer-icons" />, label: "Skills" },
    {
      id: "experiences",
      icon: <FiBriefcase className="footer-icons" />,
      label: "Experiences",
    },
    {
      id: "projects",
      icon: <FiLayers className="footer-icons" />,
      label: "Projects",
    },
    {
      id: "education",
      icon: <FiBookOpen className="footer-icons" />,
      label: "Education",
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-section">
        {navItems.map(({ id, icon, label }) => (
          <div
            key={id}
            className={`footer-icon-wrapper ${activeLink === id ? "footer-active" : ""}`}
            onClick={() => scrollToSection(id)}
          >
            {icon}
            <span className="footer-icon-tooltip">{label}</span>
          </div>
        ))}
      </div>

      <div className="footer-last">
        <p className="footer-copy">
          © 2026 Developer Vikas. All rights reserved.
        </p>
        <p className="footer-copy">Made with Love ❤️</p>
      </div>
    </div>
  );
}

export default Footer;
