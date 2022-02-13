import React from 'react'

const Block = ({heading, description, img, }) => {
    return (
          <div className="mx-12 lg:mx-0 bg-bgblock shadow-block border-2 border-borderblock rounded-large flex flex-col justify-center items-center h-5/6 md: w-4/5 lg:w-full lg:h-full ">
            <img className="lg:mt-16 justify-center" src={img} alt=""/>
            <p className="p-5 font-body text-center text-white lg:pb-4 lg:font-bold lg:text-blockheading lg:px-20">{heading}</p>
            <div style={{width:'280px', height: '34px'}} className="lg:ml-[79px] lg:mr-[80px] lg:mb-20">
              <p className="lg:pl-10 lg:pr-10 text-center text-blockdes  lg:pb-20 w-full h-full lg:text-blockdes ">{description}</p>
            </div>
          </div>
    )
}

export default Block
