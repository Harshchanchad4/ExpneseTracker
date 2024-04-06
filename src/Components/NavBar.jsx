// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-gray-800 shadow-md text-white'>
      <nav className="flex justify-between items-center h-20 w-11/12 max-w-[1080px] mx-auto">
        <NavLink to="/" className="ml-5 text-xl font-semibold hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/showCategory" className="text-xl font-semibold hover:text-gray-300">
          Show Category
        </NavLink>
        <NavLink to="/chart" className="text-xl font-semibold hover:text-gray-300">
          Chart
        </NavLink>
      </nav>
    </div>
  );
};
export default NavBar;