import React from 'react'
import logo from '../Images/Logo.png'

function Navbar() {
  return (
    <div className='px-8 z-10'>
         
        <div className="overflow-auto">
            <nav className="mt-2 sgds navbar navbar-expand-lg">
                {/* <a className="navbar-brand fs-2 fw-bold" href="/">
                    AM 3-d Jobs
                </a> */}
                <img className="navbar-brand mt-4" style={{width:"200px", height:"50px"}} src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page" href="/">Jobs</a>
                        </li>
        
                        <li className="nav-item px-2">
                            <a className="nav-link" aria-current="page" href="/">Talent</a>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className='d-flex justify-content-between align-items-center' style={{marginLeft:"auto"}}>
                    <div className='collapse navbar-collapse'  id="navbarNav">
                        <ul className='d-flex justify-content-between align-items-center mt-3'  style={{listStyle:"none"}}>
                            <li className='px-2 '>
                                <button type="button"  class="btn btn-light">Sign In</button>
                            </li>
                            <li  className='px-2'>
                                <button type="button" class="btn btn-outline-dark">Sign Up</button>
                            </li>
                            
                        </ul>     
                    </div>
                </div>
            </nav>
        </div>

                
    </div>
  )
}

export default Navbar