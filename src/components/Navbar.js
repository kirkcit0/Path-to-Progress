import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/modules">Modules</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/discussion">Discussion</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
      </ul>
    </nav>
  );
}

// This creates a nad var for the user having already logged in, it includes the code from obove too
// const Navbar = () => {
//   const isLoggedIn = true; // Simulate logged-in state
//   const [nickname] = useState('User123'); // Placeholder for user nickname
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('/'); // Default active link

//   const handleLinkClick = (link) => {
//     setActiveLink(link); // Set the clicked link as active
//     setDropdownOpen(false); // Optionally close the dropdown
//   };

//   // const handleLogout = () => {
//   //   // Logic for logging out
//   //   setIsLoggedIn(false);
//   // };

//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/modules">Modules</Link></li>
//         <li><Link to="/support">Support</Link></li>
//         <li><Link to="/discussion">Discussion</Link></li>
//         <li><Link to="/faq">FAQ</Link></li>
//         {isLoggedIn ? (
//           <li className="dropdown">
//             <span 
//               onMouseOver={() => setDropdownOpen(!dropdownOpen)} 
//               className={dropdownOpen ? 'active' : ''} // Apply active class when dropdown is open
//             >
//               {nickname}
//             </span>
//             {dropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/profile">Profile</Link></li>
//                 <li><Link to="/goals">Goals</Link></li>
//                 <li><Link to="/milestones">Milestones</Link></li>
//                 <li><Link to="/hotlines">Hotlines</Link></li>
//                 <li><Link to="/logout">Logout</Link></li>
//                 {/* <li onClick={handleLogout}>Logout</li> */}
//               </ul>
//             )}
//           </li>
//         ) : (
//           <li><Link to="/login">Login/Signup</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

export default Navbar;
