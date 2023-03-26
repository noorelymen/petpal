import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBone,
    faPaw,
    faFeatherPointed,
    faCarrot,
    faPhone,
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div id="footer">
      <div className="main-footer">
        <div className="logoinfo" data-aos="fade-up">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <Link to="tel:+213990669090">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="footer-categories">(+213) 990 66 90 90</span>
                </Link>
              </li>
              <li>
                <Link to="mailto:contact@petpal.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="footer-categories">contact@petpal.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column links">
          <h1>Links</h1>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h1>Pets</h1>
          <ul>
            <li className="menu-item">
              <Link to="/dogs">
                <FontAwesomeIcon icon={faBone} />
                <span className="footer-categories">Dogs</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/cats">
                <FontAwesomeIcon icon={faPaw} />
                <span className="footer-categories">Cats</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/birds">
                <FontAwesomeIcon icon={faFeatherPointed} />
                <span className="footer-categories">Birds</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/other">
                <FontAwesomeIcon icon={faCarrot} />
                <span className="footer-categories">Other</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <h1>Follow us</h1>
          <div className="sociallogos">
            <div className="logobox">
              <Link to="#">
                <span className="footer-categories">Instagram</span>
              </Link>

              <Link to="#">
                <span className="footer-categories">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Made with by Noor © Copyright 2021, All Rights Reserved</div>
    </div>
  )
}

export default Footer;