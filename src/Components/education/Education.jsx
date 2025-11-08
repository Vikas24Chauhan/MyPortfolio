import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import IMS from "../Images/ims.png";
import GLBajaj from "../Images/gl_bajaj.png";

export const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="education-container">
      <p className="education-heading">Education</p>
      <p className="education-desc">
        The academic institutions and programs that have contributed to my
        knowledge and growth.
      </p>
      <div className="education-timeline">
        <div className={`education-box $education-left_box`}>
          <img
            className="education-icons"
            src={GLBajaj}
            alt="brabu"
            data-aos="zoom-in"
          />
          <div className="education-text_box" data-aos="fade-up">
            <p className="education-title">
              Master of Computer Applications (MCA)
            </p>
            <p className="education-subtitle">
              G L Bajaj Institute of Technology and Management, Greater Noida
            </p>
            <p className="education-date">[ September 2020 - June 2022 ]</p>
            <p className="education-description">
              I did my MCA from G L Bajaj. Master of Computer Applications (MCA)
              is a two-year professional post-graduate course for candidates
              wanting to delve deeper into the world of Computer Application
              development with the help of learning modern programming language.
            </p>
            <span className="education-left_box_arrow"></span>
          </div>
        </div>
        <div className={`education-box education-right_box`}>
          <img
            className="education-icons"
            src={IMS}
            alt="bseb"
            data-aos="zoom-in"
          />
          <div className="education-text_box" data-aos="fade-up">
            <p className="education-title">
              Bachelor of Computer Applications (BCA)
            </p>
            <p className="education-subtitle">IMS Ghaziabad</p>
            <p className="education-date">[ August 2017 - July 2020 ]</p>
            <p>
              I did my BCA from IMS Ghaziabad. It's a three-year undergraduate
              degree program that focuses on computer applications and software
              development.
            </p>
            <span className="education-right_box_arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
