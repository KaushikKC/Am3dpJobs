import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from './Card'

function CandidateCard() {
  const [product, setProduct] = useState('');
    let {id} = useParams();


    const getSingleProduct = async () => {
      const {data} = await axios.get(`http://localhost:3002/TallentRead/${id}`)
      setProduct(data)


    }

    useEffect(() => {
      getSingleProduct();
    },[]);
  return (
    <div>
      <div className='product'>
        <div class={`popup-view`}>
          <div class="popup-card">
            <Link to={'/'}><i href="/" class="fas fa-times close-btn" ></i></Link>
            <div class="product-img">
              <img src={product.CompanyLogo} alt=""/>
            </div>
            <div class="info">
              <div className='mb-4 flex justify-evenly'>
              <div className='w-[15rem]'>
              <h3 className='text-base font-bold'>Candidate Name:</h3>
              <p className='text-[1.1rem]'>{product.CandidateName}</p>
              </div>
              <div className='w-[15rem]'>
              <p className='text-base font-bold'>Location:</p>
              
              <span className='location text-base mr-2'>{product.Location} </span>
              <span>({product.JobMode})</span>
              </div>
              </div>
              <div className='mb-3 flex  '>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Specialisation:</h3>
              <p className='text-[1.1rem]'>{product.JobSpecialisation}</p>
              </div>
              <div className='w-[14rem] mx-3' >
              <p className='text-base font-bold mb-2'>Preferred Company:</p>
              <span className='location text-base'>{product.Company} </span>
              </div>
              <div className='w-[10rem]'>
                <p className='text-base font-bold mb-2'>Job Function:</p>
                <span className='text-base'>{product.JobFunction}</span>
              </div>
              </div>
              <div className='flex mb-3'>
              <div className='w-[10rem] '>
              <h3 className='text-base font-bold mb-2'>Role Type:</h3>
              <p className='text-[1.1rem]'>{product.RoleType}</p>
              </div>
              <div className='w-[14rem] mx-3' >
              <p className='text-base font-bold mb-2'>Type of work:</p>
              <span className='location text-base'>{product.TypeOfWork} </span>
              </div>
              <div className='w-[10rem]'>
                <p className='text-base font-bold mb-2'>Expericence:</p>
                <span className='text-base'>{product.Background}</span>
              </div>
              </div>
              <div className='mb-5 flex'>
              <div className='w-[10rem]'>
              <h3 className='text-base font-bold'>Joinig Time:</h3>
              <p className='text-[1.1rem]'>{product.JoiningTime}</p>
              </div>
              <div className='w-[14rem]'>
              <p className='text-base font-bold'>Salary:</p>
              
              <span className='location text-base mr-2'>{product.MonthlySalary} INR /Month </span>
              
              </div>
              </div>
              <h3 className='text-base font-bold'>Description:</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....</p>
            
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