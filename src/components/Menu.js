import React from 'react';

const Menu = ()=> {
     const headerClasses = 'text-4xl font-bold cursor-pointer transition-transform transform duration-300 hover:text-6xl hover:text-orange-800';
    return (
        <>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 bg-black">
        <source src="https://mazwai.com/videvo_files/video/free/2016-11/small_watermarked/Smoke_Dark_08_Videvo_preview.webm" type="video/webm" />
      </video>
        <div className=" absolute inset-0  opacity-50 z-1 h-screen flex flex-col items-center justify-center space-y-8 bg-purple-100">
        
           <hi className={headerClasses}>Welcome</hi>
           <hi className={headerClasses}>Projects</hi>
           <hi className={headerClasses}>About</hi>
           <hi className={headerClasses}>Contact</hi> 
           <a href="https://www.instagram.com/ufrajuvynes6/">instagram</a>
        </div>
        </>
       
        

    );

};
export default Menu;