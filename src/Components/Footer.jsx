// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestP, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] p-4 sm:p-6 text-[#A5A5A5] text-xl">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <div className="flex flex-col text-l items-center gap-4 sm:items-start ">
            <div className="flex flex-col sm:flex-row gap-2">
              <h1 className="text-gray-600 hover:text-2xl duration-200 gap-2"><Link to='/'>Home</Link></h1>
              <h1 className="text-gray-600 hover:text-2xl duration-200 gap-2"><Link to='/Collections'>About</Link></h1>
              <h1 className="text-gray-600 hover:text-2xl duration-200 gap-2"><Link to="/ContactUs">ContactUs</Link></h1>
            </div>
            <div className="text-gray-600">
              Image rights belong to their respective owners.
            </div>
            <div className="text-gray-600">
              Developed by Devanshu-2110990426
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <div className="flex gap-4 mb-4">
          <a href="https://www.pinterest.com">
            <FontAwesomeIcon icon={faPinterestP} className="text-gray-600 hover:scale-125 transform transition-transform duration-500"/></a>
            <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:scale-125 transform transition-transform duration-500" /></a>
            <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="text-gray-600 hover:scale-125 transform transition-transform duration-500" /></a>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 items-center sm:items-end">
            <input
              type="text"
              name="inbox"
              id="inbox"
              placeholder="Get discount codes in your inbox"
              className="p-2 mb-2 sm:mb-0 border border-gray-400 rounded"
            />
            <button className="p-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600 transition duration-300">
            <Link to='/'>Subscribe</Link>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
