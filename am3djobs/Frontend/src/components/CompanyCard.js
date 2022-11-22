import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Card from './Card';
import './Card.css'

// const API = ""

function CompanyCard() {
  const [product, setProduct] = useState('');
    let {id} = useParams();


    const getSingleProduct = async () => {
      const {data} = await axios.get(`https://backend.am3dpjobs.com/JobRead/${id}`)
      setProduct(data)


    }

    useEffect(() => {
      getSingleProduct();
    },[]);


  return (
    <div>
        
        <div className='product '>
        <div class={`popup-view`}>
          <div class="popup-card ">
            <Link to={'/job'}><i href="/" class="fas fa-times close-btn" ></i></Link>
            <div class="product-img">
              <img src={product.CompanyLogo} alt=""/>
            </div>
            <div class="info overflow-y-auto">
              <div className='mb-4 flex '>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Candidate Name:</h3>
              <span className='text-base'>{product.CandidateName}</span>
              </div>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Location:</h3>
              
              <span className='location text-base mr-2'>{product.Location} </span>
      
              </div>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Mobile Phone:</h3>
              
              <span className='location text-base mr-2'>{product.Number} </span>
              </div>
              </div>
              <div className='mb-3 flex  '>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'> ID Number:</h3>
              <span className='text-base'>{product.IDNumber}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Specialisation:</h3>
              <span className='location text-base'>{product.JobSpecialisation} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Key Skills:</h3>
                <span className='text-base'>{product.Skills}</span>
              </div>
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Current Status:</h3>
              <span className='text-base'>{product.CandidateType}</span>
              </div>
              <div className='w-[14rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Current Role:</h3>
              <span className='location text-base'>{product.TypeOfWork} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Current Level:</h3>
                <span className='text-base'>{product.Background}</span>
              </div>
              
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Preffered City:</h3>
              <span className='text-base'>{product.PrefferedLocation}</span>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Prefferd Company:</h3>
              <span className='location text-base'>{product.Companies} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Prefferd Fuction:</h3>
                <span className='text-base'>{product.JobFunction}</span>
              </div>
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Preffered Role:</h3>
              <p className='text-base'>{product.TypeOfWork}</p>
              </div>
              <div className='w-[10rem] mx-3' >
              <h3 className='text-base font-bold mb-2'>Preffered Mode:</h3>
              <span className='location text-base'>{product.JobMode} </span>
              </div>
              <div className='w-[10rem]'>
                <h3 className='text-base font-bold mb-2'>Prefferd Salary:</h3>
                <span className='text-base'>{product.MonthlySalary} INR/Month</span>
              </div>
              
              
              </div>
              <div className='mb-5 flex'>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Interview Mode:</h3>
              <p className=''>{product.Interview}</p>
              </div>
              <div className='w-[14rem]'>
              <h3 className='text-base font-bold'>Interview Availability:</h3>
              
              <span className='location text-base mr-2'>{product.JoiningTime}</span>
              
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

export default CompanyCard