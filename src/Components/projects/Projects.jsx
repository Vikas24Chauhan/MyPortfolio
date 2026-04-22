import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CDN from "../Images/cdn.png";
import TenHR from "../Images/ten-hr-consulting.png";
import TenAI from "../Images/ten-ai-consulting-Labs.png";
import PublicAdvocacy from "../Images/public_advocacy.png";
import Edusity from "../Images/edusity.png";
import Pokemon from "../Images/pokemon.png";
import TenFunding from "../Images/ten_funding.png";
import TenToddlers from "../Images/ten_toddlers.png";
import Imagify from "../Images/imagify.png";
import VcIncubation from "../Images/vcIncubation.png";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "TEN HR Consulting",
      image: TenHR,
      description:
        "The TEN HR Consulting website is offering you Entrepreneurship Network’s HR services. The TEN-HR-Consulting website is proud to offer HR services from The Entrepreneurship Network, providing expert solutions to support your business's growth and success.",
      color: "cyan",
      link: "https://ten-hr-consulting-self.vercel.app/",
    },
    {
      id: 2,
      title: "TEN Funding",
      image: TenFunding,
      description:
        "TEN Funding is the ultimate platform for exploring the investors backing The Entrepreneurship Network (TEN). It connects aspiring entrepreneurs with the funding ecosystem that powers TEN's innovative projects. By bridging the gap between visionaries and financial support, TEN Funding fosters a thriving entrepreneurial community.",
      color: "blue",
      link: "https://ten-funding-lime.vercel.app/",
    },
    {
      id: 3,
      title: "IMAGIFY",
      image: Imagify,
      description:
        "Developed a web-based application that converts text into images, allowing users to generate visually appealing text-based graphics. The project utilizes modern web technologies, including React.js for the frontend and Node.js for backend processing. Implemented features such as customizable fonts, colors, and backgrounds to enhance user creativity. Designed an intuitive UI for seamless user experience and optimized performance for fast image generation.",
      color: "purple",
      link: "https://imagify-ten-mu.vercel.app/",
    },
    {
      id: 4,
      title: "TEN Toddlers",
      image: TenToddlers,
      description:
        "This website is a comprehensive resource dedicated to Baby Brain Development, offering valuable guidance to help parents nurture their child's cognitive and intellectual growth. With expert mentors available, parents can receive personalized support and scientifically-backed strategies tailored to their baby's developmental stage. The platform covers a wide range of topics, including sensory development, early learning techniques, memory-building activities, and language skills enhancement.",
      color: "amber",
      link: "https://ten-toddlers-mu.vercel.app/",
    },
    {
      id: 5,
      title: "Edusity",
      image: Edusity,
      description:
        "Welcome to our College Website, your go-to resource for comprehensive information about our institution. Explore our academic programs, campus life, admissions process, and more. Whether you're a prospective student or just curious about what we offer, you'll find everything you need to know right here.",
      color: "emerald",
      link: "https://vikas24chauhan.github.io/edusity/",
    },
  ];

  const moveToSlide = (targetIndex) => {
    if (targetIndex < 0 || targetIndex >= projects.length) return;

    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const card = track.children[0];
    const cardWidth = card.offsetWidth;
    const cardMargin = parseInt(window.getComputedStyle(card).marginRight) * 2;

    const amountToMove = targetIndex * (cardWidth + cardMargin);
    const containerCenter = container.offsetWidth / 2;
    const cardCenter = cardWidth / 2;
    const targetTranslateX = containerCenter - cardCenter - amountToMove;

    track.style.transform = `translateX(${targetTranslateX - 25}px)`;
    setCurrentIndex(targetIndex);

    // Flash effect
    const flashEffect = document.createElement("div");
    flashEffect.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(56, 189, 248, 0.1);
      z-index: 30;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    container.appendChild(flashEffect);

    setTimeout(() => {
      flashEffect.style.opacity = "0.3";
      setTimeout(() => {
        flashEffect.style.opacity = "0";
        setTimeout(() => {
          if (container.contains(flashEffect)) {
            container.removeChild(flashEffect);
          }
        }, 200);
      }, 100);
    }, 10);
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      moveToSlide(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const pos = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    setStartPos(pos);

    const track = trackRef.current;
    const transformMatrix = window
      .getComputedStyle(track)
      .getPropertyValue("transform");
    const translate =
      transformMatrix !== "none" ? parseInt(transformMatrix.split(",")[4]) : 0;

    setCurrentTranslate(translate);
    setPrevTranslate(translate);
    track.style.transition = "none";
    track.style.cursor = "grabbing";
  };

  const handleDrag = (e) => {
    if (!isDragging) return;

    const currentPosition = e.type.includes("mouse")
      ? e.pageX
      : e.touches[0].clientX;
    const moveX = currentPosition - startPos;
    const newTranslate = prevTranslate + moveX;
    setCurrentTranslate(newTranslate);

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const track = trackRef.current;
    if (!track) return;

    track.style.transition =
      "transform 0.75s cubic-bezier(0.21, 0.61, 0.35, 1)";
    track.style.cursor = "grab";

    const movedBy = currentTranslate - prevTranslate;
    const card = track.children[0];
    const cardWidth = card.offsetWidth;
    const threshold = cardWidth / 3.5;

    if (movedBy < -threshold && currentIndex < projects.length - 1) {
      moveToSlide(currentIndex + 1);
    } else if (movedBy > threshold && currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    } else {
      moveToSlide(currentIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrev();
      }
    };

    const handleResize = () => {
      moveToSlide(currentIndex);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  useEffect(() => {
    // Initialize carousel position
    setTimeout(() => {
      moveToSlide(currentIndex);
    }, 100);
  }, []);

  const getCardClass = (index) => {
    if (index === currentIndex)
      return "projects-carousel-card projects-is-active";
    if (index === currentIndex - 1)
      return "projects-carousel-card projects-is-prev";
    if (index === currentIndex + 1)
      return "projects-carousel-card projects-is-next";
    if (index < currentIndex - 1)
      return "projects-carousel-card projects-is-far-prev";
    if (index > currentIndex + 1)
      return "projects-carousel-card projects-is-far-next";
    return "projects-carousel-card";
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-desc">
        Here are some of the projects I've developed and worked on, showcasing
        my skills and creativity.
      </p>

      <div className="projects-main" ref={containerRef}>
        <div
          className="projects-carousel-track"
          ref={trackRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDrag}
          onTouchEnd={handleDragEnd}
        >
          {projects.map((project, index) => (
            <div key={project.id} className={getCardClass(index)}>
              <div className="projects-card-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects-card-image"
                />
              </div>
              <div className="projects-card-content">
                <h3
                  className={`projects-card-title text-xl font-bold text-${project.color}-400`}
                  data-text={project.title}
                >
                  {project.title}
                </h3>
                <p className="projects-card-description">
                  {project.description}
                </p>
                <NavLink
                  to={project.link}
                  target="_blank"
                  className="projects-card-link"
                >
                  Live Project
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <button
          className="projects-carousel-button projects-prev"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="projects-carousel-button projects-next"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="projects-carousel-indicators">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`projects-indicator ${
                index === currentIndex ? "projects-active" : ""
              }`}
              onClick={() => moveToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
