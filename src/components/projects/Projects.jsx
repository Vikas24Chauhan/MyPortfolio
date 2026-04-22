import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { data, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import CDN from "../../assets/images/cdn.png";
import TenHR from "../../assets/images/ten-hr-consulting.png";
import TenAI from "../../assets/images/ten-ai-consulting-Labs.png";
import PublicAdvocacy from "../../assets/images/public_advocacy.png";
import Edusity from "../../assets/images/edusity.png";
import Pokemon from "../../assets/images/pokemon.png";
import TenFunding from "../../assets/images/ten_funding.png";
import TenToddlers from "../../assets/images/ten_toddlers.png";
import Imagify from "../../assets/images/imagify.png";
import VcIncubation from "../../assets/images/vcIncubation.png";

function Projects() {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    const initializeScrollEffects = () => {
      const cardsContainer = cardsContainerRef.current;
      const cards = cardsRef.current;

      if (!cardsContainer || cards.length === 0) return;

      cardsContainer.style.setProperty(
        "--cards-count",
        cards.length.toString(),
      );
      cardsContainer.style.setProperty(
        "--card-height",
        `${cards[0].clientHeight}px`,
      );

      cards.forEach((card, index) => {
        if (!card) return;

        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card__inner");

        if (!nextCard || !cardInner) return;

        const handleScroll = () => {
          const nextCardRect = nextCard.getBoundingClientRect();
          const containerRect = cardsContainer.getBoundingClientRect();

          const cardHeight = card.clientHeight;
          const windowHeight = window.innerHeight;

          const offsetTopPx = offsetTop;
          const offsetBottom = windowHeight - cardHeight;

          const elementTop = nextCardRect.top - containerRect.top;
          const elementBottom = nextCardRect.bottom - containerRect.top;

          const start = offsetTopPx;
          const end = offsetBottom;

          let percentageY = 0;

          if (elementTop <= start) {
            percentageY = 100;
          } else if (elementBottom >= end) {
            percentageY = 0;
          } else {
            percentageY =
              ((start - elementTop) /
                (end - start - elementTop + elementBottom)) *
              100;
            percentageY = Math.max(0, Math.min(100, percentageY));
          }

          const scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          });

          const brightness = valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          });

          cardInner.style.transform = `scale(${scale})`;
          cardInner.style.filter = `brightness(${brightness})`;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      });
    };

    const valueAtPercentage = ({ from, to, percentage }) => {
      return from + (to - from) * (percentage / 100);
    };

    const cleanupFunctions = initializeScrollEffects();

    return () => {
      if (cleanupFunctions) {
        cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
      }
    };
  }, []);

  const addToCardsRef = (el, index) => {
    cardsRef.current[index] = el;
  };

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

  return (
    <div id="projects" className="projects-container">
      <Helmet>
        <title>Conceptual Radiology Books - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="Conceptual Radiology books by Dr. Zainab Vora help for radiology residents build strong basics, clear imaging concepts, & confident exam oriented clinical thinking."
        />
      </Helmet>

      <div className="projects-head">
        <p className="projects-heading">Projects</p>
        <p className="projects-desc">
          Here are some of the projects I've developed and worked on, showcasing
          my skills and creativity.
        </p>
      </div>

      <div className="projects-cards" ref={cardsContainerRef}>
        {projects.map((card, index) => (
          <div
            key={card.id}
            className="projects-card"
            data-index={index}
            ref={(el) => addToCardsRef(el, index)}
          >
            <div className="projects-card__inner">
              <div className="projects-card__image-container">
                <img
                  className="projects-card__image"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="projects-card__content">
                <h3 className="projects-card__title">{card.title}</h3>
                <p className="projects-card__description">{card.description}</p>
                <NavLink
                  className="projects-card__btn"
                  to={card.link}
                  target="_blank"
                >
                  Check Sample Pages
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-space-bottom" />
    </div>
  );
}

export default Projects;
