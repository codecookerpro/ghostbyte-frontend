import React from 'react'

const Block = ({heading, description, img, }) => {
    return (
          <div className="border-box bg-bgblock shadow-block border-2 border-borderblock rounded-large lg:flex lg:flex-col lg:justify-around lg:items-center lg:w-full lg:h-full ">
            <img className="lg:mt-16" src={img} alt=""/>
            <p className="p-5 font-body text-center text-white lg:pb-4 lg:font-bold lg:text-blockheading lg:px-20">{heading}</p>
            <div style={{width:'280px', height: '34px'}} className="lg:ml-[79px] lg:mr-[80px] lg:mb-20">
              <p className="p-5 pb-0 pl-10 pr-10 text-center text-blockdes  lg:pb-20 lg:u-full lg:h-full lg:text-blockdes ">{description}</p>
            </div>
          </div>
    )
}

export default Block
