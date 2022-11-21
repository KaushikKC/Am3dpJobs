import React from 'react'
import Footer from '../components/Footer'
import MainContentJobs from '../components/MainContentJobs'
// import Navbar from '../components/Navbar'
import PostingJob from '../components/PostingJob'
import { motion } from "framer-motion"

function Jobs() {
  return (
    <motion.div 
    className=''
    initial={{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
    >
       
      <PostingJob />

      <MainContentJobs />
      <Footer/> 
    </motion.div>
  )
}

export default Jobs