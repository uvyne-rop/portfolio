import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
        <div className="p-4 flex flex-col items-center md:w-1/3 bg-gray-800 text-white">
          <img
            src="your-image-url.jpg"
            alt="Uvyne Rop"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-2xl font-bold">Uvyne Rop</h1>
          <p className="mt-2"><strong>Phone:</strong> +254790800767</p>
          <p className="mt-2"><strong>Email:</strong> uvynerop@gmail.com</p>
          <p className="mt-2"><strong>Address:</strong> 21260, Kiptere, Kericho, Kenya</p>
        </div>
        <div className="p-4 md:w-2/3">
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">SUMMARY</h2>
            <p className="mt-2">
              Motivated junior software engineer with 6 months of progressive experience. 
              Energetic self-starter and team builder. Navigates high-stress situations 
              and achieves goals on time and under budget.
            </p>
          </div>
          <div className="mb-6">
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
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">EXPERIENCE</h2>
            <div className="mt-2">
              <h3 className="text-lg font-bold">Junior Software Engineer</h3>
              <p className="text-sm text-gray-600">02/2024 - 08/2024</p>
              <p className="text-sm text-gray-600">Moringa | Nairobi, Kenya</p>
              <p className="mt-2">
                I am currently working on several personal projects and applications, including:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Amwell website for patients and doctors</li>
                <li>News website to display news</li>
                <li>Meme generator to generate memes</li>
                <li>Event-Hive application with both backend and frontend done as a group</li>
                <li>Loan website admin dashboard to manage loans</li>
              </ul>
              <p className="mt-2">
                These projects showcase my skills in frontend development and my ability 
                to create functional and user-friendly applications.
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2">EDUCATION</h2>
            <div className="mt-2">
              <p className="text-lg font-bold">Moringa School | Nairobi, Kenya</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
              <p className="mt-2">Certificate of Higher Education: Fullstack software engineering</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Digified drive | Lagos, Nigeria</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
              <p className="mt-2">Certificate of Higher Education: Data analytics</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Multimedia University of Kenya | Nairobi, Kenya</p>
              <p className="text-sm text-gray-600">01/2024 - Current</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
