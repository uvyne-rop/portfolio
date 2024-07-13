import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
        <div className="p-4 flex flex-col items-center md:w-1/3 bg-gray-800 text-white">
          <img
            src="file:///C:/Users/AMOS%20ROP/Downloads/WhatsApp%20Image%202024-04-02%20at%2014.21.33%20(1).jpeg"
            alt="Uvyne Rop"
            className="rounded-full w-32 h-32 mb-4"
          />
          
          <div className="mb-6 pt-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">SKILLS</h2>
            <ul className="list-disc list-inside mt-2">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Cascading Style Sheets</li>
              <li>HTML</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>Python Flask</li>
              <li>Code Debugging</li>
              <li>Excel for Data Analytics</li>
              <li>Python for Data Analytics</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">EDUCATION</h2>
            <div className="mt-2">
              <p className="text-lg font-bold">Moringa School | Nairobi, Kenya</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
              <p className="mt-2">Certificate of Higher Education: Fullstack software engineering</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Digitaley drive | Lagos, Nigeria</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
              <p className="mt-2">Certificate of Higher Education: Data analytics</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Multimedia University of Kenya | Nairobi, Kenya</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
            </div>
          </div>
          <div className="mb-6 pt-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">LANGUAGES</h2>
            <ul className="list-disc list-inside mt-2">
               <li><strong>Kiswahili:</strong>First language</li>
               <li>English</li>
            </ul>
            </div>
          <div className="mb-6 pt-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">HOBBIES AND INTERESTS</h2>
            <ul className="list-disc list-inside mt-2">
               <li>Playing chess</li>
               <li>playing handball</li>
               <li>scientific researches</li>
            </ul>
            </div>
        </div>
        <div className="p-4 md:w-2/3 bg-gray-900 text-white">
          <div className="mb-6 text-center"><div>
          <h1 className="text-2xl font-bold text-center">Uvyne Rop</h1>
          <p className="mt-2"><strong>Phone:</strong> +254790800767</p>
          <p className="mt-2"><strong>Email:</strong> uvynerop@gmail.com</p>
          <p className="mt-2"><strong>Address:</strong> 21260, Kiptere, Kericho, Kenya</p>
          </div>
            <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 pt-5">SUMMARY</h2>
            <p className="mt-2">
              Motivated junior software engineer with 6 months of progressive experience. 
              Energetic self-starter and team builder. Navigates high-stress situations 
              and achieves goals on time and under budget.
            </p>
            
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">EXPERIENCE</h2>
            <div className="mt-2">
              <h3 className="text-lg font-bold">Junior Software Engineer</h3>
              <p className="text-sm text-gray-600">02/2024 - 08/2024</p>
              <p className="text-sm text-gray-600">Moringa | Nairobi, Kenya</p>
              <p className="mt-2">
                I am currently working on several personal projects and applications, including:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li><strong>Amwell Website:</strong> https://am-well.vercel.app/ A platform for doctors to manage patient information online. Built using React.js and Tailwind CSS.</li>
                <li><strong>News Website:</strong> https://news-classroom-weld.vercel.app/ A site that displays and filters news into various categories. Developed with React.js and Tailwind CSS.</li>
                <li><strong>Meme Generator:</strong> https://make-memes.vercel.app/A tool for generating memes using JavaScript, HTML, and CSS.
                </li>
                <li><strong>Event-Hive Application:</strong> An application for creating, managing, and scheduling events. Contributed to both backend and frontend development.</li>
                <li><strong>Movie Watchlist CLI Project:</strong> A command-line interface for managing movies, including creating, deleting, and reviewing movies. Developed using Python.
                </li>
                <li><strong>Loan Website Admin Dashboard:</strong> https://admin-panel-five-psi.vercel.app/An admin dashboard for a loan website to manage loans, contributing to the development of features for loan management and administration.</li>
              </ul>
              <p className="mt-2">
                These projects showcase my skills in frontend development and my ability 
                to create functional and user-friendly applications.
              </p>
            </div>
            <div className="mb-6 pt-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">CAREER GOALS</h2>
            <ul className="list-disc list-inside mt-2">
               <li>Being a competitive software developer and deliver best projects</li>
               <li>enlarging my tech field into DevOps, artificial intelligence , Data science , cyber security and quantum computing.
               </li>
               <li>enlarging my skills in data analytics</li>
            </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
