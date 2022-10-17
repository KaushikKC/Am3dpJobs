import React from 'react'

function MainContent() {
  return (
    <div>
        <div className="row m-8">

    <div className="col-lg-3 d-none d-lg-block">
      <nav className="sidenav sgds list-unstyled open2">
        <li className="sidenav-item">
          <button
            className="sgds btn collapsed active"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleD"
            aria-expanded="false"
            aria-controls="collapseExampleD"
          >
            Sub menu
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            className="collapse show"
            id="collapseExampleD"
            data-bs-parent=".open2"
          >
            <ul className="list-unstyled">
              <li><a href="/" className="nav-link">Sub menu item</a></li>
              <li><a href="/" className="nav-link active">Sub menu item</a></li>
              <li><a href="/" className="nav-link">Sub menu item</a></li>
            </ul>
          </div>
        </li>
        <li className="sidenav-item">
          <button
            className="sgds btn collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleE"
            aria-expanded="false"
            aria-controls="collapseExampleE"
          >
            Sub menu
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="collapse" id="collapseExampleE" data-bs-parent=".open2">
            <ul className="list-unstyled">
              <li><a href="/" className="nav-link">Sub menu item</a></li>
              <li><a href="/" className="nav-link">Sub menu item</a></li>
              <li><a href="/" className="nav-link">Sub menu item</a></li>
            </ul>
          </div>
        </li>
        <li className="sidenav-item">
          <button
            className="sgds btn collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleF"
            aria-expanded="false"
            aria-controls="collapseExampleF"
          >
            Sub menu
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="collapse" id="collapseExampleF" data-bs-parent=".open2">
            <ul className="list-unstyled">
              <li><a href="/" className="nav-link">Sub menu item</a></li>
              <li><a href="/" className="nav-link">Sub menu item</a></li>
              <li><a href="/" className="nav-link">Sub menu item</a></li>
            </ul>
          </div>
        </li>
      </nav>
    </div>
    <div class="col-lg-9">
      <nav class="sgds" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group">
                    <input type="text" class="form-control" id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon"></i>
                </div>
              </div>
            </li>
          <li class="">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2">
                      <input type="text" class="form-control" id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon"></i>
                  </div>
                </div>
            </li>
      
        </ol>
      </nav>
      <h2>Page heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h4>Overview</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    </div>
    </div>
  )
}

export default MainContent