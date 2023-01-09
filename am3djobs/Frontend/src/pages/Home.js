import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion } from "framer-motion"
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Home() {
  const [companydata, setCompanydata] = useState(false);
  const [userprofile, setUserprofile] = useState(false)
  const { loginWithRedirect,user, isAuthenticated, isLoading } = useAuth0();
  const getSingleProduct = async () => {
    const dataCompany = await axios.get(`https://backend.am3dpjobs.com/CompanyProfileRead/${user?.sub}`);  // http://localhost:3002/CompanyProfileRead/${user?.sub}
    const {data} = await axios.get(`https://backend.am3dpjobs.com/CandidateProfileRead/${user?.sub}`);
    // console.log(dataCompany)
    // console.log(data)
    if(Object.keys(data) === 0 && Object.keys(dataCompany).length === 0 ) {
        setUserprofile(false)
        // setUserData()
    }else if(data?.User_id){
        setUserprofile(true)
        // setUserData(data)
        setCompanydata(false)
        // console.log(data)
    } else if(dataCompany.data?.User_id ){
        setCompanydata(true)
        setUserprofile(false)
        // setUserData(dataCompany.data)
    }
  }
  useEffect(() => {
    getSingleProduct();
  });
  return (
    <motion.div className='h-full' 
    initial={{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x: window.innerWidth, transition: {duration: 0.08}}}
    >
        <div className='bg-no-repeat fixed h-full bg-cover w-full bg-[url("https://am3dpjobs.com/links/meet.jpeg")]'>
            <div className='flex flex-col justify-center items-center h-[80%] '>
            <h1 className='font-bold text-4xl mb-3'>Connecting <a href="/talent" className='text-red-600 cursor-pointer'>Talent</a>  with <a href='/job' className='text-blue-600'>Opportunity ..</a></h1>
            <h1 className='font-semibold text-xl mb-10'>in a few clicks, through AI</h1>
            {/* <div className=''>
                <Link to={'/job'} className='py-3 font-bold px-5 bg-yellow-600 text-black rounded-lg mr-5'>Jobs</Link>
                <Link to={'/talent'} className='py-3 font-bold px-5 bg-red-600 text-white rounded-lg'>Talent</Link>
            </div> */}
            </div>
            <div className='opacity-50 absolute right-0 top-60 text-5xl cursor-pointer'>
              {
                userprofile && (
                  <Link to={'/job'} class="bi bi-chevron-right"></Link>
                )
              }
                {
                companydata && (
                  <Link to={'/talent'} class="bi bi-chevron-right"></Link>
                )
                }
            {/* <Link to={'/job'} class="bi bi-chevron-right"></Link> */}
            </div>
            <h1 className='font-bold text-md text-gray-500 drop-shadow-lg z-20'>Build-04.01.2023</h1>
        </div>
        
        
    </motion.div>
  )
}

export default Home