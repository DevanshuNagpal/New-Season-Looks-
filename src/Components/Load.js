import React from 'react';
import { Link } from "react-router-dom";

const Load = () => {
  return (
    <div className='mx-auto px-12 font-source-code-pro py-12 flex justify-center items-center 
    '>
      <button className='max-w-[1360px] w-full m-auto bg-[#F9F9F8] border-none rounded-none h-20'>
        <h1 className=' font-extrabold text-l lg:text-3xl hover:text-[32px] duration-300 text-[#E84F88]'>
          <Link to="/trends">LOAD MORE CLOTHES</Link>
        </h1>
      </button>
    </div>
  );
};

export default Load;
