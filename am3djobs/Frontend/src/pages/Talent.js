import { motion } from 'framer-motion'
import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContentTalent'
import PostingCandidates from '../components/PostingCandidates'
// import Navbar from '../components/Navbar'
// import PostingJob from '../components/PostingJob'

function Talent() {
  return (
    <motion.div 
    className=''
    initial={{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x: window.innerWidth, transition: {duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]}}}
    >
       {/* <Navbar /> */}
       <hr />
      <PostingCandidates />
      <MainContent />
      <Footer/> 
    </motion.div>
  )
}

export default Talent