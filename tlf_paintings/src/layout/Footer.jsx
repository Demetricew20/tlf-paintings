import React from "react";
import PaintedHouse from "../assets/painting-house.png";

const Footer = () => {
  return (
    <div className="section-container footer-section">
      <section id="footer">
        <div className="container">
          <div className="row h-[50px]">
            <div className="col flex justify-content-center sm:gap-5 max-sm:gap-7 ">
              <a className="footer-link" href="#servicesSection">
                Services
              </a>
              |
              <a className="footer-link" href="#gallerySection">
                Gallery
              </a>
              |
              <a className="footer-link" href="#contactSection">
                Contact
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="flex justify-between max-sm:flex-col">
                <div className="flex flex-column">
                  <h5>THE LAST FRONTIER PAINTINGS</h5>
                  <div className="mt-2 flex flex-column">
                    <span className="">San Marcos, TX 78666</span>
                    <span>Phone Number: (907) 519-5612</span>
                    <span>SE HABLA ESPANOL</span>
                  </div>
                </div>
                <div>
                  <img src={PaintedHouse} className="house-img pt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
