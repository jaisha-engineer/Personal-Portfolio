import React from 'react';
import weather from '../assets/weather.png';
import Tictactoe from '../assets/Tic tac toe.jpg';
import password from'../assets/password.jpg';
import Calculatorimage from '../assets/Calculatorimage.webp'
import Todolist from '../assets/Todolist.png'

const projects=[
     {
          id:1,
          name:"Calculator",
          Language:"HTML,CSS AND JS",
          image: Calculatorimage,
          github:"https://github.com/jaisha-engineer",
     },
     {
          id:2,
          name:"Tic Tac Toe",
          Language:"HTML,CSS AND JS",
          image: Tictactoe,
          github:"https://github.com/jaisha-engineer",
     },

     {
          id:3,
          name:"Weather App",
          Language:"HTML,CSS AND JS",
          image: weather,
          github:"https://github.com/jaisha-engineer",
     },
     {
          id:4,
          name: "Password-Generator",
         Framework: "HTML,CSS and JS",
         image: password,
         github:"https://github.com/jaisha-engineer",

     },

     {
          id:4,
          name: "To-do-list",
         Framework: "React JS",
         image: Todolist,
         github:"https://github.com/jaisha-engineer",

     },
]


const Projects=()=>{
     return (
<div className='bg-black text-white py-20 ' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24 mt-7'>
            <h2 className='text-4xl  font-bold text-center mt-14 mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {
               projects.map ((project)=>(
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg 
               transform transition-transform duration-300 hover:scale-105'>
                         <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object cover'/>
                         <h3 className='text-2xl font-bold mb-2 text-center'>{project.name}</h3>
                         <p className='text-gray-400 mb-4 text-center'>{project.Language}</p>
                         <p className='text-gray-400 mb-4 text-center'>{project.Framework}</p>
                         <a href={project.github} className='ml-20 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' 
                          target='_blank' rel='noopener noreferrer'>Github</a>
                         </div>
                        

               )
               )
             }
            </div>
            </div>
            </div>
  )
}

export default Projects