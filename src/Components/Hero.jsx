import React from 'react';
import froont from '../Assets/froont.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto min-w-[430px]' >
        <div className='relative flex flex-col items-center md:flex-row md:items-center'>
      <div className="absolute text-left text-7xl md:text-8xl font-source-code-pro z-40 font-thin md:left-80 md:mx-auto transform -translate-y-1/2 top-1/2">
        <p className="text-[#E84F88]">NEW</p>
        <p className="font-extrabold text-[#E84F88]">SEASON</p>
        <p className="text-[#51abc8]">LOOKS</p>
      </div>

      <BsArrowLeft className="absolute hidden md:block left-4 md:left-16 text-3xl  md:text-5xl text-[#a5a5a5]" />
      <BsArrowRight className="absolute  hidden md:block right-4 md:right-16 text-3xl  md:text-5xl text-[#a5a5a5] " />

      <img src={froont} alt="front" className=" md:mx-auto" />
    </div>
    </div>
    
  );
};

export default Hero;

