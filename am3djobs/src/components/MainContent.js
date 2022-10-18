import React from 'react'
import "./MainContent.css"

function MainContent() {
  return (
    <div>
        <div className="row m-8">

    <div className="col-lg-3 d-none d-lg-block">
      <nav className="sidenav sgds list-unstyled open2">
        <li className="sidenav-item">
          <button
            className="sgds btn collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleD"
            aria-expanded="false"
            aria-controls="collapseExampleD"
          >
            Category
            <i className="bi bi-chevron-down"></i>
          </button>
          <div
            className="collapse show"
            id="collapseExampleD"
            data-bs-parent=".open2"
          >
            <ul className="list-unstyled">
            <li>
                    <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
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
            Tags
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="collapse" id="collapseExampleE" data-bs-parent=".open2">
            <ul className="list-unstyled">
              <li>
                    <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
              <li>
                <div class="form-check form-controlc shadow-sm px-5 my-3">
                      <input class="form-check-input" type="checkbox" value="" id="checkboxDefault" />
                      <label class="form-check-label" for="checkboxDefault">
                          Default
                      </label>
                  </div>
              </li>
            </ul>
          </div>
        </li>
        
      </nav>
    </div>
    <div class="col-lg-9">
      <nav class="sgds" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" style={{marginRight: "30px"}}>
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group shadowc-sm rounded ">
                    <input type="text" class="form-controlc" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon"></i>
                </div>
              </div>
            </li>
          <li class="">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2 shadowc-sm rounded">
                      <input style={{border:"0px"}} type="text" class="form-controlc" id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon"></i>
                  </div>
                </div>
            </li>
      
        </ol>
      </nav>
      <div className='shadow-sm'>
      <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class=" d-flex pin-t pt-2 pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm_block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap
           relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
      <div className='p-3 ' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex relaive'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class="d-flex pin-t pt-2 pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm:block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
      <div className='p-3 ' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class="d-flex pin-t pt-2 pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm:block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
      <div className='p-3 ' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class="d-flex pin-t pt-2 pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm:block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
      <div className='p-3 ' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class="d-flex pin-t pt-2 pir-4 sm_pt-0 sm_pir-0 sm_relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm:block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
      <div className='p-3' style={{borderBottom:`2px solid #E5E5E5`}}>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <h2 class="job-post-summary__title text-base">
              Director, Sustainability
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="flex items-center mir-2 no-underline w-full mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> American Iron and Steel Institute
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg> Washington, District of Columbia, United States </span></span></div>
          </div>
          <div class="d-flex pin-t pt-2 pir-4 sm:_pt-0 sm_pir-0 sm_relative ml-auto flex items-center flex-row align-items-end sm_flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="job-post-summary__apply mil-2 hidden sm:block"><object class="job-post-object flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-full jb-btn--x-small text-xs px-3 rounded border" style={{color:"#00ACD8", borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
        </div>
      </div>
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default MainContent