import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
// import Navbar from '../components/Navbar'
import PostingJob from '../components/PostingJob'

function Jobs() {
  return (
    <div className=''>
       <hr />
      <PostingJob />
      <MainContent />
      <Footer/> 
    </div>
  )
}

export default Jobs