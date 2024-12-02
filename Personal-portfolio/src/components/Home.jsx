import React from 'react'

const Home= ()=> {
  return (
    <div className='bg-black text-white text-center py-24'>
         <div className='container  mx-auto px-10 md:px-16 lg:px-24 mt-9'>
        <h1 className='text-4xl font-bold mt-20 '>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Jaisha Chudhary</span>
        
        </h1 >
        <h1 className='text-2xl pt-4'>Front-end Developer</h1>
        <p className='mt-10 text-lg text-white text-center'>
        I am a passionate front-end developer with experience in creating dynamic, user-friendly websites and applications. 
        <p>Skilled in HTML, CSS, JavaScript, and modern frameworks like React, I bring designs to life with a focus on performance and responsiveness. </p> 
        </p>


        <div className='mt-12 space-x-4'>
           <a
        href="/Jaishachcv.pdf"
        download="Jaisha ch cv.pdf"
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-trandform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
        Download Resume
      </a>
      <a
        href='https://www.linkedin.com/in/jaisha-ch-8756a325a/'
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-trandform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Hire Me
                    </a>

    </div>
        
      
    </div>
    </div>
  )
}

export default Home