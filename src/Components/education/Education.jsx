import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="education" className="education-container">
      <div className="education-section">
        <p className="education-heading">Education</p>

        <p className="education-subheading">
          The academic institutions and programs that have contributed to my
          knowledge and growth.
        </p>

        <div className="education-cards">
          <div className="education-card1" data-aos="fade-up">
            <div className="education-card-content">
              <h2 className="education-title">
                Master of Computer Applications (MCA)
              </h2>

              <h3 className="education-subtitle">
                G L Bajaj Institute of Technology and Management, Greater Noida
              </h3>

              <h4 className="education-time">[ September 2020 - June 2022 ]</h4>

              <p className="education-description">
                I completed my MCA from G L Bajaj. Master of Computer
                Applications (MCA) is a two-year professional postgraduate
                program focused on advanced computer applications, software
                development, and modern programming technologies.
              </p>
            </div>
          </div>

          <div
            className="education-card2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="education-card-content">
              <h2 className="education-title">
                Bachelor of Computer Applications (BCA)
              </h2>

              <h3 className="education-subtitle">IMSUC Ghaziabad</h3>

              <h4 className="education-time">[ August 2017 - July 2020 ]</h4>

              <p className="education-description">
                I completed my BCA from IMS Ghaziabad. It is a three-year
                undergraduate degree program focused on computer applications,
                programming fundamentals, and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
