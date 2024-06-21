import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hedi Samet</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Project
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a
            href="https://www.linkedin.com/in/samet-mohamed-hedi/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/medhedi.samet"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/hedi.samet/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          
        </div>

        <span className="footer__copy">
        &#169; All rigths reserved
        </span>

      </div>
    </footer>
  );
};

export default Footer;
