import React, { useState } from "react";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill ,BsPersonHearts} from "react-icons/bs";
import { MdFavorite,MdCollectionsBookmark } from "react-icons/md";
import { CgLogOut} from "react-icons/cg";
// import { FaHandsHelping} from "react-icons/fa";
import avatar from '../Assets/avatar.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav,setNav] = useState(false)

  return (
    <div className="  flex justify-between items-center h-25 max-w-[1640px] mx-auto px-4 bg-[#F9EDEC] text-purple-900 p-5 font-source-code-pro font-bold ">
      {/* Left Nav */}
      <div className="flex items-center">
        <div  className="mr-12 cursor-pointer text-[#E84F88]">
          <AiOutlineMenu onClick={()=> setNav(!nav)} size={25} />
        </div>
        <ul className="hidden sm:flex gap-10  ">
          <li className="cursor-default ml-2 hover:text-xl duration-200"><Link to="/trends">Trends</Link></li>
          <li className="cursor-default hover:text-xl duration-200"><Link to="/collections">Collections</Link></li>
          <li className="cursor-default hover:text-xl duration-200 "><Link to="/designers">Designers</Link></li>
        </ul>
      </div>
      {/* Nav right */}
      <div className="flex items-center gap-10 ">
        <h1 className="flex items-center gap-2 cursor-pointer">
          Search <BsSearch  size={20} />
        </h1>
        <BsFillCartFill className="cursor-pointer" size={20} />
        <img src={avatar} alt="Avatar"></img>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (<div className="bg-purple-900/20 fixed w-full h-screen z-10 top-0 left-0"></div>) : (null)}


        {/* Side Drawer Menu */}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-50 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-50 duration-300'}>
        <AiOutlineClose  onClick={()=> setNav(!nav)} className="absolute right-4 top-4 cursor-pointer" size={25}/>

        <h2 className="text-2xl p-4 text-[#E84F88] font-bold cursor-default">NEW SEASON <span className="text-[#51abc8]">LOOKS</span></h2>

<nav>
    <ul className="flex flex-col  p-4 text-purple-900  ">
    <li className="text-xl py-4 flex items-center cursor-pointer"><CgLogOut className="m-4" size={20}/><Link to = '/'>Home</Link></li>

          <li className="text-xl py-4 flex items-center  cursor-pointer"><MdFavorite className="m-4" size={20}/><Link to="/Trends">Trends</Link></li>
          <li className="text-xl py-4 flex items-center cursor-pointer"><MdCollectionsBookmark className="m-4" size={20}/><Link to="/Collections">Collections</Link></li>
          <li className="text-xl py-4 flex items-center cursor-pointer"><BsPersonHearts className="m-4" size={20}/><Link to="/Designers">Designers</Link></li>
          {/* <li className="text-xl py-4 flex items-center cursor-pointer"><FaHandsHelping className="m-4" size={20}/><Link to="/Footer">Contact Us</Link></li> */}
    </ul>
</nav>

        </div>
    </div>


  );
};

export default Navbar;
