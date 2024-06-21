import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [textColor, setTextColor] = useState('text-gray-800');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const colors = ['text-blue-600', 'text-green-500', 'text-purple-600', 'text-yellow-500', 'text-green-500', 'text-orange-200'];
    const updateColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      setTextColor(colors[randomIndex]);
    };

    const interval = setInterval(updateColor, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById(' About');
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'});

    }
  }

  
  return (
    <section >
      <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 bg-red-400 ">
        <source src="https://media.gettyimages.com/id/1361637396/video/close-up-and-slow-motion-of-orange-pink-and-yellow-inks-splashing-and-interacting-in-water.mp4?s=mp4-640x640-gi&k=20&c=00k_OF8nnezqVT-jf9FTZtbK0Ar650oj2xYmCWnXBlE=" type="video/mp4" />
      </video>
      <div className="absolute inset-0  bg-red-400 opacity-50 z-1"></div>
      <div className={`relative z-10 text-center text-white transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <h1 className={`text-5xl font-bold ${textColor}`}>Hello, I'm Uvyne Rop</h1>
        <p className={`mt-4 text-gray-300 ${textColor}`}>A Passionate Fullstack Developer</p>
        <button onClick = {handleScrollToAbout} className="mt-6 mr-4 inline-block bg-orange-600 text-white px-6 py-3 rounded">Learn More</button>
        <button onClick={() => navigate('/About') } className="mt-6 ml-2 inline-block bg-orange-600 text-white px-4 py-3 rounded">See more about me ➡</button> </div>
        
        <button onClick={() => navigate('/Menu')} className= "absolute top-4 right-4 bg-purple-400 text-white p-2 rounded justify-start" aria-label="Open menu">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="icons-style">
              <title>Menu</title>
              <circle cx="12" cy="12" r="3" opacity="1"></circle>
              <circle cx="24" cy="12" r="3" opacity="1"></circle>
              <circle cx="36" cy="12" r="3" opacity="1"></circle>
              <circle cx="36" cy="24" r="3" opacity="1"></circle>
              <circle cx="36" cy="36" r="3" opacity="1"></circle>
              <circle cx="24" cy="36" r="3" opacity="1"></circle>
              <circle cx="12" cy="36" r="3" opacity="1"></circle>
              <circle cx="12" cy="24" r="3" opacity="1"></circle>
              <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="0.75"></rect>
              <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="0.75"></rect>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
