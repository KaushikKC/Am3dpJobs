import React from 'react'
import { Link } from 'react-router-dom'
import company from '../Images/company.jpg'
import candidate from '../Images/Candidate.png'

function CreateProfile() {
  return (
    <div className='fixed flex  w-full h-full bg-slate-300/20 '>
      <div className='ml-[26%] flex h-full flex-col justify-center pb-20'>
        <img className='h-48 w-48 mb-5 ml-3' src={company} alt="" />
        <h1 className='mb-3 ml-10 font-bold text-xl'>For Comapany</h1>
        <Link to={'/CreateProfile/CompanyProfile'} className='p-3 rounded-lg bg-black text-white font-bold' >Create Company Profile</Link>
      </div>
      <div className='flex h-full flex-col justify-center ml-[20%] pb-20'>
        <img className='h-48 w-48 mb-5 ml-3' src={candidate} alt="" />
        <h1 className='mb-3 ml-10 font-bold text-xl'>For Candidates</h1>
        <Link to={'/CreateProfile/CandidateProfile'} className='p-3 rounded-lg bg-black text-white font-bold'>Create Candidate Profile</Link>
      </div>
    </div>
  )
}

export default CreateProfile