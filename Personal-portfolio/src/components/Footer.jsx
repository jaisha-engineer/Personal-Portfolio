import React from 'react'
import { FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer=() => {
  return (
<footer className='bg-black text-white py-8 '>
       <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center'>
         
    </div>
    <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
      <p className='text-gray-400'>&copy;{new Date().getFullYear()}Jaisha. All rights reserved</p>
      <div className='flex space-x-4 my-4 md:my-0'> 
        <a href='https://www.linkedin.com/in/jaisha-ch-8756a325a/' className='text-gray-400 hover:text-white'>
          <FaLinkedin/>
        </a>
        <a href='https://github.com/jaisha-engineer' className='text-gray-400 hover:text-white'>
          <FaGithub/>
        </a>
      </div>


      <div>
        <a href=''>
          Privacy Policy
        </a>
        <a href=''  className='ml-8'>  
          Terms of Services
        </a>
      </div>
    </div>
    </div>
</footer>
  )
}
  

export default Footer