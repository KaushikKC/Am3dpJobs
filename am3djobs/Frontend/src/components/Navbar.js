import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import './Navbar.css'
import {Link, Outlet} from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// Your dashboard component
import axios from 'axios'
import UserProfile from './UserProfile'


function Navbar() {
    // let session = useSessionContext();
    // console.log(session)
    const [companydata, setCompanydata] = useState(false);
    const [userdata, setUserData] = useState();
    const [userprofile, setUserprofile] = useState(false)
    const [theme, setTheme] = useState("light")
    const [profile, setProfile] = useState(false)
    const [favouritebar, setFavouritebar] = useState();
    const { loginWithRedirect,user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();
    // console.log(user)
    // console.log(isAuthenticated)

    useEffect (() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    })

    const getSingleProduct = async () => {
        const dataCompany = await axios.get(`https://backend.am3dpjobs.com/CompanyProfileRead/${user?.sub}`);  // http://localhost:3002/CompanyProfileRead/${user?.sub}
        const {data} = await axios.get(`https://backend.am3dpjobs.com/CandidateProfileRead/${user?.sub}`);
        // console.log(dataCompany)
        // console.log(data)
        if(Object.keys(data) === 0 && Object.keys(dataCompany).length === 0 ) {
            setUserprofile(false)
            setUserData()
        }else if(data?.User_id){
            setUserprofile(true)
            setUserData(data)
            setCompanydata(false)
            // console.log(data)
        } else if(dataCompany.data?.User_id ){
            setCompanydata(true)
            setUserprofile(false)
            setUserData(dataCompany.data)
        }
      }
      useEffect(() => {
        getSingleProduct();
      });
    

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
    
    const favourite = () => {
        setFavouritebar(true)
    }
    const popUp = () => {
        setProfile(true)
    }

    const popDown = () => {
        setProfile(false)
    }

    if (companydata){
        return (
            <div>
                <div className={`absolute bg-slate-200/60 h-full w-full z-[5] ${profile ? '' : 'hiddend'}`}>
         <div className={`relative flex flex-col justify-center items-center top-20 right-0 ${isAuthenticated ? "hiddend" : ''}`}>
                <h1 className='font-bold text-xl text-red-600'>Need to Sign Up to create a Profile</h1>
                <button type="button" onClick={() => loginWithRedirect()} class={`mt-4 btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
            </div>
         { !companydata ? <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
            <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className={`relative top-[66px] right-0 ${!isAuthenticated && 'hiddend'}`}>
            <div className='flex flex-col justify-center items-center mb-3'>
                
                <p className='font-bold mb-2'>Profile Pic</p>
                <img className='rounded-full' src={user?.picture} alt="" />
                <span className='font-semibold'>Mail:</span>
                <p className='flex'>{user?.email} <img alt='' className='w-6' src="https://img.icons8.com/ios-glyphs/60/null/verified-account--v2.png"/></p>
                <p>{user?.user_id}</p>
                
            </div>
            
            <h1 className='mb-4 ml-[5.6rem]  font-bold text-xl'>For Comapany</h1>
            <Link to={'/CreateProfile/CompanyProfile'} className='p-3 ml-[3.3rem] mb-6 rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown} >Create Company Profile</Link>
            <div className='flex justify-center items-center mt-10'>
                <div class="gnah mb-2 "></div>
                <p className='mx-2'>OR</p>
                <div class="gnah mb-2"></div>
            </div>
         <h1 className='mb-4 ml-[5.6rem] mt-4 font-bold text-xl'>For Candidates</h1>
            <Link to={'/CreateProfile/CandidateProfile'} className='p-3 ml-[3.3rem] rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown}>Create Candidate Profile</Link>
            </div>
            
            
            
        </div>
     : <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
    <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className={`relative top-[66px] right-0 ${!isAuthenticated && 'hiddend'}`}>
            <div className='flex flex-col justify-center items-center mb-3'>

                <p className='font-bold '>Company Logo</p>
                <img className='rounded-full my-3 w-[80px]' src={userdata?.CandidateImg || userdata?.RecruiterPicture ? userdata?.CandidateImg || userdata?.RecruiterPicture : user.picture} alt="" />
                <p>Recruiter</p>
                <p className='font-semibold'>Company Name: {userdata?.CompanyName}</p>
                <p className='font-semibold'>Location: {userdata?.Location}</p>
                <p className='font-semibold'>Recuriter Name: {userdata?.RecruiterName}</p>
                <p className='font-semibold'>Company Industry: {userdata?.CompanyIndustry}</p>
                
            </div>
            <div className='mx-3 mt-4'>
                <Link to={`/companyprofile/${userdata?._id}`} className='px-3 mr-4 py-2 bg-blue-400 rounded-3xl text-white'>View Profile</Link>
                <Link to={`/companyprofile/${userdata?._id}`} className='px-3 py-2 bg-red-400 rounded-3xl text-white '>Edit Profile</Link>
            </div>
            </div>
        </div>
        
    } 
    
    </div>
    {
        favouritebar && (
            <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
                <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={() => setFavouritebar(false)}/>
                <h1 className='flex justify-center items-center h-full font-bold text-xl'>No favourite</h1>
            </div>
        )
    }
    <div className=' bg-gray-200/30 dark:bg-gray-800/5 sticky shadow-lg dark:text-white'>
         
        <div className="overflow-auto">
            <nav className=" flex px-10 sm:px-16 ">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <a href="/">
                <img  className="navbar-brand mt-4 w-[150px] h-[45px] sm:w-[200px] sm:h-[50px] cursor-pointer" src={logo} alt="" />
                </a>
                
                
                <div className='space-x-8 p-5 ml-4 font-bold cursor-pointer hidden md:inline'>
   
                         {/* <Link to={'/job'} className={`text-blue-600 ${Object.keys(companydata).length === 0 && 'hiddend'}`}>Job</Link> */}
                         <Link to={'/Talent'} className={`text-red-600 `}>Talent</Link>
 
                </div>
                {/* <div className='flex items-center'>
                <i onClick={EventToggeler} class="cursor-pointer bi bi-moon-fill"></i>
                </div> */}
                <div className='flex justify-end  absolute right-10 sm:mr-10 '>
                    
                    
                    <div className=''  id="navbarNav">
                        <ul className='flex justify-end ml-auto mt-3 mr-3 '  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                {/* <button onClick={SignOut} class={`${session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                                
                                <button type="button" onClick={SignUp} class={`${!session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button> */}
                                <button type="button" onClick={() => loginWithRedirect()} class={`btn ${isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
                                <button onClick={() => logout({ returnTo: window.location.origin })} class={`btn ${!isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                            </li>
                            
                        </ul>     
                    </div>
                    <div class="gnav mt-4 ml-6"></div>
                </div>
                <div>

                </div>
                <div className='flex justify-end space-x-3 items-center top-7 text-xl  absolute right-0 sm:mr-5'>
                <i class="bi cursor-pointer bi-person-circle " onClick={popUp}></i>
                <i class="bi cursor-pointer bi-heart-fill" onClick={favourite}></i>
                </div>
            </nav>
        </div>
       
    <hr />
    </div>
    <Outlet />
            </div>
        )
    }

    if(userprofile) {
  return (
    
    
    <div>
         <div className={`absolute bg-slate-200/60 h-full w-full z-[5] ${profile ? '' : 'hiddend'}`}>
         <div className={`relative flex flex-col justify-center items-center top-20 right-0 ${isAuthenticated ? "hiddend" : ''}`}>
                <h1 className='font-bold text-xl text-red-600'>Need to Sign Up to create a Profile</h1>
                <button type="button" onClick={() => loginWithRedirect()} class={`mt-4 btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
            </div>
         { !userprofile ? <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
            <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className={`relative top-[66px] right-0 ${!isAuthenticated && 'hiddend'}`}>
            <div className='flex flex-col justify-center items-center mb-3'>

                <p className='font-bold mb-2'>Profile Pic</p>
                <img className='rounded-full' src={user?.picture} alt="" />
                <span className='font-semibold'>Mail:</span>
                <p className='flex'>{user?.email} <img alt='' className='w-6' src="https://img.icons8.com/ios-glyphs/60/null/verified-account--v2.png"/></p>
                <p>{user?.user_id}</p>
                
            </div>
            
            <h1 className='mb-4 ml-[5.6rem]  font-bold text-xl'>For Comapany</h1>
            <Link to={'/CreateProfile/CompanyProfile'} className='p-3 ml-[3.3rem] mb-6 rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown} >Create Company Profile</Link>
            <div className='flex justify-center items-center mt-10'>
                <div class="gnah mb-2 "></div>
                <p className='mx-2'>OR</p>
                <div class="gnah mb-2"></div>
            </div>
         <h1 className='mb-4 ml-[5.6rem] mt-4 font-bold text-xl'>For Candidates</h1>
            <Link to={'/CreateProfile/CandidateProfile'} className='p-3 ml-[3.3rem] rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown}>Create Candidate Profile</Link>
            </div>
            
            
            
        </div>
     : <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
    <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className={`relative top-[66px] right-0 ${!isAuthenticated && 'hiddend'}`}>
            <div className='flex flex-col justify-center items-center mb-3'>
                
                <p className='font-bold '>Profile Pic</p>
                <img className='rounded-full my-3 w-[80px]' src={userdata?.CandidateImg || userdata?.CompanyLogo ? userdata?.CandidateImg || userdata?.CompanyLogo : user.picture} alt="" />
                <p>Candidate</p>
                <p className='font-semibold'>Name: {userdata?.CandidateName}</p>
                <p className='font-semibold'>Location: {userdata?.CandidateLocation}</p>
                <p className='font-semibold'>Number: {userdata?.CandidateNumber}</p>
                <p className='font-semibold'>Signal: {userdata?.Signal}</p>
                
            </div>
            <div className='mx-3 mt-4'>
                <Link to={`/userprofile/${userdata?._id}`} className='px-3 mr-4 py-2 bg-blue-400 rounded-3xl text-white'>View Profile</Link>
                <Link to={`/userprofile/${userdata?._id}`} className='px-3 py-2 bg-red-400 rounded-3xl text-white '>Edit Profile</Link>
            </div>
            </div>
        </div>
        
    } </div>

{
        favouritebar && (
            <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
                <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={() => setFavouritebar(false)}/>
                <h1 className='flex justify-center items-center h-full font-bold text-xl'>No favourite</h1>
            </div>
        )
    }
    <div className=' bg-gray-200/30 dark:bg-gray-800/5 sticky shadow-lg dark:text-white'>
         
        <div className="overflow-auto">
            <nav className=" flex px-10 sm:px-16 ">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <Link to={"/"}>
                <img  className="navbar-brand mt-4 w-[150px] h-[45px] sm:w-[200px] sm:h-[50px] cursor-pointer" src={logo} alt="" />
                </Link>
                
                
                <div className='space-x-8 p-5 ml-4 font-bold cursor-pointer hidden md:inline'>
                <Link to={'/job'} className={`text-blue-600 `}>Job</Link>
                         {/* <Link to={'/Talent'} className={`text-red-600 ${(userdata) === 'undefined' && 'hiddend'}`}>Talent</Link> */}
                </div>
                {/* <div className='flex items-center'>
                <i onClick={EventToggeler} class="cursor-pointer bi bi-moon-fill"></i>
                </div> */}
                <div className='flex justify-end  absolute right-10 sm:mr-10 '>
                    
                    
                    <div className=''  id="navbarNav">
                        <ul className='flex justify-end ml-auto mt-3 mr-3 '  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                {/* <button onClick={SignOut} class={`${session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                                
                                <button type="button" onClick={SignUp} class={`${!session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button> */}
                                <button type="button" onClick={() => loginWithRedirect()} class={`btn ${isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
                                <button onClick={() => logout({ returnTo: window.location.origin })} class={`btn ${!isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                            </li>
                            
                        </ul>     
                    </div>
                    <div class="gnav mt-4 ml-6"></div>
                </div>
                <div className='flex justify-end items-center top-7 space-x-3 text-xl  absolute right-0 sm:mr-10'>
                <i class="bi cursor-pointer bi-person-circle " onClick={popUp}></i>
                <i class="bi bi-heart-fill"></i>
                </div>
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

    return (
        <div>
         <div className={`absolute bg-slate-200/60 h-full w-full z-[5] ${profile ? '' : 'hiddend'}`}>
         <div className={`relative flex flex-col justify-center items-center top-20 right-0 ${isAuthenticated ? "hiddend" : ''}`}>
                <h1 className='font-bold text-xl text-red-600'>Need to Sign Up to create a Profile</h1>
                <button type="button" onClick={() => loginWithRedirect()} class={`mt-4 btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
            </div>
         <div className='fixed h-[100%] w-[300px] bg-white top-0 right-0 z-10'>
            <i class="fas fa-times close-btn dark:text-white absolute right-0 mr-4 mt-3 cursor-pointer" onClick={popDown}/>
            <div className=' '>
                <i class="relative top-8 bi bi-person-square text-4xl p-20 mt-2 m-14"></i>
                <hr className='relative top-12 h-8 bg-black'/>
            </div>
            <div className={`relative top-[66px] right-0 ${!isAuthenticated && 'hiddend'}`}>
            <div className='flex flex-col justify-center items-center mb-3'>

                <p className='font-bold mb-2'>Profile Pic</p>
                <img className='rounded-full' src={user?.picture} alt="" />
                <span className='font-semibold'>Mail:</span>
                <p className='flex'>{user?.email} <img alt='' className='w-6' src="https://img.icons8.com/ios-glyphs/60/null/verified-account--v2.png"/></p>
                <p>{user?.user_id}</p>
                
            </div>
            
            <h1 className='mb-4 ml-[5.6rem]  font-bold text-xl'>For Comapany</h1>
            <Link to={'/CreateProfile/CompanyProfile'} className='p-3 ml-[3.3rem] mb-6 rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown} >Create Company Profile</Link>
            <div className='flex justify-center items-center mt-10'>
                <div class="gnah mb-2 "></div>
                <p className='mx-2'>OR</p>
                <div class="gnah mb-2"></div>
            </div>
         <h1 className='mb-4 ml-[5.6rem] mt-4 font-bold text-xl'>For Candidates</h1>
            <Link to={'/CreateProfile/CandidateProfile'} className='p-3 ml-[3.3rem] rounded-lg bg-yellow-500 text-black font-bold'onClick={popDown}>Create Candidate Profile</Link>
            </div>
            
            
            
        </div>
      </div>
    <div className=' bg-gray-200/30 h-[85px] dark:bg-gray-800/5 sticky shadow-lg dark:text-white'>
         
        <div className="overflow-auto">
            <nav className=" flex px-10 sm:px-16 h-[84px] ">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <Link to={"/"}>
                <img  className="navbar-brand mt-4  w-[150px] h-[45px] sm:w-[200px] sm:h-[50px] cursor-pointer" src={logo} alt="" />
                </Link>
                
                
                {/* <div className='space-x-8 p-5 ml-4 font-bold cursor-pointer hidden md:inline'>
                <Link to={'/job'} className={`text-blue-600 ${'hiddend'}`}>Job</Link>
                         <Link to={'/Talent'} className={`text-red-600 ${ 'hiddend'}`}>Talent</Link>
                </div> */}
                {/* <div className='flex items-center'>
                <i onClick={EventToggeler} class="cursor-pointer bi bi-moon-fill"></i>
                </div> */}
                <div className='flex justify-end  absolute right-10 sm:mr-10 '>
                    
                    
                    <div className=''  id="navbarNav">
                        <ul className='flex justify-end ml-auto mt-3 mr-3 '  style={{listStyle:"none"}}>
                            
                            <li  className='px-2'>
                                {/* <button onClick={SignOut} class={`${session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                                
                                <button type="button" onClick={SignUp} class={`${!session.doesSessionExist ? '' : 'hiddend '}btn text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button> */}
                                <button type="button" onClick={() => loginWithRedirect()} class={`btn ${isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Up</button>
                                <button onClick={() => logout({ returnTo: window.location.origin })} class={`btn ${!isAuthenticated && 'hiddend'} text-sm sm:text-base font-bold hover:bg-black hover:text-white dark:text-white border dark:hover:bg-white dark:hover:text-black`}>Sign Out</button>
                            </li>
                            
                        </ul>     
                    </div>
                    <div class="gnav mt-4 ml-6"></div>
                </div>
                <div className='flex justify-end items-center space-x-3 top-7 text-xl  absolute right-0 sm:mr-10'>
                <i class="bi cursor-pointer bi-person-circle " onClick={popUp}></i>
                <i class="bi bi-heart-fill"></i>
                </div>
                
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