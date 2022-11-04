import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({val}) {

    
    

    console.log(val)

    
  return (
    <div className='product'>
        <div class={`popup-view`}>
          <div class="popup-card">
            <Link to={'/'}><i href="/" class="fas fa-times close-btn" ></i></Link>
            <div class="product-img">
              <img src="2.png" alt=""/>
            </div>
            <div class="info">
              <h2>Director, Sustainability<span>13 hours ago</span><br/><span className='location'> Washington, District of Columbia, United States </span><br /><span> American Iron and Steel Institute</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span class="price">$100.00</span>
              <a href="/" class="add-cart-btn">Add to Cart</a>
              <a href="/" class="add-wish">Add to Wishlist</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card