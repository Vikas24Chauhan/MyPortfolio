import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { data, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

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
        const cardInner = card.querySelector(".card-inner");

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
      id: "01",
      title: "CoreBTR",
      image1:
        "https://cdn.dribbble.com/userupload/47497062/file/27f70a5ad3a7f9722977a4d381488680.png",
      image2:
        "https://cdn.dribbble.com/userupload/47515957/file/905e0b72613a02aa7e6e610e3c109759.png",
      image3:
        "https://cdn.dribbble.com/userupload/47515966/file/e381d283aa0b3e7830e842d51b113f78.png",
      description:
        "A Unique platform where concepts finally make sense, where revision stops feeling overwhelming, and where preparation becomes clear, structured, and truly doable. Built by Dr. Zainab Vora for students who are tired of confusion and ready for clarity, CoreBTR is designed with one simple goal-learning that is simpler, smarter, and always student-first.",
      link: "https://corebtr.com",
    },
    {
      id: "02",
      title: "Believers Consultancy",
      image1:
        "https://cdn.dribbble.com/userupload/47497391/file/85909bbce7be333d291ab43c03935d8c.png",
      image2:
        "https://cdn.dribbble.com/userupload/47515958/file/ed46e591d0e08c90848b4a27969faa16.png",
      image3:
        "https://cdn.dribbble.com/userupload/47515963/file/9fb6d806c0226c088dbc3c54ed5e28f9.png",
      description:
        "Your trusted partner for NEET PG Counselling, INICET, medical college admissions, and career guidance. Expert consultation for medical aspirants with rank predictor and college finder tools.",
      link: "https://believersconsultancy.com/",
    },
    {
      id: "03",
      title: "Dr. Zainab Vora",
      image1:
        "https://cdn.dribbble.com/userupload/47497389/file/0be98ce15ff7ca3c4a9ef74cbeecb771.png",
      image2:
        "https://cdn.dribbble.com/userupload/47515961/file/3c18d9d5ac16613553d1a1d99b2f988f.png",
      image3:
        "https://cdn.dribbble.com/userupload/47515965/file/3b8d53dab700f7aed290946ef57d525e.png",
      description:
        "Dr. Zainab Vora MD Radiology ( AIIMS Delhi ), National NEET PG Mentor, and the mastermind behind BTR. An AIIMS New Delhi alumnus and AIR 1 in INI-CET, Dr. Zainab Vora is more than an educator - she is a pillar of hope for PG aspirants across India. With compassion and clarity, she has transformed countless journeys through the BTR course - turning confusion into confidence and dreams into reality which is why she known as the “BTR Queen,” To her students, she is not just a mentor but a belief that says, 'Your story can still change'. “Kahani tumhaari hai. Ho sake toh kamaal likhna.”",
      link: "https://drzainabvora.com/",
    },
    {
      id: "04",
      title: "Dr. Apurv Mehra",
      image1:
        "https://cdn.dribbble.com/userupload/47497388/file/db77ac6244fd2f2c0d725d066d148af5.png",
      image2:
        "https://cdn.dribbble.com/userupload/47515964/file/2073fdd441e6c63b17cdcd9d9c05ee86.png",
      image3:
        "https://cdn.dribbble.com/userupload/47515959/file/60b42362acaa4747d1b992c4830f6d0d.png",
      description:
        "DR. Apurv Mehra MBBS | MS | MD | DNB (Orthopaedics) | DIP.SCOT - Belgium, Leading Orthopedician & Robotic Joint Replacement Surgeon, Renowned Educator, Founder eConceptual, Co - Founder Cerebellum, Founder Vidya Jeevan Education Centre, Founder Vidya Jeevan Clinic for Orthopedics, Bestselling Author of Medical PG Books & Motivational Speaker",
      link: "https://drapurv.com/",
    },
    {
      id: "05",
      title: "eConceptual",
      image1:
        "https://cdn.dribbble.com/userupload/47497390/file/1d672095a08ca88c4aa7aec2cf812306.png",
      image2:
        "https://cdn.dribbble.com/userupload/47515960/file/6b5fd793449a905af766a9eb1223f170.png",
      image3:
        "https://cdn.dribbble.com/userupload/47515962/file/efe6d1a893d60207adc65ed324f90515.png",
      description:
        "A platform for Medical Postgraduate (PG) residents to enhance their skills under the guidance of experienced teachers. App to Master Your Specialization.",
      link: "https://econceptual.com/",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      {/* <Helmet>
        <title></title>

        <meta
          name="description"
          content=""
        />
      </Helmet> */}

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
            key={index}
            className="projects-card"
            data-index={index}
            ref={(el) => addToCardsRef(el, index)}
          >
            <div className="projects-card-inner">
              <div className="project-card-info">
                <h2>
                  {card.id}
                  <span>{card.title}</span>
                </h2>

                <NavLink
                  className="projects-card-btn"
                  to={card.link}
                  target="_blank"
                >
                  Live Project
                </NavLink>
              </div>

              <div className="projects-card-content">
                <p className="projects-card-description">{card.description}</p>
              </div>

              <div className="projects-card-images">
                <div className="projects-card-image1">
                  <img
                    className="projects-card-image"
                    src={card.image1}
                    alt={card.title}
                  />
                </div>
                <div className="projects-card-image2">
                  <img
                    className="projects-card-image"
                    src={card.image2}
                    alt={card.title}
                  />
                  <img
                    className="projects-card-image"
                    src={card.image3}
                    alt={card.title}
                  />
                </div>
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
