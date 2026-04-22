import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80; // 80 for navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (isOpen) {
      handleIsOpen();
    }
  };

  const [activeLink, setActiveLink] = useState("");
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

  useEffect(() => {
    if (activeLink) {
      navigate(`/${activeLink}`);
    }
  }, [activeLink, navigate]);

  return (
    <nav className="navbar-container">
      <div className="navbar-main">
        <div>
          <Link
            to="/"
            className="navbar-name"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="navbar-brackets">&lt;</span>Vikas
            <span className="navbar-slash">/</span>Chauhan
            <span className="navbar-brackets">&gt;</span>
          </Link>
        </div>
        <div className="navbar-menu_icon" onClick={handleIsOpen}>
          {!isOpen ? "\u2630" : "\u2716"}
        </div>
        <ul className="navbar-collapse">
          <li>
            <NavLink
              to="#about"
              className={
                activeLink === "about" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("about")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#skills"
              className={
                activeLink === "skills" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#experiences"
              className={
                activeLink === "experiences" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("experiences")}
            >
              Experiences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#projects"
              className={
                activeLink === "projects" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#education"
              className={
                activeLink === "education" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("education")}
            >
              Education
            </NavLink>
          </li>
        </ul>
        <div className="navbar-collapse">
          <a
            className="navbar-github"
            href="https://github.com/Vikas24Chauhan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="navbar-dropdown">
          <li>
            <NavLink
              to="#about"
              className={
                activeLink === "about" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("about")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#skills"
              className={
                activeLink === "skills" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#experiences"
              className={
                activeLink === "experiences" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("experiences")}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#projects"
              className={
                activeLink === "projects" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#education"
              className={
                activeLink === "education" ? "navbar-active" : "navbar-anchor"
              }
              onClick={() => scrollToSection("education")}
            >
              Education
            </NavLink>
          </li>
          <li>
            <a
              className="navbar-github"
              href="https://github.com/Vikas24Chauhan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </li>
        </div>
      )}
    </nav>
  );
};
