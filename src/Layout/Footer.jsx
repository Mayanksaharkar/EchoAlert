import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative bg-black/35 text-white py-8 w-[80%] rounded-t-4xl">
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Echo Alert</h2>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaGithub className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Invite</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resource</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Article</li>
              <li className="hover:text-gray-300 cursor-pointer">Terms</li>
              <li className="hover:text-gray-300 cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Business</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;