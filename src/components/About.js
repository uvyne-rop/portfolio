import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">About Me</h2>
        <p className="mt-4 text-gray-600 text-center">
          I am a passionate fullstack software developer with experience in building web applications using modern technologies.
        </p>
      </div>
    </section>
  );
};

export default About;



// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [textColor, setTextColor] = useState('text-gray-800'); // Initial text color

//   useEffect(() => {
//     // Array of possible text colors
//     const colors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600', 'text-red-600'];
//     // Generate a random index to pick a color
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     // Set the text color using state
//     setTextColor(colors[randomIndex]);
//   }, []); // Empty dependency array to run only once on component mount

//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
//       {/* Video Background */}
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
//         <source src="https://mazwai.com/videvo_files/video/free/2016-11/small_watermarked/Smoke_Dark_08_Videvo_preview.webm" type="video/webm"/>
//       </video>
//       {/* Overlay to darken the video */}
//       <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
//       {/* Content */}
//       <div className="relative z-10 text-center text-white">
//         <h1 className={`text-5xl font-bold ${textColor}`}>Hello, I'm Uvyne Rop</h1>
//         <p className={`mt-4 text-gray-300 ${textColor}`}>A Passionate Fullstack Developer</p>
//         <a href="#about" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded">Learn More</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
