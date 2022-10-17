import React from 'react'

function Navbar() {
  return (
    <div className='px-8'>
         
        <div style={{height: "100px"}} className="overflow-auto">
            <nav className="mt-2 sgds navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    Breakpoint-sm
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Link</a>
                        </li>
                        <li className="nav-item sgds dropdown">
                            <a className="nav-link sgds dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown<i className="bi bi-chevron-down"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another Action</a></li>
                                <li><a className="dropdown-item" href="/">Something</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a className="dropdown-item" href="/">Seperated Link</a></li>
                            </ul>
                        </li>
                        <li className="nav-item sgds dropdown has-megamenu">
                            <a className="nav-link sgds dropdown-toggle" href="/" id="megamenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Megamenu<i className="bi bi-chevron-down"></i>
                            </a>
                            <div className="dropdown-menu megamenu p-3" aria-labelledby="megamenu">
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <b>Co-create innovative digital solutions with the Government</b>
                                        <p>Discover events, blogs, open-source technologies and other collaboration opportunities</p>
                                    </div>
                                    <div>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                        <a className="dropdown-item" href="/">Features</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

                
    </div>
  )
}

export default Navbar