
import React, {useState} from "react";
import img from "../../src/cropped-IMG-20240415-WA0069-129x43.jpg";
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Nav = () => {
    const [Nav,setNav]=useState(false)
    function handleToggle() {
        setNav(!Nav);
    }
  
  return (
    <div>
      <nav className="flex justify-around h-16 z-10">
        <img src={img} alt="" />
        <ul className="flex gap-5 items-center max-sm:hidden">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Freebies</li>
          <li className="cursor-pointer hover:text-blue-500">Online Reviews</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Privacy Policy</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
        <button onClick={handleToggle} className="hidden pl-20 mt-5 max-sm:flex">    { Nav ? < FaOutdent/> : <IoMdClose/>} </button>
      </nav>
      <div className={`${ !Nav ? "top-[0%]" : "h-[250px]"  } md:hidden transition-all duration-1000 absolute top-[-100%] list-none flex gap-2 items-center justify-center flex-col bg-slate-400 text-white w-44 h-60 rounded-r-2xl mt-16`}   >
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">Freebies</li>
        <li className="cursor-pointer hover:text-blue-500">Online Reviews</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Privacy Policy</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
      </div>
    </div>
  );
};

export default Nav;
