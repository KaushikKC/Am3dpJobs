import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
// import Card from './Card'

function CandidateCard() {
  const [product, setProduct] = useState('');
    let {id} = useParams();
    

    const getSingleProduct = async () => {
      const {data} = await axios.get(`https://backend.am3dpjobs.com/TallentRead/${id}`)
      setProduct(data)


    }

    useEffect(() => {
      getSingleProduct();
    },[]);
  return (
    <div>
      <div className='product'>
        <div class={`popup-view`}>
          <div class="popup-card ">
            <Link to={'/talent'}><i href="/" class="fas fa-times close-btn" ></i></Link>
            <div class="product-img">
              <img src={product.CompanyLogo} alt=""/>
            </div>
            <div class="info overflow-y-auto">
              <div className='mb-4 flex'>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Company Name:</h3>
              <span className='text-base'>{product.CompanyName}</span>
              </div>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Comapny Industry:</h3>
              
              <span className='location text-base mr-2'>{product.CompanyIndustry} </span>
    
              </div>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Company HQ:</h3>
              
              <span className='location text-base mr-2'>{product.CompanyHQ} </span>
          
              </div>
              </div>
              <div className='mb-3 flex  '>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Company UID:</h3>
              <span className='text-base'>{product.CompanyUID}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Recruiter Name:</h3>
              <span className='location text-base'>{product.RecruiterName} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Mobile Phone:</h3>
                <span className='text-base'>{product.RecruiterNumber}</span>
              </div>
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Job Function:</h3>
              <span className='text-base'>{product.JobFunction}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Job Title:</h3>
              <span className='location text-base'>{product.JobTitle} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Job Mode:</h3>
                <span className='text-base'>{product.JobMode}</span>
              </div>
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Job Skills:</h3>
              <span className='text-[1.1rem]'>{product.Skills}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Monthly Salary:</h3>
              <span className='location text-base'>{product.MonthlySalary} INR /Month</span>
              </div>
              </div>
              <div className='mb-3'>
              <h3 className='text-base font-bold'>Description:</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....</p>
              </div>
              
              
              
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Candidate Status:</h3>
              <span className='text-base'>{product.CandidateType}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Candidate Type:</h3>
              <span className='location text-base'>{product.TypeOfWork} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Candidate Level:</h3>
                <span className='text-base'>{product.Background}</span>
              </div>
              </div>
              <div className='mb-5 flex'>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Interview Timing:</h3>
              <span className='text-base'>{product.JoiningTime}</span>
              </div>
              <div className='w-[14rem]'>
              <h3 className='text-base font-bold'>Interview Mode:</h3>
              
              <span className='location text-base mr-2'>{product.Interview}  </span>
              
              </div>
              </div>
              
            
              <a href="/" class="add-cart-btn mt-4">APPLY</a>
              <div className='flex justify-center'>
                <a href="/" class="add-wish">Add to Wishlist / </a>
                <a href="/" class="add-wish">&nbsp;Call Now</a>
              </div>
              
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CandidateCard