import React from "react";
// get / add links somewhere
// import { NavLogo, Socials } from "@/constants";
import { Bars4Icon } from "@heroicons/react/24/solid";
import tlfLogo from "../assets/tlf-logo.png";
const TopNav = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-md z-50 max-sm:px-2 sm:px-5 top-nav">
      <div className="w-full h-full flex  items-center justify-between m-auto ">
        <a href="#about" className="h-auto w-auto items-center hidden md:flex">
          <img
            src={tlfLogo}
            alt="logo"
            width={110}
            height={90}
            className="cursor-pointer hover:animate-spin-slow logo pt-1"
          />
        </a>

        <div className="md:w-[350px] h-full w-full flex items-center justify-between ">
          <div className="flex items-center justify-between border border-white px-[20px] py-[10px] rounded-full nav-link-container">
            <a href="#services" className="nav-link">
              Services
            </a>
          </div>
          <div className="flex items-center justify-between border border-white md:px-[20px] px-[30px] py-[10px] rounded-full nav-link-container">
            <a href="#showcase" className="nav-link">
              Gallery
            </a>
          </div>
          <div className="flex items-center justify-between border border-white px-[20px] py-[10px] rounded-full nav-link-container">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
