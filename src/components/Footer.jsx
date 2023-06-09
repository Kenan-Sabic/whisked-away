import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
   <>
    <div className="bg-sandybrown h-1"></div>
    <footer className="bg-neutral-700 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
            <p className="text-gray-400 leading-loose">
               Faris Hadziabdic <br/>
               Adnan Silajdzic <br/>
               Kenan Sabic <br />
               Ismar Aganovic <br />
               Nedzmija Karic <br />
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Navigation</h3>
            <ul className="text-gray-400 leading-loose">
              <li><a href="/">Home</a></li>
              <li><a href="/browse">Browse</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Newsletter</h3>
            <ul className="text-gray-400 leading-loose">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center">
            <a href="#" className="text-orange-500 hover:text-orange-400 mr-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-400 mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-400">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
