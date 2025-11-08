import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-name">Vikas Chauhan</p>
      <div className="footer-links">
        <a
          href="https://drive.google.com/file/d/1T9_0AQpJiOzQn-5X4id2H69GAW2tawTA/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          title="Resume"
        >
          <i className="fa-solid fa-file"></i>
        </a>
        <a
          href="https://github.com/Vikas24Chauhan"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vikas-chauhan-74924912b/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:vikas24chauhan@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="tel:+919873905097"
          target="_blank"
          rel="noreferrer"
          title="Phone No."
        >
          <i className="fa-solid fa-phone"></i>
        </a>
        <a
          href="https://maps.app.goo.gl/BrYiQ6DAhRNCEHS46"
          target="_blank"
          rel="noreferrer"
          title="Address"
        >
          <i className="fa-solid fa-location-dot"></i>
        </a>
      </div>
      <p>&copy; 2024 Vikas Chauhan. All rights reserved.</p>
    </div>
  );
};
