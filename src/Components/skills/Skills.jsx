import "./Skills.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import Reactjs from "../../assets/images/reactjs.png";
import WordPress from "../../assets/images/wordpress_logo.png";
// import MERN from "../../assets/images/mern.png";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JavaScript from "../../assets/images/javascript.png";
import Nodejs from "../../assets/images/nodejs.png";
import Expressjs from "../../assets/images/expressjs.png";
import MongoDB from "../../assets/images/mongodb.png";
import RestAPI from "../../assets/images/restapi.png";
import Git from "../../assets/images/git.png";
import GitHub from "../../assets/images/github.png";
import VSCode from "../../assets/images/vscode.png";
import ChatGPT from "../../assets/images/chatgpt.png";
import C from "../../assets/images/c.png";
import Java from "../../assets/images/java.png";
import Python from "../../assets/images/python.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice()) {
      const elements = document.querySelectorAll(".tilt");
      elements.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          reverse: true,
          glare: true,
          scale: 1.1,
          "max-glare": 0.3,
        });
      });
    }
  }, []);

  return (
    <div id="skills" className="skills-container">
      <div className="skills-section">
        <p className="skills-heading">Skills</p>
        <p className="skills-desc">
          Tools and programming languages I utilize to create and develop
          innovative projects.
        </p>

        <div className="skills-cards_container">
          <div className="skills-cards">
            <div className="skills-card tilt">
              <h2 className="skills-card-title">Languages</h2>
              <div className="skills-tech_box">
                <div className="skills-tech">
                  <img src={C} alt="c" />C
                </div>
                <div className="skills-tech">
                  <img src={Java} alt="java" />
                  Java
                </div>
                <div className="skills-tech">
                  <img src={Python} alt="python" />
                  Python
                </div>
                <div className="skills-tech">
                  <img src={JavaScript} alt="javascript" />
                  JavaScript
                </div>
              </div>
            </div>

            <div className="skills-card tilt">
              <h2 className="skills-card-title">Frontend</h2>
              <div className="skills-tech_box">
                <div className="skills-tech">
                  <img src={Reactjs} alt="reactjs" />
                  React.js
                </div>
                {/* <div className="skills-tech">
                <img src={MERN} alt="" />
                MERN Stack
              </div> */}
                <div className="skills-tech">
                  <img src={HTML} alt="html" />
                  HTML
                </div>
                <div className="skills-tech">
                  <img src={CSS} alt="css" />
                  CSS
                </div>
                <div className="skills-tech">
                  <img src={JavaScript} alt="javascript" />
                  JavaScript
                </div>
                <div className="skills-tech">
                  <img src={WordPress} alt="wordpress" />
                  WordPress
                </div>
              </div>
            </div>

            <div className="skills-card tilt">
              <h2 className="skills-card-title">Other Tools</h2>
              <div className="skills-tech_box">
                <div className="skills-tech">
                  <img src={Git} alt="git" />
                  Git
                </div>
                <div className="skills-tech">
                  <img src={GitHub} alt="github" />
                  GitHub
                </div>

                <div className="skills-tech">
                  <img src={VSCode} alt="vscode" />
                  VS Code
                </div>

                {/* <div className="skills-tech">
                <img src={ChatGPT} alt="chatgpt" />
                ChatGPT
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
