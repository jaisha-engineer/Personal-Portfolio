import React from 'react';

const Experience = () => {
  return (
    <section className="bg-black py-10" id='experience'>
      <div className="max-w-4xl mx-auto px-6  hover:shadow-lg transform
                transition-transform duration-300 hover:scale-105">
      <h2 className='text-4xl text-bold text-white font-bold text-center mt-14 mb-12'>Experience</h2>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Front-End Developer</h3>
          <p className="text-white font-medium">Tech Vexa</p>
          <p className="text-white text-med">November 2024 - Present</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Focused on front-end development using <strong>React</strong>.</li>
            <li>Worked on real-world projects to enhance skills and gain practical experience.</li>
          </ul>
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-6  mt-14 mb-12">
        <div className="bg-gray-800 shadow-md rounded-lg p-6  hover:shadow-lg transform
                transition-transform duration-300 hover:scale-105">
          <h2 className=' font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Front-End Developer</h2>
          <p className="text-white">Red Code Soft</p>
          <p className="text-white text-med">November 2023 - December 2023</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Worked with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Bootstrap</strong>.</li>
            <li>Designed responsive web pages and enhanced user interface components.</li>
          </ul>
          </ul>
        </div>
      </div>




    </section>
  );
};

export default Experience;
