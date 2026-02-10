import { useState } from "react";
import "./styles/App.css";
import TopNav from "./layout/TopNav";
import PaintedHouse from "./assets/painting-house.png";
import ShowcaseCard from "./components/GalleryCard";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <TopNav />

      <div id="main" className="container-fluid px-0">
        <div className="section-container">
          <Banner />
          <section className="callToActionsBanner">
            <div className="flex justify-center gap-x-20">
              <a href="tel:+17373879982" aria-label="Call TLF Paintings">
                <button className="bg-color-dark-grey text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  CALL NOW
                </button>
              </a>
              <a href="#contactSection" aria-label="Get a quote">
                <button className="bg-color-dark-grey text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  GET A QUOTE
                </button>
              </a>
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

        <div className="section-container off-section" id="servicesSection">
          <Services />
        </div>

        <div className="section-container " id="gallerySection">
          <Gallery />
        </div>

        <div className="section-container off-section" id="contactSection">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
