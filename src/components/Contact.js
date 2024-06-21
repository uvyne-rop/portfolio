import React from 'react';

const Contact = () => {
  return (
    
    <div className="bg-cover bg-center text-black w-full h-screen flex flex-col justify-center items-center"
    style={{backgroundImage: "url('https://media.wired.com/photos/648ce85eeb3f06fa8140d00a/master/w_1280,c_limit/Best-Websites-To-Show-Off-Your-Portfolio-Business-1357904435.jpg')"}}
    >
      <div className="flex flex-col justify-center items-center mb-20 px-20">
        <h1 className="text-4xl font-bold mb-5">Contact</h1>
        <div className="relative w-full h-1 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-black to-transparent animate-glow"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mb-4">
        <h2 className="text-lg font-bold">EMAIL</h2>
        <a className="text-blue-500 mx-5" href="mailto:uvynerop@gmail.com">uvynerop@gmail.com</a>
      </div>
      <div className="flex flex-row justify-center items-center mb-4">
        <h2 className="text-lg font-bold">SOCIAL MEDIA</h2>
        <a className="text-blue-500 mx-5" href="https://www.instagram.com/ufrajuvynes6/">Instagram</a>
        <a className="font-bold text-xl text-blue-500 mx-5" href="https://x.com/UvyneR84520">X</a>
      </div>
      <div className="flex flex-row justify-center items-center">
        <h2 className="text-lg font-bold">PHONE NUMBER</h2>
        <a className="text-blue-500 mx-5" href="/phone">+254790800767</a>
      </div>
    </div>
  );
};

export default Contact;
