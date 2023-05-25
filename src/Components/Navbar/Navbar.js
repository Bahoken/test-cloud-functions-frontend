import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUsers,faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">Logo</div>
          <ul className="ml-4 flex space-x-4">
            <li>
              <a href="#" className="text-white flex items-center">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white flex items-center">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Users
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            User
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
