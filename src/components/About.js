import React from 'react';
import  {Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className=" bg-cover bg-center flex h-screen w-full"
      style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/07/09/51/97/240_F_709519729_Azo28zQQG2EB0ywrmsgrT6qczk3uKUgf.jpg')"}}>
        
      <div className="container flex flex-col md:flex-row  px-0 mx-0 h-full w-full">
        <div className="md:w-1/2 h-full flex flex-col justify-center px-0">
          <h2 className="text-3xl font-bold text-blue-800 text-center md:text-left">About Me</h2>
          <p className="mt-4 text-gray-900 text-center md:text-left">
            I am a dedicated full-stack software developer going on with studies at Moringa School.
            I have a deep curiosity for learning new technologies and exploring creative coding.
            Currently, I am enrolled in training as a data analyst and pursuing a Bachelor of Science in Information Technology at Multimedia University of Kenya.
            In my leisure time, I enjoy playing games like chess and handball, and I have a strong passion for music.
          </p>
          <div className="text-blue-600 pt-6 ">
          <Link to="/Resume"><strong>view my resume here</strong> ⬇</Link>
          </div>
        </div>
        <div className="md:w-1/2 h-full flex justify-end items-center  relative">
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhIednHNZ1VBWNSlYmH8Vlgs78HNdiHHj0g&s" alt="Uvyne Rop" className="h-96 w-96 object-cover rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="relative w-full h-full rounded-full border-4 border-transparent border-t-pink-500 animate-spin">
                <span className="absolute w-full h-full flex items-center justify-center text-pink-900 font-bold text-xl writing-mode-vertical-lr text-orientation-upright transform rotate-45">
                  Yess💫 ✔
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



