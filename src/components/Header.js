import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Uvyne Rop
          </div>
          <nav className="flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
