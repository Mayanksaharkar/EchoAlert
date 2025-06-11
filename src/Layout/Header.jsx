import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', active: true , link: '#home' },
    { name: 'Features', active: false , link: '#features' },
    { name: 'Pricing', active: false , link: '#pricing' },
    { name: 'Articles', active: false },
    { name: 'Support', active: false }
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-6 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-white font-bold text-xl">EchoAlert</Link>

        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link?.substring(1)}
                smooth={true}
                duration={500}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <button className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20">
          JOIN
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link?.substring(1)}
                smooth={true}
                duration={500}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-center ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mt-4">
              JOIN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;