import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";
// import Card from './Card'
import "./MainContentJobs.css"

function MainContentJobs() {
  const { isAuthenticated,user } = useAuth0();
  const [ActiveVar,SetActiveVar] = useState(false)
  const [JobList, setJobList] = useState([])
  const [company, setCompany] = useState(false)
  const [companyData, setCompanyData] = useState()
  const [candidate, setCandidate] = useState()
  const [candidateData, setCandidateData] = useState();
  const [sortedData, setSortedData] = useState([]);
  const [selected, setSelected] = useState([]);
  // const dispatch = useDispatch()
  const getSingleProduct = async () => {
      const dataCompany = await axios.get(`https://backend.am3dpjobs.com/TallentReadonce/${user?.sub}`); 
      const dataCandidate = await axios.get(`https://backend.am3dpjobs.com/JobReadonce/${user?.sub}`);
      if(dataCandidate){
       
      //CHANGE LOCAL HOST TO BACKEND IN CASE OF ERRORS
        
        
      const SortedCampanyData = await axios.get("https://localhost:3002/filteredTallent", {
        params:{
          jobmode: dataCandidate.data.PrefferedJobMode,
          typeofwork: dataCandidate.data.PrefferedJobType          ,
          }
      })
      setSortedData(SortedCampanyData?.data)
    }
      if(Object.keys(dataCompany?.data).length !== 0){
        setCompanyData(dataCompany?.data)
        setCompany(true)
        setCandidate(false)
      }else if(Object.keys(dataCandidate?.data).length !==0) {
        setCandidateData(dataCandidate?.data)
        setCandidate(true)
        setCompany(false)
      }
      console.log(Object.keys(dataCandidate?.data).length !==0)
  }

  useEffect(() => {
      axios.get("https://backend.am3dpjobs.com/JobRead").then((response) => {
          // console.log(response.data)
          setJobList(response.data)
      });
      getSingleProduct();
  });

    

  const popup = (val) => {
    SetActiveVar(true);
  //  <Card val={val} />
  }
  // console.log(candidateData)

  const popdown = () => {
    SetActiveVar(false);
    
  }
  // console.log(candidate)
  if(candidate){
    return(
      <div>
        <div className="row p-5  drop-shadow-sm  ">

{/* <div className="col-lg-3 d-nonec d-lg-block shadow-md px-3"> */}
  {/* <nav className="sidenav sgds list-unstyled open2">
    <li className="sidenav-item backc shadow-lg dark:bg-transparent dark:text-fuchsia-500">
      <button
        className="sgds font-medium btn collapsed dark:font-bold"
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
    <li className="sidenav-item backc shadow-lg  dark:bg-transparent dark:text-fuchsia-500">
      <button
        className="sgds btn collapsed dark:font-bold"
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
        <li class="breadcrumb-item bread">
        <div class="sgds form-group mb-2">
            <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                <input type="text" class="form-controlc" placeholder="Search" autofocus />
                <i class="bi bi-search form-control-icon"></i>
            </div>
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
      <li class="breadcrumb-item bread">
        <div class="sgds form-group mb-2">
            <div class="sgds form-control-group px-2 shadow-md shadowc-sm rounded ">
                <input type="text" class="form-controlc dark:rounded-lg dark:text-fuchsia-400 text-semibold dark:bg-transparent dark:border-2 dark:border-fuchsia-500" placeholder="Search" autofocus />
                <i class="bi bi-search form-control-icon" style={{zIndex : '0'}}></i>
            </div>
          </div>
        </li>
      <li class="bread">
          <div class="sgds form-group mb-2"> 
              <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                  <input type="text" class="form-controlc dark:rounded-lg dark:bg-transparent dark:text-fuchsia-400 dark:border-2 dark:border-fuchsia-500 " id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                  <i class="bi bi-geo-alt form-control-icon" style={{zIndex : '0'}}></i>
              </div>
            </div>
        </li>
  
    </ol>
  </nav> */}
  <nav class="sgds" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item bread">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group px-2 shadow-md shadowc-sm rounded ">
                    <input type="text" class="form-controlc dark:rounded-lg dark:text-fuchsia-400 text-semibold dark:bg-transparent dark:border-2 dark:border-fuchsia-500" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon" style={{zIndex : '0'}}></i>
                </div>
              </div>
            </li>
          <li class="bread">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                      <input type="text" class="form-controlc dark:rounded-lg dark:bg-transparent dark:text-fuchsia-400 dark:border-2 dark:border-fuchsia-500 " id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon" style={{zIndex : '0'}}></i>
                  </div>
                </div>
            </li>
            <TagsInput
            classNames="mr-4"
              value={selected}
              onChange={setSelected}
              name="Tags"
              placeHolder="enter Tags"
            />
            <pre className='mx-3'>{JSON.stringify(selected)}</pre>
            <li>
              <button className="px-4 py-2 rounded text-white bg-cyan-300">Search</button>
            </li>
      
        </ol>
      </nav>
  <h1 className='flex justify-center text-lg  font-bold'>Your Card</h1>
  <div className='shadow-smc'>
  
      <Link to={`/Company/${candidateData._id}`}>
      <div className=' sm_shadow dark:text-white'>
      <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
        <div className='d-flex flex-column w-fullc' style={{cursor:"pointer"}} onClick={popup}>
          <div className='d-flex w-fullc'>
            <div className='d-flex flex-column'>
              
            <h2 class="job-post-summary__title text-lg  font-semibold">
              {candidateData?.CandidateName}
            </h2>
            <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="relative flex items-center mir-2 no-underline w-fullc mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> 
            {candidateData.CandidateCompany}
              </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg>
               {candidateData.CandidateLocation}</span></span></div>
          </div>
          
          <div class="mb-auto d-flex pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
            <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
              13 hours ago
          </span><div class="hidden md:incline bg-red-600 text-white font-medium rounded-md text-md py-1 px-3 "><object class=""><button class="
            " style={{ borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
            Apply
          </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
          </div>
          <div class="job-post-summary__tags hidden flex-no-shrink sm:flex flex-wrap"><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
          {candidateData.PrefferedFunction}
        </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
          {candidateData.PrefferedJobMode}
        </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
          {candidateData.PrefferdJobLevel}
        </span></span></div>  
        </div>
      </div>
      <div class="incline md:hidden p-2 bg-red-600 text-white font-semibold rounded-md text-base"><object class="flex flex-1"><button class="
        
        
      whitespace-no-wrap relative w-fullc jb-btn--x-small  px-3 " ><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
      Apply
    </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div>
    </div>
    
     
         
           
</Link>

 
  </div>
  
  <h1 className='flex justify-center text-lg mt-5 font-bold'>Company Card matching Your card</h1>
      <div className='shadow-smc'>
        <ul>
      {sortedData.map((val,key) => {
        
        return(
          <div>
            <li key={key}>
            <Link to={`/Candidate/${val._id}`}>
          <div className=' sm_shadow dark:text-white'>
          <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
            <div className='d-flex flex-column w-fullc' style={{cursor:"pointer"}} onClick={popup}>
              <div className='d-flex w-fullc'>
                <div className='d-flex flex-column'>
                <h2 class="job-post-summary__title text-base font-semibold">
                  {val.CompanyName}
                </h2>
                <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="relative flex items-center mir-2 no-underline w-fullc mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> 
                {val.JobTitle}
                  </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg>
                   {val.CompanyIndustry}</span></span></div>
              </div>
              
              <div class="mb-auto d-flex pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
                <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
                  13 hours ago
              </span><div class=" bg-red-600 text-white font-medium rounded-md text-md py-1 px-3 "><object class=""><button class="
                " style={{ borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
                Apply
              </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
              </div>
              <div class="job-post-summary__tags hidden flex-no-shrink sm:flex flex-wrap"><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobFunction}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobMode}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.RoleType}
            </span></span></div>  
            </div>
          </div>
          <div class="p-3 sm_hidden border-t"><object class="flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
            relative 
            cursor-pointer
          whitespace-no-wrap relative w-fullc jb-btn--x-small text-xs px-3 rounded border" style={{color: "rgb(0, 172, 216)", borderColor: "rgb(0, 172, 216)"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
          Apply
        </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div>
        </div>
        
    </Link>
    </li>
    </div>
    
        )
      })}
      </ul>
      </div>
  </div>
{/* </div> */}
      </div>
    )
  }

  return (
    <div>
      <h1 className="flex justify-center h-96 items-center font-bold text-xl">Didn't Create any Card</h1>
      
        {/* <div className="row p-5  drop-shadow-sm  ">

    <div className="col-lg-3 d-nonec d-lg-block shadow-md px-3">
      <nav className="sidenav sgds list-unstyled open2">
        <li className="sidenav-item backc shadow-lg dark:bg-transparent dark:text-fuchsia-500">
          <button
            className="sgds font-medium btn collapsed dark:font-bold"
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
        <li className="sidenav-item backc shadow-lg  dark:bg-transparent dark:text-fuchsia-500">
          <button
            className="sgds btn collapsed dark:font-bold"
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
            <li class="breadcrumb-item bread">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                    <input type="text" class="form-controlc" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon"></i>
                </div>
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
          <li class="breadcrumb-item bread">
            <div class="sgds form-group mb-2">
                <div class="sgds form-control-group px-2 shadow-md shadowc-sm rounded ">
                    <input type="text" class="form-controlc dark:rounded-lg dark:text-fuchsia-400 text-semibold dark:bg-transparent dark:border-2 dark:border-fuchsia-500" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon" style={{zIndex : '0'}}></i>
                </div>
              </div>
            </li>
          <li class="bread">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                      <input type="text" class="form-controlc dark:rounded-lg dark:bg-transparent dark:text-fuchsia-400 dark:border-2 dark:border-fuchsia-500 " id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon" style={{zIndex : '0'}}></i>
                  </div>
                </div>
            </li>
      
        </ol>
      </nav>
      <div className='shadow-smc'>
      <ul>

      {JobList.map((val,key) => {
        return(
          <div>
          
          <li key={key}>
          <Link to={`/Company/${val._id}`}>
          <div className=' sm_shadow dark:text-white'>
          <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
            <div className='d-flex flex-column w-fullc' style={{cursor:"pointer"}} onClick={popup}>
              <div className='d-flex w-fullc'>
                <div className='d-flex flex-column'>
                  
                <h2 class="job-post-summary__title text-lg  font-semibold">
                  {val?.CandidateName}
                </h2>
                <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="relative flex items-center mir-2 no-underline w-fullc mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> 
                {val.JobSpecialisation}
                  </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg>
                   {val.Location}</span></span></div>
              </div>
              
              <div class="mb-auto d-flex pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
                <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
                  13 hours ago
              </span><div class="hidden md:incline bg-red-600 text-white font-medium rounded-md text-md py-1 px-3 "><object class=""><button class="
                " style={{ borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
                Apply
              </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
              </div>
              <div class="job-post-summary__tags hidden flex-no-shrink sm:flex flex-wrap"><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobFunction}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobMode}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobSpecialisation}
            </span></span></div>  
            </div>
          </div>
          <div class="incline md:hidden p-2 bg-red-600 text-white font-semibold rounded-md text-base"><object class="flex flex-1"><button class="
            
            
          whitespace-no-wrap relative w-fullc jb-btn--x-small  px-3 " ><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
          Apply
        </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div>
        </div>
        
         
             
               
    </Link>
    </li>
    </div>
        )
          
      })}
        </ul>
     
      </div>
      
      </div>
    </div> */}
    
    {/* <Card active={ActiveVar}/> */}
    

    </div>
  )} 


export default MainContentJobs
