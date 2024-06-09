import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
            <p className="mt-2 text-gray-600">A brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
