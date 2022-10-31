import React from 'react'
import logo from '../Images/Logo.png'
import './Navbar.css'
import {Outlet} from 'react-router-dom'
import {redirectToAuth} from 'supertokens-auth-react'
import { useEffect } from 'react'
import { SessionAuth } from 'supertokens-auth-react/recipe/session'
import User from './User'

function Navbar() {



    useEffect (() => {
        document.querySelectorAll('.nav-link').forEach(
            a => {
                console.log(window.location.href)
                if(a.href === window.location.href) {
                    a.classList.add('active')
                }
            }
        )
    });
    

    const SignUp = async () => {
        redirectToAuth();
    }
  return (
    <div>
    <div className=' bg-gray-200/30 sticky shadow-lg'>
         
        <div className="overflow-auto">
            <nav className=" flex px-16 ">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <img className="navbar-brand mt-4" style={{width:"200px", height:"50px"}} src={logo} alt="" />
                
                <div className='space-x-8 p-5 ml-4 font-bold cursor-pointer hidden md:inline'>
                    <a href="/">Job</a>
                    <a href="/Talent">Tallent</a>
                </div>
                <div className='flex justify-end absolute right-0 mr-10 '>
                    <div className=''  id="navbarNav">
                        <ul className='flex justify-end ml-auto mt-3 '  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                <button type="button" onClick={SignUp} class="btn font-bold btn-outline-dark">Sign Up</button>
                            </li>
                            
                        </ul>     
                    </div>
                </div>
                {/* <SessionAuth>
                    <User />
                </SessionAuth> */}
            </nav>
        </div>

                
    </div>
    <Outlet />
    </div>
  )
}

export default Navbar