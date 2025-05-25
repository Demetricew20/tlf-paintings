import { useState } from "react";
import "./styles/App.css";
import TopNav from "./layout/TopNav";
import PaintedHouse from "./assets/painting-house.png";
import ShowcaseCard from "./components/ShowcaseCard";

function App() {
  return (
    <div>
      <TopNav />

      <div id="main" className="container-fluid px-0">
        <div className="section-container">
          <section id="banner" className="mt-[65px]">
            <div className="w-full max-sm:h-[150px] sm:h-[350px] banner"></div>
            {/* <button id="languageBtn">Press</button> */}
          </section>
          <section className="callToActionsBanner">
            <div className="flex justify-center gap-x-20">
              <button>CALL NOW</button>
              <button>GET A QUOTE</button>
            </div>
          </section>
          {/* <section id="about" className="flex justify-center mt-20">
            <div className="sm:max-w-[900px] md:lg:max-w-[1250px]">
              <h2 className="text-center mb-5 font-bold max-md:text-2xl md:text-4xl">
                About Goes Here
              </h2>
              <p className="sm:px-7">
                The Last Frontier Paintings is a professional, locally owned
                painting company..... Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </section> */}
        </div>

        <div className="section-container off-section">
          <section id="services" className="off-section">
            <h2 className="text-center mb-5 font-bold max-md:text-2xl md:text-4xl">
              Services We Offer
            </h2>
            <div className="services-content-container">
              <div className="services-content-wrapper">
                <ul className="services-list gap-x-50">
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    One
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    Two
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    Three
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    Four
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    Five
                  </li>
                  <li>
                    <i className="bi bi-check-square-fill"></i>
                    Six
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="section-container ">
          <section id="showcase">
            <h2 className="text-center text-white mb-5 font-bold max-md:text-2xl md:text-4xl">
              Showcase
            </h2>
            <div className="container">
              <div className="row showcase-container">
                <div
                  id="showcaseColumnOne"
                  className="flex flex-column align-items-center  col gap-5 "
                >
                  <ShowcaseCard />
                  <ShowcaseCard />
                </div>
                <div
                  id="showcaseColumnTwo"
                  className="flex flex-column align-items-center col gap-5"
                >
                  <ShowcaseCard />
                  <ShowcaseCard />
                </div>
              </div>
            </div>
            <div className="container mt-7 text-white">
              <div className="col flex flex-column justify-content-center align-items-center mt-5">
                <span>Interested in our past projects?</span>
                <button className="mt-2">VIEW GALLERY</button>
              </div>
            </div>
          </section>
        </div>

        <div className="section-container off-section">
          <section id="contact">
            <h2 className="text-center text-black mb-5 font-bold max-md:text-2xl md:text-4xl">
              Contact Us
            </h2>
            <div className="container">
              <div className="row">
                <div className="col flex flex-column align-items-center">
                  <p className="text-center">
                    Have a project in mind? Feel out our form for more
                    information or an estimate.
                  </p>
                  <div className="flex flex-column w-100 max-w-[550px] mt-4">
                    <form className="text-black">
                      <div className="mb-3 form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="inputFullName"
                          required
                          placeholder="firstname lastname"
                        />
                        <label for="inputFullName" className="form-label">
                          Name*
                        </label>
                      </div>
                      <div className="mb-3 form-floating">
                        <input
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          className="form-control"
                          id="inputPhoneNumber"
                          required
                          placeholder=""
                        />
                        <label for="inputPhoneNumber" className="form-label">
                          Phone Number*
                        </label>
                      </div>
                      <div className="mb-3 form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmailAddress"
                          required
                          placeholder="email"
                        />
                        <label for="inputEmailAddress" className="form-label">
                          Email Address*
                        </label>
                      </div>
                      <div className="mb-3 form-floating">
                        <textarea
                          className="form-control h-150"
                          style={{ height: "150px" }}
                          placeholder="Leave a comment here"
                          id="inputComments"
                        ></textarea>
                        <label for="inputComments" className="form-label">
                          Questions / Comments
                        </label>
                      </div>

                      <hr />
                      <button
                        type="submit"
                        className="w-100 bg-primary-blue btn btn-primary"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="section-container footer-section">
          <section id="footer">
            <div className="container">
              <div className="row h-[50px]">
                <div className="col flex justify-content-center sm:gap-5 max-sm:gap-7 ">
                  <a className="footer-link" href="/">
                    Services
                  </a>
                  |
                  <a className="footer-link" href="/">
                    Gallery
                  </a>
                  |
                  <a className="footer-link" href="/">
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
      </div>
    </div>
  );
}

export default App;
