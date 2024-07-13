import React from 'react';
 // Import the CSS file

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://st3.depositphotos.com/3950183/19473/v/600/depositphotos_194733624-stock-video-glitter-orange-pink-background-sparkling.mp4" type="video/mp4" />
      </video>
      <div className="relative container mx-auto px-6 z-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative p-6 bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col justify-between overflow-hidden group">
            <p className="mb-4 text-gray-700">I contributed to a loan application project by developing the Admin Panel using React and TailwindCSS as a part of the frontend team at KEDEVS.</p>
            <a className="text-blue-500 hover:text-blue-700" href="https://admin-panel-five-psi.vercel.app/" target="_blank" rel="noopener noreferrer">Admin Panel</a>
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transform group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </div>

          <div className="relative p-6 bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col justify-between overflow-hidden group">
            <p className="mb-4 text-gray-700">This personal project, a medical website named AmWell, was created as a practice project using React.js and TailwindCSS.</p>
            <a className="text-blue-500 hover:text-blue-700" href="https://am-well.vercel.app/" target="_blank" rel="noopener noreferrer">AmWell Medical Website</a>
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transform group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </div>

          <div className="relative p-6 bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col justify-between overflow-hidden group">
            <p className="mb-4 text-gray-700">News Classroom is my first project after learning React.js. I used React.js and TailwindCSS to build this project.</p>
            <a className="text-blue-500 hover:text-blue-700" href="https://news-classroom-weld.vercel.app/" >News Classroom</a>
            <div className="absolute inset-0 bg-pink-200 opacity-0 group-hover:opacity-30 transform group-hover:translate-y-0 transition-transform duration-45 ease-in-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
