import React from 'react'
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="h-16 bg-gray-100 flex justify-between items-center">
      <img src="./public/image1.png" className="h-11 w-11 ml-4" />
      <div className="flex justify-around items-center gap-5 mr-4">
        <Link to="/">Home</Link>
        <Link to="/About"> About </Link>
        <button>
          <FaMoon className="ml-4" />
        </button>
      </div>
    </div>
  );
}

export default Header