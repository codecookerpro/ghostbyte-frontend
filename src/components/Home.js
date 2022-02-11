import React from "react";

import img from '../assets/home.png'; 


const Home = ({appType, tagLine, description, mainActionText}) => {
  return (
    <div id="home">
      <div className="items-center lg:flex lg:flex-row space-x-6 bg-bgprimary">
        <div className="w-2/6 flex flex-col justify-center">
          <p className="pl-32 -mt-16 text-sm font-medium text-center text-lightblue lg:pl-32 lg:-mt-10 lg:text-llg lg:font-medium lg:text-left">{appType}</p>
          <p className="pl-32 mt-2 uppercase text-base font-body text-center font-bold text-white lg:pl-32 lg:text-xxl lg:mt-2 lg:font-bold lg:text-left">{tagLine}</p>
          <p className="pl-32 text-base  font-body text-center text-white opacity-75 lg:pl-32 lg: mt-10 lg:text-base lg:text-left ">{description}</p>
          <div style={{width: '200px', height: '70px'}}>
            <button
            style={{background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)'}}
              className="font-body font-medium text-lg text-center text-white transition-all rounded-small focus:ring2 lg:shadow-2xl lg:ring-2 lg:ml-32 lg: mt-12 lg:w-full lg:h-full"
            >
              {mainActionText}
            </button>

          </div>
        </div>

        <div className="lg:w-3/5">
          <img className="lg:mr-32 lg:mt-24 lg:w-full lg:h-full" src={img} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default Home;
