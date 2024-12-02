import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";


const services=[
  
    {
      title: "Front-End Development",
      description:"I specialize in building responsive, fast, and secure websites tailored to your needs. From personal portfolios to complex web applications.",
      icon: <FaCode className="text-4xl text-blue-500" />,
    },
    {
      title: "UI/UX Design",
      description: "I design user-friendly interface to enhance user satisfaction through intuitive interfaces and stunning visuals",
      icon: <FaPaintBrush className="text-4xl text-pink-500" />,
    },
    {
      title: "Digital Marketing",
      description: "We provide expert services in SEO, social media marketing, content creation, to help your brand connect with the right audience.",
      icon: <FaBullhorn className="text-4xl text-green-500" />,
    },
  ];
const Service=() =>{
  return (
    <div className='bg-black text-white py-20 ' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24 mt-9'>
            <h2 className='text-4xl  font-bold text-center mb-12 pt-10'>My Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

              {services.map(service =>(
                <div key={service.id}
                className='bg-gray-800 px-6 pb-8 rounded-lg hover:shadow-lg transform
                transition-transform duration-300 hover:scale-105'>
                  
                  <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                   from-green-600 to-blue-400'>
                    {service.id}
                  </div>
                  <div className="text-center mb-4 flex justify-center">{service.icon}</div>
                  <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                   from-green-400 to-blue-500'>
                    {service.title}
                  </h3>
                  <p className='mt-7 text-gray-300'>{service.description}</p>
                
                  </div>
              ))}

            </div>
            </div>
            </div>
  )
}

export default Service