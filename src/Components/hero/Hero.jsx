import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 320);
    const t2 = setTimeout(() => setPhase("expand"), 2600);
    return () => [t1, t2].forEach(clearTimeout);
  }, []);

  const [text] = useTypewriter({
    words: ["React Js Developer", "Frontend Developer", "Web Developer"],
    loop: {},
  });

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <section
      id="/"
      className={`hero hero--${phase}`}
      aria-label="Bootcamp Hero"
    >
      <div className="hero-base" />

      <div className="hero-intro-name">
        <p className="hero-intro-doc">
          <span className="hero-intro-doc-span">Welcome</span> to <br /> My{" "}
          <span className="hero-intro-doc-span">Portfolio</span>
        </p>
      </div>

      <div className="hero-left-title">
        <h1 className="hero-name">
          Hi, I am
          <br />
          Vikas Chauhan
        </h1>
        <div className="hero-title">
          I am a{" "}
          <span className="hero-typewriter">
            {text}
            <Cursor />
          </span>
        </div>
      </div>

      <div className="hero-img-wrap">
        <img
          src="https://cdn.dribbble.com/userupload/47441683/file/9f2f3f234c059eb8e4386009ebe38002.png"
          alt="Vikas Chauhan"
          className="hero-img"
        />
      </div>

      <div className="hero-right">
        <span className="hero-text">
          React JS Developer Building Modern, Scalable Web Applications. Focused
          on Clean UI, Performance, and Seamless User Experience.
        </span>
        <a
          href="https://drive.google.com/file/d/1T9_0AQpJiOzQn-5X4id2H69GAW2tawTA/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="hero-resume"
        >
          Check Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
