import React, { useEffect } from "react";
import styles from "./Timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CDNLogo from "../Images/cdn_logo.jpg";
import CDN from "../Images/cdn.png";
import TenHRLogo from "../Images/ten_hr_logo.jpg";
import TenHR from "../Images/ten-hr-consulting.png";
import TenAILogo from "../Images/ten_ai_logo.jpg";
import TenAI from "../Images/ten-ai-consulting-Labs.png";
import PublicAdvocacyLogo from "../Images/public_advocacy_logo.png";
import PublicAdvocacy from "../Images/public_advocacy.png";
import EdusityLogo from "../Images/edusity_logo.png";
import Edusity from "../Images/edusity.png";
import PokemonLogo from "../Images/pokemon_logo.jpg";
import Pokemon from "../Images/pokemon.png";
import TenFundingLogo from "../Images/ten_funding_logo.png";
import TenFunding from "../Images/ten_funding.png";
import TentoddlersLogo from "../Images/ten_toddlers_logo.png";
import TenToddlers from "../Images/ten_toddlers.png";
import ImagifyLogo from "../Images/imagify_logo.png";
import Imagify from "../Images/imagify.png";
import VcIncubationLogo from "../Images/vcIncubation_logo.png";
import VcIncubation from "../Images/vcIncubation.png";

export const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("#video");
    elements.forEach((element) => {
      element.play().catch((error) => {
        console.error("Autoplay failed", error);
      });
    });
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Projects</p>
      <p className={styles.desc}>
        Here are some of the projects I've developed and worked on, showcasing
        my skills and creativity.
      </p>
      <div className={styles.timeline}>
        {/* Project 1 */}
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={CDNLogo}
            alt="CDN Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={CDN} alt="CDN Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>Node js</span>
              <span className={styles.tags}>Express Js</span>
              <span className={styles.tags}>AWS</span>
              <span className={styles.tags}>Grafana</span>
            </div>
            <p className={styles.description}>
              The CDN Performance Dashboard is designed to monitor and analyze
              the performance of content delivery networks (CDNs) by calculating
              key metrics such as Time to First Byte (TTFB) and Time to Last
              Byte (TTLB) for images. This dashboard provides detailed insights
              by displaying data across various networks and regions, enabling
              users to assess and optimize CDN performance efficiently.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://vikas24chauhan.github.io/404-ErrorPage/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={TenHRLogo}
            alt="TEN-HR-Consulting Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={TenHR} alt="TEN-HR-Consulting Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>Node js</span>
              <span className={styles.tags}>Express Js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>TEN HR Consulting</p>
            <p>
              The TEN HR Consulting website is offering you Entrepreneurship
              Network’s HR services. The TEN-HR-Consulting website is proud to
              offer HR services from The Entrepreneurship Network, providing
              expert solutions to support your business's growth and success.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://ten-hr-consulting-self.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={TenFundingLogo}
            alt="Ten Funding Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={TenFunding} alt="Ten Funding Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>TEN Funding</p>
            <p>
              TEN Funding is the ultimate platform for exploring the investors
              backing The Entrepreneurship Network (TEN). It connects aspiring
              entrepreneurs with the funding ecosystem that powers TEN's
              innovative projects. By bridging the gap between visionaries and
              financial support, TEN Funding fosters a thriving entrepreneurial
              community.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://ten-funding-lime.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        {/* Project 4 */}
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={TentoddlersLogo}
            alt="Ten Toddlers Logo"
            data-aos="zoom-in"
            style={{ backgroundColor: "white" }}
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={TenToddlers} alt="Ten toddlers Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>Node js</span>
              <span className={styles.tags}>Express Js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>TEN Toddlers</p>
            <p>
              This website is a comprehensive resource dedicated to Baby Brain
              Development, offering valuable guidance to help parents nurture
              their child's cognitive and intellectual growth. With expert
              mentors available, parents can receive personalized support and
              scientifically-backed strategies tailored to their baby's
              developmental stage. The platform covers a wide range of topics,
              including sensory development, early learning techniques,
              memory-building activities, and language skills enhancement.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://ten-toddlers-mu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>

        {/* Project 5 */}
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={ImagifyLogo}
            alt="Imagify Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={Imagify} alt="Imagify Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>Node js</span>
              <span className={styles.tags}>Express Js</span>
              <span className={styles.tags}>MongoDB</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>IMAGIFY</p>
            <p>
              Developed a web-based application that converts text into images,
              allowing users to generate visually appealing text-based graphics.
              The project utilizes modern web technologies, including React.js
              for the frontend and Node.js for backend processing. Implemented
              features such as customizable fonts, colors, and backgrounds to
              enhance user creativity. Designed an intuitive UI for seamless
              user experience and optimized performance for fast image
              generation.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://imagify-ten-mu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        {/* Project 6 */}
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={VcIncubationLogo}
            alt="VC Incubation Logo"
            data-aos="zoom-in"
            style={{ backgroundColor: "white" }}
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={VcIncubation} alt="VC Incubation Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>VC & Incubation</p>
            <p>
              Developed a comprehensive platform to connect startups with
              venture capitalists and incubators. The project facilitates
              funding opportunities, mentorship, and business growth by
              providing a seamless interface for entrepreneurs and investors.
              Built using modern web technologies like React.js for the frontend
              and Node.js for backend operations, ensuring scalability and
              efficiency. Integrated features such as startup profiling,
              investment tracking, and collaboration tools to streamline the
              incubation process.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://vc-incubation.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>

        {/* Project 7 */}
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={TenAILogo}
            alt="TEN-AI-Consulting-Labs Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={TenAI} alt="TEN-AI-Consulting-Labs Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>TEN AI Consulting Labs</p>
            <p>
              The TEN AI Consulting Labs website highlights The Entrepreneurship
              Network’s services and offerings through a modern, user-friendly
              design. With 16 key components, it delivers a seamless and
              engaging browsing experience.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://ten-ai-consulting-labs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        {/* Project 8 */}
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={PublicAdvocacyLogo}
            alt="Public Advocacy Logo"
            data-aos="zoom-in"
            style={{ backgroundColor: "white" }}
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={PublicAdvocacy} alt="Public Advocacy Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>Public Advocacy</p>
            <p>
              Developed a comprehensive Public Advocacy project aimed at raising
              awareness and fostering community engagement through strategic
              communication, interactive campaigns, and user-friendly digital
              tools, empowering users to make informed decisions and drive
              positive change.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://public-advocacy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>

        {/* Project 9 */}
        <div className={`${styles.box} ${styles.left_box}`}>
          <img
            className={styles.icons}
            src={EdusityLogo}
            alt="Edusity Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={Edusity} alt="Edusity Project Image" />

            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>Edusity</p>
            <p>
              Welcome to our College Website, your go-to resource for
              comprehensive information about our institution. Explore our
              academic programs, campus life, admissions process, and more.
              Whether you're a prospective student or just curious about what we
              offer, you'll find everything you need to know right here.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://vikas24chauhan.github.io/edusity/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.left_box_arrow}></span>
          </div>
        </div>

        {/* Project 10 */}
        <div className={`${styles.box} ${styles.right_box}`}>
          <img
            className={styles.icons}
            src={PokemonLogo}
            alt="Pokemon Logo"
            data-aos="zoom-in"
          />
          <div className={styles.text_box} data-aos="fade-up">
            <img src={Pokemon} alt="Pokemon Project Image" />
            <div className={styles.tags_box}>
              <span className={styles.tags}>React js</span>
              <span className={styles.tags}>JavaScript</span>
              <span className={styles.tags}>HTML</span>
              <span className={styles.tags}>CSS</span>
            </div>
            <p className={styles.title}>Pokemon</p>
            <p>
              Welcome to the ultimate Pokémon Card Collection website! Dive into
              a world of nostalgia and discovery as you explore our extensive
              collection of Pokémon cards, from classic favorites to the latest
              releases. Whether you're a seasoned collector or just starting
              your journey, you'll find detailed information, high-quality
              images, and all the stats you need to enhance your collection or
              relive your favorite Pokémon moments.
            </p>
            <div className={styles.button_box}>
              <a
                href="https://vikas24chauhan.github.io/pokemon/"
                target="_blank"
                rel="noreferrer"
              >
                Live App
              </a>
            </div>
            <span className={styles.right_box_arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
