import React from 'react'
import block4 from '../assets/block4.png';
import block5 from '../assets/block5.png';
import block6 from '../assets/block6.png';

const Partners = () => {
    return (
      <div className='justify-center bg-bgprimary lg:flex lg:flex-row space-x-24 lg:pb-32'>
        <div className="ml-10 lg:ml-0 lg:justify-center"> 
          <img className=" lg:w-fit lg:h-fit" src={block4} alt=""/>
        </div>
        <div className="ml-10 lg:ml-0 lg:justify-center ">
          <img className=" lg:w-fit lg:h-fit" src={block5} alt=""/>
        </div>  
        <div className="ml-10 lg:ml-0 lg:justify-center ">
          <img className=" lg:w-fit lg:h-fit" src={block6} alt=""/>
        </div>
        
      </div>
    )
}

export default Partners
