import React from "react";
import Socials from "./Socials";
import Logo from "../assets/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={'/'} className="max-w-[200px]">
            <h1 className="uppercase lg:text-4xl md:text-3xl text-grey">Samibond</h1>
        </Link>
        <nav  className='flex max-lg:hidden gap-12 font-semibold'>
            <Link to={'/'} className="text-[#696c6d] hover:text-primary transition">Home</Link>
            <Link to={'about'} className="text-[#696c6d] hover:text-primary transition">About</Link>
            <Link to={'portfolio'} className="text-[#696c6d] hover:text-primary transition">Portfolio</Link>
            <Link to={'contact'} className="text-[#696c6d] hover:text-primary transition">Contact</Link>
        </nav>
      </div>
        <Socials/>
        <MobileNav/>
    </div>
  );
};

export default Header;
