import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContentTalent'
import PostingCandidates from '../components/PostingCandidates'
// import Navbar from '../components/Navbar'
// import PostingJob from '../components/PostingJob'

function Talent() {
  return (
    <div className=''>
       {/* <Navbar /> */}
       <hr />
      <PostingCandidates />
      <MainContent />
      <Footer/> 
    </div>
  )
}

export default Talent