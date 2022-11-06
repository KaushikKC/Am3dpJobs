import React from 'react'
import Footer from '../components/Footer'
import MainContentJobs from '../components/MainContentJobs'
// import Navbar from '../components/Navbar'
import PostingJob from '../components/PostingJob'

function Jobs() {
  return (
    <div className=''>
       
      <PostingJob />

      <MainContentJobs />
      <Footer/> 
    </div>
  )
}

export default Jobs