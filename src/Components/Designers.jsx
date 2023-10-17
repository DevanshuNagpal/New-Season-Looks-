// ResponsiveComponent.js
import React from 'react';
import model11 from "../Assets/model11.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Designers = () => {
  return (
    <div id='Designers'>
    <Navbar/>
    <div className="flex justify-center items-center flex-wrap text-4xl p-4 pt-10  gap-16 mx-w-[1360px] mx-auto  text-gray-300">
      <div className="glamour">GLAMOUR</div>
      <div className="ELLE">ELLE</div>
      <div className="marieclaire">marieclaire</div>
      <div className="GQ">GQ</div>
      <div className="VOGUE">VOGUE</div>
      <div className="COSMOPOLITAN font-oswald">COSMOPOLITAN</div>
    </div>

    <div id='designers'>
    <div className="flex flex-col justify-center lg:flex-row gap-2 lg:items-center lg:justify-center mx-auto my-20 lg max-w-[1360px]  ">
      <div className="flex justify-center items-center bg-[#f4f0f0]">
        <img src={model11} alt="sa" className="  rounded-xl" />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col  justify-center items-center sm:items-center gap-5 bg-[#f8f5f5] h-[27rem]">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl flex items-center md:text-3xl font-source-code-pro font-semibold text-[#d13a6b]">
            TOP 20 TRENDS FOR
          </h2>
          <h2 className="text-2xl md:text-4xl font-source-code-pro font-bold  text-[#d13a6b]">
            SPRING/SUMMER
          </h2>
        <p className="text-gray-700 justify-center max-w-[30rem]">
          With Seventies influences from Saturday night fever to hippy deluxe, a
          khaki nod to military style alongside nautical accents, experiments
          with transparency, patchworks of vintage prints and a mix &amp; match
          approach to volume and fabric, for Summer 2015 we're set to see
          contrast take center stage. Stay a step ahead as we present a round-up
          of the runway trends set to take Spring/Summer 2015 by storm.
        </p>
        </div>
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center">
            <button
              type="submit"
              className="btn bg-[#51abc8] text-white hover:bg-[#d13a6b] border-none"
              id="submit-btn"
            >
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   <Footer/>
    </div>
  );
};

export default Designers;
