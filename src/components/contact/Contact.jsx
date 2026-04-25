import React from "react";
import "./Contact.css";
import Talk from "../../assets/images/talk.webp";

const CONTACT_ITEMS = [
  {
    id: "call",
    label: "Call Me",
    value: "+91 98739 05097",
    href: "tel:+919873905097",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.07 2.82 2 2 0 012.06 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    animClass: "contact-cta--call",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 98739 05097",
    href: "https://wa.me/919873905097",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    animClass: "contact-cta--whatsapp",
  },
  {
    id: "mail",
    label: "Email Me",
    value: "vikas24chauhan@gmail.com",
    href: "mailto:vikas24chauhan@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    animClass: "contact-cta--mail",
  },
];

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <section className="contact-section">
        {" "}
        <img className="experiences-talk" src={Talk} alt="" />
        <p className="contact-heading">Contact</p>
        <p className="contact-subheading">
          Have a project in mind or just want to say hi? Reach out - I'd love to
          connect.
        </p>
        <div className="contact-cta-grid">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.id === "whatsapp" ? "_blank" : "_self"}
              rel="noreferrer"
              className={`contact-cta-card ${item.animClass}`}
            >
              <span className="contact-cta-icon">{item.icon}</span>
              <span className="contact-cta-label">{item.label}</span>
              <span className="contact-cta-value">{item.value}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
