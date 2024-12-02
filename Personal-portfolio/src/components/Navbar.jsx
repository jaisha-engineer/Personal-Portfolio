import React from 'react'


const Navbar=() =>{
  return (
    
        <nav className='bg-black text-white px-10 md:px-16 lg:px-24 fixed top-0 left-0 w-full'>
            <div className='container py-5 flex justify-center md:justify-between items-center'>
                <div className='text-3xl font-bold hidden md:inline mt-7'>My Portfolio</div>
                <div className=' ml-20 space-x-8 text-lg pt-7'>
                   <a href='#' className='hover:text-gray-400'>Home</a>
                   < a href='#service'className='hover:text-gray-400'>Services</a>
                   < a href='#experience'className='hover:text-gray-400'>Experience</a>
                   <a href='#project' className='hover:text-gray-400'>Projects</a>
                   <a href='#contact' className='hover:text-gray-400'>Contact</a>
                </div>
                </div>
             
        </nav>
    
  )
}
export default Navbar