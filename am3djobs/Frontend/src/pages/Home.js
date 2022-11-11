import React from 'react'
import { Link } from 'react-router-dom'
import { animate, motion } from "framer-motion"

function Home() {
  return (
    <motion.div className='h-full' 
    initial={{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x: window.innerWidth, transition: {duration: 0.08}}}
    >
        <div className='bg-no-repeat fixed h-full bg-cover w-full bg-[url("https://www.workitdaily.com/media-library/image.jpg?id=21988626&width=980")]'>
            <div className='flex flex-col justify-center items-center h-[70%] '>
            <h1 className='font-bold text-4xl mb-3'>Connecting Talent with Opportunity..</h1>
            <h1 className='font-semibold text-2xl mb-10'>in a few clicks, through AI</h1>
            <div className=''>
                <Link to={'/job'} className='py-3 font-bold px-5 bg-yellow-600 text-black rounded-lg mr-5'>Jobs</Link>
                <Link to={'/talent'} className='py-3 font-bold px-5 bg-red-600 text-white rounded-lg'>Talent</Link>
            </div>
            </div>
            <div className='opacity-50 absolute right-0 top-60 text-5xl cursor-pointer'>
            <Link to={'/job'} class="bi bi-chevron-right"></Link>
            </div>
            
        </div>
        
    </motion.div>
  )
}

export default Home