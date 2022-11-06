import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import './Navbar.css'
import {Link, Outlet} from 'react-router-dom'
import {redirectToAuth} from 'supertokens-auth-react'
import { useEffect } from 'react'
import { signOut } from "supertokens-auth-react/recipe/thirdpartypasswordless";
import { useSessionContext } from 'supertokens-auth-react/recipe/session'; 

// import { SessionAuth } from 'supertokens-auth-react/recipe/session'
 

// Your dashboard component

    

import User from './User'


function Navbar() {
    let session = useSessionContext();
    console.log(session)

    const [theme, setTheme] = useState("light")
    const [profile, setProfile] = useState(false)

    useEffect (() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    })



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

    const EventToggeler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    // let session = useSessionContext();
    // co

   

    // let {doesSessionExist, userId, accessTokenPayload} = session;

    
    // let name = accessTokenPayload.userName;
    // console.log(name);
    // console.log(userId)
    // console.log(accessTokenPayload)
    
    async function SignOut() {
        await signOut();
      }

    const popUp = () => {
        setProfile(true)
    }

    const popDown = () => {
        setProfile(false)
    }
    const SignUp = async () => {
        redirectToAuth();
    }
  return (
    <div>
        <div className={`absolute bg-slate-200/60 h-full w-full z-[5] ${profile ? '' : 'hiddend'}`}>
        <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
            <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className='relative top-20'>
                <Link to={'/CreateProfile'} className='ml-20 p-3 bg-yellow-500 rounded-lg font-bold'>Create Your Profile</Link>
            </div>

        </div>
    </div>
    <div className=' bg-gray-200/30 dark:bg-gray-800/5 sticky shadow-lg dark:text-white'>
         
        <div className="overflow-auto">
            <nav className=" flex px-10 sm:px-16 ">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <img className="navbar-brand mt-4 w-[150px] h-[45px] sm:w-[200px] sm:h-[50px]" src={logo} alt="" />
                
                <div className='space-x-8 p-5 ml-4 font-bold cursor-pointer hidden md:inline'>
                    <a href="/">Job</a>
                    <a href="/Talent">Tallent</a>
                </div>
                <div className='flex items-center'>
                <i onClick={EventToggeler} class="cursor-pointer bi bi-moon-fill"></i>
                </div>
                <div className='flex justify-end  absolute right-10 sm:mr-10 '>
                    <div className=''  id="navbarNav">
                        <ul className='flex justify-end ml-auto mt-3 '  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                <button onClick={SignOut} class={`${session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                                <button type="button" onClick={SignUp} class={`${!session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
                            </li>
                            
                        </ul>     
                    </div>
                </div>
                <i class="bi cursor-pointer bi-person-circle flex justify-end items-center top-7 text-xl  absolute right-0 sm:mr-10" onClick={popUp}></i>
                {/* <SessionAuth>
                    <User />
                </SessionAuth> */}
            </nav>
        </div>
       
    <hr />       
    </div>
  
    <Outlet />
    </div>
  )
}

export default Navbar