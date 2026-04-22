import React from "react";
import "./Footer.css";
import {
  FiUser,
  FiCpu,
  FiBriefcase,
  FiLayers,
  FiBookOpen,
} from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        {/* About Section */}
        <div className="footer-icon-wrapper">
          <FiUser className="footer-icons" />
          <span className="footer-icon-tooltip">About</span>
        </div>

        {/* Skills Section */}
        <div className="footer-icon-wrapper">
          <FiCpu className="footer-icons" />
          <span className="footer-icon-tooltip">Skills</span>
        </div>

        {/* Experiences Section */}
        <div className="footer-icon-wrapper">
          <FiBriefcase className="footer-icons" />
          <span className="footer-icon-tooltip">Experiences</span>
        </div>

        {/* Projects Section */}
        <div className="footer-icon-wrapper">
          <FiLayers className="footer-icons" />
          <span className="footer-icon-tooltip">Projects</span>
        </div>

        {/* Education Section */}
        <div className="footer-icon-wrapper">
          <FiBookOpen className="footer-icons" />
          <span className="footer-icon-tooltip">Education</span>
        </div>
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
