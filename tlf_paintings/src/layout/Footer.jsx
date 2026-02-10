import React from "react";
import PaintedHouse from "../assets/painting-house.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-container footer-section" role="contentinfo">
      <div className="container">
        <div className="row h-[50px] max-sm:mb-5  sm:mb-5">
          <div className="col flex justify-content-center mb-5">
            <nav
              className="flex sm:gap-5 max-sm:gap-7  text-xl"
              aria-label="Footer links"
            >
              <a className="footer-link" href="#services">
                Services
              </a>
              <span aria-hidden="true">|</span>
              <a className="footer-link" href="#gallery">
                Gallery
              </a>
              <span aria-hidden="true">|</span>
              <a className="footer-link" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="flex justify-between max-sm:flex-col">
              <div className="flex flex-column">
                <h2>THE LAST FRONTIER PAINTINGS</h2>
                <div className="mt-2 flex flex-column">
                  <address>
                    <p>San Marcos, TX 78666</p>
                    <p>
                      <a href="tel:+17373879982">Phone: (737) 387-9982</a>
                    </p>
                    <p>SE HABLA ESPAÑOL</p>
                  </address>
                </div>
              </div>
              <div>
                <img
                  src={PaintedHouse}
                  alt="Sample professional painting work"
                  className="house-img pt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>
              &copy; {currentYear} The Last Frontier Paintings. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
