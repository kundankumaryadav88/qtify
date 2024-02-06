// import React from 'react'
import "./Navbar.css"
// import logo from "../logo.png";
// import { IoIosSearch } from "react-icons/io";

// function Navbar() {
//   return (
//     <div className='navbar'>
//         <img src={logo} alt="spotify logo" />
//         <div className='search'>
//             <input type="text" placeholder='Search a album of your choice' />
//             <button>
//                 <IoIosSearch />
//             </button>
//         </div>
//         <button>Give Feedback</button>
//     </div>
//   )
// }

// export default Navbar


// Navbar.js
import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import FeedbackButton from './FeedbackButton';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <FeedbackButton text="Give Feedback" />
    </div>
  );
};

export default Navbar;
