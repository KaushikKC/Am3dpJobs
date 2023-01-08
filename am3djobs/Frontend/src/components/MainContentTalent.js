import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";
// import Card from './Card'
import "./MainContentJobs.css"

function MainContentTallent() {
  const { isAuthenticated,user } = useAuth0();
  const [ActiveVar,SetActiveVar] = useState(false)
  const [TallentList, setTallentList] = useState([])
  const [company, setCompany] = useState(false)
  const [companyData, setCompanyData] = useState([])
  const [candidate, setCandidate] = useState(false)
  const [candidateData, setCandidateData] = useState();
  const [sortedData, setSortedData] = useState([]);
  const [isLike, setIsLike] = useState(false)
  const [selected, setSelected] = useState([]);
    // const dispatch = useDispatch()
    const getSingleProduct = async () => {
      const dataCompany = await axios.get(`https://backend.am3dpjobs.com/TallentReadonce/${user?.sub}`); 
      const dataCandidate = await axios.get(`https://backend.am3dpjobs.com/JobReadonce/${user?.sub}`);
      if(dataCompany){
      const SortedCandidate = await axios.get("https://backend.am3dpjobs.com/filteredJobs",{
        params:{
        jobmode: dataCompany.data[0].JobMode,
        typeofwork: dataCompany.data[0].JobType,
        }
      })
      setSortedData(SortedCandidate?.data)
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
      // console.log(dataCompany.data[1].JobMode)
      // console.log(dataCompany.data[1].TypeOfWork)
      // console.log(SortedCandidate.data)
      // console.log(Object.keys(dataCandidate?.data).length !==0)
  }
    useEffect(() => {
        axios.get("https://backend.am3dpjobs.com/Tallentread").then((response) => {
            // console.log(response.data)
            setTallentList(response.data)
        });
        getSingleProduct();
    });

  const popup = () => {
    SetActiveVar(true);
  
  }

  async function onLikeButtonClick  (id) {
    console.log(id)
    // setLike(like + (isLike?-1:1));
    // setIsLike(!isLike);
    const data = await axios.get(`https://localhost:3002/JobReadonce/${id}`)
    try {
    await axios.post("https://localhost:3002/likedJobs", {
      Job_id: id,
      User_id: data.User_id,
      CandidateName: data.CandidateName,     
      CandidateLocation: data.CandidateLocation,
      CandidateNumber: data.CandidateNumber,
      CandidateCompany: data.CandidateCompany,
      CandidateUID: data.CandidateUID,
      CandidateIndustry : data.CandidateIndustry,
      CandidateEmail: data.CandidateEmail,
      Signal : data.Signal,
      CandidateSummary: data.CandidateSummary,
      CandidateSkills: data.CandidateSkills,
      PrefferedJobTitle: data.PrefferedJobTitle,
      PrefferedCompanyTitle: data.PrefferedCompanyTitle,
      PrefferedLocation: data.PrefferedLocation,
      PrefferedIndustry: data.PrefferedIndustry,
      PrefferedFunction: data.PrefferedFunction,
      PrefferedJobLevel: data.PrefferedJobLevel,
      PrefferedJobMode : data.PrefferedJobMode,
      PrefferedJobType: data.PrefferedJobType,
      WeeklyAvailability: data.WeeklyAvailability,
      PrefferedDate: data.PrefferedDate,
      PrefferedMonthlySalary: data.PrefferedMonthlySalary,
      PrefferedCompanyType: data.PrefferedCompanyType,
      InterviewMode: data.InterviewMode,
      InterviewAvailability: data.InterviewAvailability,
      InterviewContact: data.InterviewContact, 
      CandidatePicture: data.CandidatePicture,

    })
  } catch (error) {
    console.error(error)
}
};

  // console.log(sortedData)

  const popdown = () => {
    SetActiveVar(false);
  }
  if(company){
    return(
      <div>
        <div className="row mx-2 p-4 shadow-lg drop-shadow-sm ">

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
      <h1 className='flex justify-center text-lg font-bold'>Your Cards</h1>
      <div className='shadow-smc'>
        <ul>
      {companyData.map((val,key) => {
        
        return(
          <div>
            <li key={key}>
            
          <div className=' sm_shadow dark:text-white'>
          <div className='p-3 relative flex justify-between' style={{borderBottom:"2px solid #E5E5E5"}}>
          
            <div className='d-flex flex-column grow-[8] w-fullc' style={{cursor:"pointer"}} onClick={popup}>
            <Link to={`/Candidate/${val._id}`}>
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
              
              
              
              </div>
              <div class="job-post-summary__tags hidden flex-no-shrink sm:flex flex-wrap"><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobFunction}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.JobMode}
            </span></span><span class="jb__tag text-xs mir-2 px-2 py-1 my-1 rounded no-underline inline-flex items-center text-grey-darker cursor-pointer uppercase tooltipped-n tooltipped-no-delay tooltipped" aria-label="+ Add Filter"><span>
              {val.RoleType}
            </span></span></div>  
            </Link>
            </div>
            
            <div class="mb-auto d-flex m-0 justify-end pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
                <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
                  13 hours ago
              </span><div class=" bg-red-600 text-white font-medium rounded-md text-md py-1 px-3 "><object class=""><button class="
                " style={{ borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
                Apply
              </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
              <button
                className={"like-button px-3 py-1 h-[30px] rounded-xl bg-green-300 " + (isLike ? "liked" : "")}
                onClick={() => onLikeButtonClick(val._id)}>
                {"Like"}
              </button>
          </div>
          
          <div class="p-3 sm_hidden border-t"><object class="flex flex-1"><button class="
            jb-btn 
            no-underline 
            flex 
            items-center 
            font-semibold 
            justify-center 
           
            cursor-pointer
          whitespace-no-wrap relative w-fullc jb-btn--x-small text-xs px-3 rounded border" style={{color: "rgb(0, 172, 216)", borderColor: "rgb(0, 172, 216)"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
          Apply
        </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div>
        </div>
        
    
    
    </li>
    </div>
    
        )
      })}
      </ul>
      </div>
      <h1 className='flex justify-center text-lg mt-5 font-bold'>Jobs Card matching Your cards</h1>
      <div className='shadow-smc'>
        <ul>
      {sortedData.map((val,key) => {
        
        return(
          <div>
            <li key={key}>
            <Link to={`/Company/${val._id}`}>
          <div className=' sm_shadow dark:text-white'>
          <div className='p-3 relative' style={{borderBottom:"2px solid #E5E5E5"}}>
            <div className='d-flex flex-column w-fullc' style={{cursor:"pointer"}} onClick={popup}>
              <div className='d-flex w-fullc'>
                <div className='d-flex flex-column'>
                <h2 class="job-post-summary__title text-base font-semibold">
                  {val.CandidateName}
                </h2>
                <div class="flex-wrap text-xs font-semibold flex items-center leading-normal text-grey-darker"><span to="[object Object]" class="relative flex items-center mir-2 no-underline w-fullc mb-2 md:w-auto md:mb-0" style={{color:"inherit"}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 18 18" class="mir-1 flex-no-shrink"><g transform="translate(-1201.5 -1207)"><rect width="18" height="18" transform="translate(1201.5 1207)" fill="none"></rect><path d="M15.722,17.5V3.278A1.778,1.778,0,0,0,13.944,1.5H5.056A1.778,1.778,0,0,0,3.278,3.278V17.5m12.444,0H17.5m-1.778,0H11.278m-8,0H1.5m1.778,0H7.722M6.833,5.056h.889M6.833,8.611h.889m3.556-3.556h.889m-.889,3.556h.889M7.722,17.5V13.056a.889.889,0,0,1,.889-.889h1.778a.889.889,0,0,1,.889.889V17.5m-3.556,0h3.556" transform="translate(1201 1206.5)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg> 
                {val.CandidateCompany}
                  </span><span locations="Washington, District of Columbia, United States" remote-locations="" class="flex w-full mb-2 mir-2 md:w-auto md:mb-0"><span class="flex flex-shrink items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18.187" viewBox="0 0 18 18.187" class="mir-1 flex-no-shrink"><g transform="translate(-1243 -1207)"><rect width="18" height="18" transform="translate(1243 1207)" fill="none"></rect><g transform="translate(1243.667 1206.5)"><path d="M13.283,13.427,9.818,16.886a2.1,2.1,0,0,1-2.968,0L3.384,13.427a6.993,6.993,0,1,1,9.9,0Z" transform="translate(0 0)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.75,8.287a2.625,2.625,0,1,1-2.625-2.62A2.623,2.623,0,0,1,10.75,8.287Z" transform="translate(0.208 0.2)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></g></svg>
                   {val.CandidateLocation}</span></span></div>
              </div>
              
              <div class="mb-auto d-flex pin-t pir-4 sm:pt-0 sm:pir-0 sm:relative ml-auto flex items-center flex-row align-items-end sm:flex-row flex-no-shrink pin-r">
                <span class="job-post__date text-xs sm:font-bold italic" style={{marginRight:"10px"}}>
                  13 hours ago
              </span><div class=" bg-red-600 text-white font-medium rounded-md text-md py-1 px-3 "><object class=""><button class="
                " style={{ borderColor:"#00ACD8"}}><span class="jb-btn--empty flex items-center z-2 mir-2"></span><span class="z-2">
                Apply
              </span><div class="jb-btn__hover w-full h-full z-1 invisible absolute jb-btn--x-small text-xs px-3 rounded jb-btn--hover-outline"></div><span class="jb-btn--empty flex items-center mil-2 z-2"></span></button></object></div></div>
              <button
                className={"like-button " + (isLike ? "liked" : "")}
                onClick={onLikeButtonClick}>
                {"Like"}
              </button>
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
    {/* <Card active={ActiveVar}/> */}
    </div>
    )
  }

  return (
    <div>
      <h1 className="flex justify-center h-96 items-center font-bold text-xl">Didn't Create any Card</h1>
        {/* <div className="row mx-2 p-4 shadow-lg drop-shadow-sm ">

    <div className="col-lg-3 d-nonec d-lg-block px-3 shadow-md">
      <nav className="sidenav sgds list-unstyled open2">
        <li className="sidenav-item backc shadow-lg">
          <button
            className="sgds btn collapsed "
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
        <li className="sidenav-item backc shadow-lg">
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
                <div class="sgds form-control-group px-2 shadowc-sm rounded ">
                    <input type="text" class="form-controlc dark:rounded-lg" placeholder="Search" autofocus />
                    <i class="bi bi-search form-control-icon" style={{zIndex : '0'}}></i>
                </div>
              </div>
            </li>
          <li class="bread">
              <div class="sgds form-group mb-2"> 
                  <div class="sgds form-control-group px-2 shadowc-sm rounded">
                      <input style={{border:"0px"}} type="text" class="form-controlc dark:rounded-lg" id="hoverWith" aria-describedby="hoverWithHelp" placeholder="Location" autofocus />
                      <i class="bi bi-geo-alt form-control-icon" style={{zIndex : '0'}}></i>
                  </div>
                </div>
            </li>
      
        </ol>
      </nav>
      <div className='shadow-smc'>
        <ul>
      {TallentList.map((val,key) => {
        
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
    </div> */}
    {/* <Card active={ActiveVar}/> */}
    </div>
  )
}

export default MainContentTallent