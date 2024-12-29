import React, { useState, useEffect } from 'react';
import logo from '../assets/fire.png';
import createIcon from '../assets/plus.svg';
import sun from '../assets/sun.png';
import moon from '../assets/moon.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="../pages/Home.jsx" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Product Store</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 
          rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="../pages/Create.jsx" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
               md:p-0 text-black dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <img src={createIcon} alt="create" />
              </a>
            </li>
            <li>
              <button onClick={toggleTheme} className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
               md:p-0 text-black dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                {theme === 'light' ? (
                  <img src={moon} alt="dark-mode" />
                ) : (
                  <img src={sun} alt="light-mode" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;