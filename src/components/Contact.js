import React from "react";

import imgEmail from '../assets/email.png'; 
import imgPhone from '../assets/phone.png'; 
import imgDiscord from '../assets/discord.png'; 


const Contact = ({actionText, email, phone, discord, mainActionText, extraActionText}) => {
  return (
    <div id="contact">
      <div className="items-center justify-center lg:pb-24 lg:pt-24 lg:flex lg:flex-row space-x-12 bg-bgsecondary">
        <div className="w-2/6 flex flex-col justify-center space-y-6 items-start">
          <div>
            <p className="-mt-16 text-lg font-semibold text-center text-white  lg:pr-12 lg:mb-10 lg:mt-1 lg:text-contactAction lg:font-semibold lg:text-left">{actionText}</p>
          </div>
          <div>
            <img className="w-fit h-fit " src={imgEmail} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8  lg:font-medium lg:text-left">{email}</p>
          </div>
          <div>
            <img className="w-fit h-fit " src={imgPhone} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8  lg:font-medium lg:text-left">{phone}</p>
          </div>
          <div>
            <img className="w-fit h-fit " src={imgDiscord} alt=''/>
            <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactDes lg:mb-8 lg:font-medium lg:text-left">{discord}</p>

          </div>
        </div>

        <div className="lg:w-2/6 flex flex-col justify-center items-start space-y-8 lg:pb-24 lg:pt-24">
          <p className="mt-2 text-base font-body text-center font-medium text-white lg:text-contactTitle lg:mt-2 lg:font-semibold lg:text-left">{mainActionText}</p>
          <div style={{width: '473px', height: '70px'}} >
            <input type='email' className="lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large" placeholder="Email"></input>
          </div>
          <div style={{width: '473px', height: '70px'}}>
            <input type='text' className="lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large" placeholder="Subject"></input>
          </div>
        <div style={{width: '473px', height: '200px'}}>
          <textarea  type='text' cols='40' rows='5' className="lg:w-full lg:h-full bg-bgblock shadow-block text-white opacitey-50 p-4 rounded-large" placeholder="Content..."></textarea >
        </div>
          <div style={{width: '473px', height: '70px'}}>
            <button
            style={{background: 'linear-gradient(151.46deg, #01F2FF -14.78%, #0142FF 113.99%)'}}
              className="capitalize font-body font-medium text-contactDes text-center text-white transition-all rounded-large focus:ring2 lg:shadow-2xl lg:ring-2 lg:w-full lg:h-full"
            >
              {extraActionText}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
