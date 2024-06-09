import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">Hello, I'm Uvyne Rop</h1>
        <p className="mt-4 text-gray-600">A Passionate Fullstack Developer</p>
        <a href="#about" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
