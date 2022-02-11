import React from "react";

import imgEmail from '../assets/email.png'; 
import imgPhone from '../assets/phone.png'; 
import imgDiscord from '../assets/discord.png';

const Footer = ({logo}) => {
  return (
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10 bg-bgsecondary">
      <a href="/" style={{widht:'210px', height:'70px'}}className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <img className="w-full h-full" src={logo} alt="logo"/>
      </a>
      <div className="flex lg:flex-row space-x-10 items-center justify-around w-1/3 pt-5 lg:pt-0 lg:w-1/3 ">
          <a href="#home" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Home</a>
          <a href="#priorities" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Priorities</a>
          <a href="#clients" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Clients</a>
          <a href="#investors" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Investors</a>
          <a href="#partners" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Partners</a>
          <a href="#contact" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Contact</a>
          <a href="#contact" className="text-base font-body text-white transition-all font-normal hover:text-navhover">Discord</a>
      </div>
      <div className="mt-10 flex flex-row space-x-4 justify-center items-center lg:mt-0 w-1/5">
        <img style={{width:'44px', height:'44px'}} className="w-full h-full" src={imgEmail} alt=''/>
        <img style={{width:'44px', height:'44px'}} className="w-full h-full" src={imgPhone} alt=''/>
        <img style={{width:'44px', height:'44px'}} className="w-full h-full"  src={imgDiscord} alt=''/>
      </div>
    </div>
  );
};

export default Footer;
