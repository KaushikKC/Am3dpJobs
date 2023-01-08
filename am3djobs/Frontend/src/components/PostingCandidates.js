import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './PostingCandidates.css'
import {redirectToAuth} from 'supertokens-auth-react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


function PostingCandidates({ files, setFiles, removeFile }) {

    const { isAuthenticated,user } = useAuth0();
  const [ActiveVar,SetActiveVar] = useState(false)
  const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [change, setChange] = useState(false);
    const [company, setCompany] = useState();
    const [mode, setMode] = useState();
    const [type, setType] = useState();

    const getSingleProduct = async () => {
        const dataCompany = await axios.get(`https://backend.am3dpjobs.com/CompanyProfileRead/${user?.sub}`);  // http://localhost:3002/CompanyProfileRead/${user?.sub}
        setCompany(dataCompany?.data)
        // console.log(dataCompany?.data)
        // const {data} = await axios.get(`https://backend.am3dpjobs.com/CandidateProfileRead/${user?.sub}`);
    }
    
    useEffect(() => {
        getSingleProduct();
    });
    const display = () => {
        setChange(true)
    }
    
    const setField = (field, value) => {
        setForm ({
            ...form,
            [field]: value
        })

        if (!!errors[field])
        setErrors({
            ...errors,
            [field]: null,
        })
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        console.log("preview:",preview);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

  const handleChange = (e) => {
    setImage(e.target.files[0])
    if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    // setImage(e.target.files[0])
    setField('file',e.target.value)
  }
//   console.log(company)
  const postDetails = () => {
    const data = new FormData()
    data.append("file",selectedFile)
    data.append("upload_preset","JobForm_Img")
    data.append("cloud_name","dv0frgqvj")
    fetch("https://api.cloudinary.com/v1_1/dv0frgqvj/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("data:",data)
        console.log(data.url)
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
  }
  const popup = () => {
    SetActiveVar(true);
  
  }

  const popdown = () => {
    SetActiveVar(false);
  }

  const SignUp = async () => {
    redirectToAuth();
}

  const validateForm = () => {
    const {JobDescription,JobTitle, Background, CandidateType, InterviewMode, JobFunction, JobMode,JoiningTime, MonthlySalary, Skill,TypeWork, JobIndustry, JobStartDate,JobCompany,JobCompanyName,JobLevel,JobType,JobWeeklyHour,InterviewAvailability,InterviewContact} = form
    const newErrors = {}
    // console.log("name", Name)

    // if (!Name || Name === "") 
    //     newErrors.Name = "Please enter the valid Name"
    // if (!CompanyIndustry || CompanyIndustry === "") 
    //     newErrors.CompanyIndustry = "Please enter the valid Name"
    // if (!CompanyHQ || CompanyHQ === "") 
    //     newErrors.CompanyHQ = "Please enter the valid Name"
    // if (!CompanyUID || CompanyUID === "") 
    //     newErrors.CompanyUID = "Please enter the valid Name"
    // if (!RecruiterName || RecruiterName === "") 
    //     newErrors.RecruiterName = "Please enter the valid Name"
    // if (!RecruiterNumber || RecruiterNumber === "") 
    //     newErrors.RecruiterNumber = "Please enter the valid Name"
    if (!JobDescription || JobDescription === "") 
        newErrors.JobDescription = "Please enter the valid Name"
    if (!JobTitle || JobTitle === "") 
        newErrors.JobTitle = "Please enter the valid Name"
    // if (!JobLocation || JobLocation === "") 
    //     newErrors.JobLocation = "Please enter the valid Name"
    if (!JobIndustry || JobIndustry === "") 
        newErrors.JobIndustry = "Please enter the valid Name"
    if (!JobFunction || JobFunction === "") 
        newErrors.JobFunction = "Please enter the valid Job Function"
    if (!JobMode || JobMode === "") 
        newErrors.JobMode = "Please enter the valid Job Mode"
    if (!JobStartDate || JobStartDate === "") 
        newErrors.JobStartDate = "Please enter the valid Job Mode"
        if (!JobCompany || JobCompany === "") 
        newErrors.JobCompany = "Please enter the valid Job Mode"
        if (!JobCompanyName || JobCompanyName === "") 
        newErrors.JobCompanyName = "Please enter the valid Job Mode"
        if (!JobLevel || JobLevel === "") 
        newErrors.JobLevel = "Please enter the valid Job Mode"
        // if (!JobType || JobType === "") 
        // newErrors.JobType = "Please enter the valid Job Mode"
        if (!JobWeeklyHour || JobWeeklyHour === "") 
        newErrors.JobWeeklyHour = "Please enter the valid Job Mode"
        if (!InterviewAvailability || InterviewAvailability === "") 
        newErrors.InterviewAvailability = "Please enter the valid Job Mode"
        if (!InterviewContact || InterviewContact === "") 
        newErrors.InterviewContact = "Please enter the valid Job Mode"
    // if (!Background || Background === " ") 
    //     newErrors.Background = "Please enter the valid Background"
    // if (!CandidateType || CandidateType === "") 
        // newErrors.CandidateType = "Please enter the valid Candidate Type"
    if (!InterviewMode || InterviewMode === "") 
        newErrors.InterviewMode = "Please enter the valid Interview Mode"
    
    // if (!JoiningTime || JoiningTime === "") 
        // newErrors.JoiningTime = "Please enter the valid Joining Time"
    if (!MonthlySalary || MonthlySalary === "") 
        newErrors.MonthlySalary = "Please enter the valid Monthy Salary"
    
    if (!Skill || Skill === "") 
        newErrors.Skill = "Please enter the valid Skill"
    if (!TypeWork || TypeWork === "") 
        newErrors.TypeWork = "Please enter the valid Type Work"
    
    return newErrors
}

  async function handleSubmit (e)  {
    e.preventDefault()

    try {
        const formErrors = await validateForm()
        if (Object.keys(formErrors).length > 0){
            setErrors(errors =>({
                ...errors,
                ...formErrors
            }))
            console.log( errors.Name)
            console.log(validateForm())
        } else {
            // else {
            console.log('form submitted');
            console.log(url)
            console.log(form)
            // dispatch(registerUser(form))
      
        await axios.post("https://backend.am3dpjobs.com/TallentUpload", {
            User_id : company.User_id,
            CompanyName: company.CompanyName,
            CompanyIndustry: company.CompanyIndustry,
            Location: company.Location,
            CompanyUID: company.CompanyUID,
            RecruiterName: company.RecruiterName,
            RecruiterNumber: company.RecruiterNumber,
            RecruiterEmail: company.RecruiterEmail,
            Signal: company.Signal,
            JobDescription: form.JobDescription,
            JobTitle: form.JobTitle,
            JobMode: form.JobMode,
            JobLocation: form.JobLocation,
            JobIndustry: form.JobIndustry,
            JobFunction: form.JobFunction,
            Skills: form.Skills,
            JobStartDate: form.JobStartDate,
            MonthlySalary: form.MonthlySalary,
            JobCompany: form.JobCompany,
            JobCompanyName: form.JobCompanyName,
            JobLevel: form.JobLevel,
            JobType: form.TypeWork,
            JobWeeklyHour: form.JobWeeklyHour,
            InterviewMode: form.InterviewMode,
            InterviewAvailability: form.InterviewAvailability,
            InterviewContact: form.InterviewContact,
            file: company?.CompanyLogo,


        })
        popdown() 
    } } catch (error) {
        console.error(error)
    }
}

const handleMode = (e) => {
    setField(`JobMode`,e.target.value)
    setMode(e.target.value)
}

const handleType = (e) => {
    setField(`TypeWork`,e.target.value)
    setType(e.target.value)
}


  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if(!file) return;
    file.isUploading = true;
    setFiles([...files, file])

    // upload file
    const formData = new FormData();
    formData.append(
        "newFile",
        file,
        file.name
    )
    axios.post('https://backend.am3dpjobs.com/upload', formData)
        .then((res) => {
            file.isUploading = false;
            setFiles([...files, file])
        })
        .catch((err) => {
            // inform the user
            console.error(err)
            removeFile(file.name)
          });
        }
  return (
    <div className='bg-no-repeat bg-cover backgroundt'>
        <div className="h-[39rem] ">
        <div className='opacity-50 absolute left-0 top-80 z-20 text-5xl cursor-pointer text-white'>
            <Link to={'/'} class="bi bi-chevron-left"></Link>
        </div>
            <div className='flex flex-col justify-end items-center text-center font-bold text-3xl absolute mx-auto w-full top-[14rem] text-white'>
                <p>Finding Candidates does not have to be so Difficult. <br />
                    Hire the best relevant Talent without Hassle</p>
            
            </div>
        <h1 className={` ${company?.User_id ? '' : 'hiddend'} flex flex-col justify-end h-[21rem] sm:h-[17.5rem] md:h-[15.5rem] items-center top-[15rem] italic text-slate-300 md:text-red-600 md:font-semibold text-md sm:leading-[50px]`}><span>Create your &nbsp;CARD to find candidates   </span>  </h1>
        <p className={`${company?.User_id ? '' : 'hiddend'} absolute mx-auto w-full md:mx-auto flex flex-col items-center top:[22rem] sm:top-[21.7rem] md:top-[19.5rem] text-slate-300 md:font-semibold md:text-slate-400  italic d text-md sm:leading-[50px]`}>Takes only a few clicks!</p>
        <div className=' flex flex-col justify-center  items-center mt-5 '>
          {/* <button className=''   >Post a Job</button> */}
          <button className={` ${company?.User_id ? '' : 'hiddend'}  flex flex-col justify-center  items-center p-2 rounded-md bg-red-600 text-white font-semibold top-[25rem] sm:top-[23rem] md:top-[22rem]`} onClick={popup}>Create Job</button>
        </div>

        <div className={`product ${isAuthenticated ? 'hiddend' : ''}`}>
        <div className={`field drop-shadow-md ${ActiveVar ? 'active' : ''}`}>
            <button className='font-bold text-xl px-3 py-2 bg-red-500 rounded-lg text-white' onClick={SignUp}>Sign up to Create a Job</button>
            <a className='absolute top-16 right-5 text-xl cursor-pointer'><i class="fas fa-times close-btn dark:text-white" onClick={popdown}></i></a>

        </div>
        </div>

        <div className={`product ${isAuthenticated ? '' : 'hiddend'}`}>
        <div className={`field ${ActiveVar ? 'active': ''}`}>
        <div className='my-auto'>
        <div className="file-card">

        <div className="file-inputs">
            {/* <input type="file" name='file' onChange={handleChange} />
            {selectedFile &&  <img className='z-5 h-[391px] w-[319px] my-12' src={preview} alt=''/> }
            <button className={`${selectedFile ? 'hiddend' : ''}`}>
                <i className='ml-[5.4rem]'>
                    <FontAwesomeIcon icon={faPlus} />
                </i >
                <p className='mt-3 text-2xl text-orange-600 font-bold drop-shadow-lg'>UPLOAD</p>
                
            </button> */}
            <img className='w-[500px]' src={company?.CompanyLogo || user?.picture} alt="" />
        </div>
        </div>
        <button onClick={postDetails} className={`flex text-red-600 rounded-lg p-3 bg-white justify-center mx-auto font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>

        <p className="main">Company Picture</p>

        </div>
        <div class="container bg-[#fff] dark:bg-slate-800">
        <div className='d-flex justify-content-between mx-3 cursor-pointer'>
        <header className='text-blue-900 drop-shadow-lg font-bold mt-2 text-lg'>Job Card</header>
        <a ><i class="fas fa-times close-btn dark:text-white" onClick={popdown}></i></a>
        </div>

        <Form className='overflow-hidden'>
        <form action="#">
            <div class="form first text-[#333] dark:text-white">
                
                <div class={`details personal`}>
                    <span class="title text-[#333] dark:text-white">Company Info</span>

                    <div class="grid grid-cols-4 gap-4">
                        <div>
                            <h3 className='font-semibold mb-2'>Company Name:</h3>
                            <p>{company?.CompanyName}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Location:</h3>
                            <p>{company?.Location}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Recruiter Name: </h3>
                            <p>{company?.RecruiterName}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Company Industry:</h3>
                            <p>{company?.CompanyIndustry}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>CompanyUID :</h3>
                            <p>{company?.CompanyUID}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Recruiter Number:</h3>
                            <p>{company?.RecruiterNumber}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Recruiter Email:</h3>
                            <p>{company?.RecruiterEmail}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Signal:</h3>
                            <p>{company?.Signal}</p>
                        </div>
                       
                    </div>
                </div>
                
                

                <div class="details ID">
                    <span class="title">Job info</span>

                    <div class="fields">
 
                    <div class="input-field">
                        <Form.Group>
                            <label>Job Description</label>
                            <Form.Control as="textarea" type="text" placeholder="Enter the name" 
                            required
                            value={form.JobDescription}
                            onChange={e=> setField(`JobDescription`,e.target.value)} 
                            isInvalid = {!!errors.JobDescription}
                            />
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Skills</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Skills Required" required
                            value={form.Skill}
                            onChange={e=> setField(`Skill`,e.target.value)}
                            isInvalid = {!!errors.Skill}
                            />
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Company Name</Form.Label>
                            <Form.Control 
                            required
                            type="text"
                            placeholder='Enter company name'
                            value={form.JobCompanyName}
                            onChange={e=> setField(`JobCompanyName`,e.target.value)}
                            isInvalid = {!!errors.JobCompanyName}
                            />
                
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <label>Job Title</label>
                            <Form.Control type="text" placeholder="Enter the Title" 
                            required
                            value={form.JobTitle}
                            onChange={e=> setField(`JobTitle`,e.target.value)} 
                            isInvalid = {!!errors.JobTitle}
                            />
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Industry</Form.Label>
                            <Form.Select 
                            placeholder='Enter Job Industry'
                            required
                            value={form.JobIndustry}
                            onChange={e=> setField(`JobIndustry`,e.target.value)}
                            isInvalid = {!!errors.JobIndustry}
                            >
                                <option disabled selected>Select Industry</option>
                                <option >Agriculture</option>
                                <option >Arts</option>
                                <option >Construction</option>
                                <option >Consumer Goods</option>
                                <option >Corporate Services</option>
                                <option >Design</option>
                                <option >Education</option>
                                <option >Energy & Mining</option>
                                <option >Entertainment</option>
                                <option >Finance</option>
                                <option >Hardware & Networking</option>
                                <option >Health Care</option>
                                <option >Legal</option>
                                <option >Manufacturing</option>
                                <option >Media & Communications</option>
                                <option >Nonprofit</option>
                                <option >Public Administration</option>
                                <option >Public Safety</option>
                                <option >Real Estate</option>
                                <option >Recreation & Travel</option>
                                <option >Retail</option>
                                <option >Health Care</option>
                                <option >Software & IT Services</option>
                                <option >Transportation & Logistics</option>
                                <option >Wellness & Fitness</option>
                            </Form.Select>
                            </Form.Group>
                        </div>
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Function</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobFunction}
                            onChange={e=> setField(`JobFunction`,e.target.value)}
                            isInvalid = {!!errors.JobFunction}
                            >
                            <option disabled selected>Select Function</option>
                                <option>Accounting</option>
                                <option>Administrative</option>
                                <option>Arts and Design</option>
                                <option>Business Development</option>
                                <option>Community and Social Services</option>
                                <option>Consulting</option>
                                <option>Education</option>
                                <option>Engineering</option>
                                <option>Entrepreneurship</option>
                                <option>Finance</option>
                                <option>Healthcare Services</option>
                                <option>Human Resources</option>
                                <option>Information Technology</option>
                                <option>Legal</option>
                                <option>Marketing</option>
                                <option>Media and Communication</option>
                                <option>Military and Protective Services</option>
                                <option>Operations</option>
                                <option>Product Management</option>
                                <option>Program and Project Management</option>
                                <option>Purchasing</option>
                                <option>Quality Assurance</option>
                                <option>Real Estate</option>
                                <option>Research</option>
                                <option>Sales</option>
                                <option>Support</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job level</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobLevel}
                            onChange={e=> setField(`JobLevel`,e.target.value)}
                            isInvalid = {!!errors.JobLevel}
                            >
                                <option disabled selected>Select Level</option>
                                <option>Intern</option>
                                <option>Solo Contribution</option>
                                <option>Team Leader</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Mode</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobMode}
                            onChange={e=> handleMode(e) }
                            isInvalid = {!!errors.JobMode}
                            >
                                <option disabled selected>Select Mode</option>
                                <option>On-site</option>
                                <option>Remote</option>
                            </Form.Select>
                           
                            </Form.Group>
                        </div> 
                        {
                            (mode === 'On-site') && (<div class="input-field">
                            <Form.Group>
                                <label>Job Location</label>
                                <Form.Control type="text" placeholder="Enter Location if On site" 
                                // required
                                value={form.Location}
                                onChange={e=> setField(`Location`,e.target.value)} 
                                // isInvalid = {!!errors.Location}
                                />
                                
                                </Form.Group>
                            </div>)
                        }
                        
                        <div class="input-field">
                            <Form.Group>
                            <Form.Label>Job Type</Form.Label>
                            <Form.Select 
                            required
                            value={form.TypeWork}
                            onChange={e=> handleType(e) }
                            isInvalid = {!!errors.TypeWork}
                            >
                                <option disabled selected>Select type</option>
                                <option>Freelance</option>
                                <option>Exclusive</option>
                            
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        {
                            (type === 'Freelance') &&
                        (<div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Weekly Hour</Form.Label>
                            <Form.Control type="number" placeholder="Enter Hour if Freelance" 
                            // required 
                            value={form.JobWeeklyHour}
                            onChange={e=> setField(`JobWeeklyHour`,e.target.value)}
                            // isInvalid = {!!errors.JobWeeklyHour}
                            />
                            
                            </Form.Group>
                        </div>)
                        }
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Start Date</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobStartDate}
                            onChange={e=> setField(`JobStartDate`,e.target.value)}
                            isInvalid = {!!errors.JobStartDate}
                            >
                                <option disabled selected>Select Mode</option>
                                <option>Immediate</option>
                                <option>Later</option>
                            </Form.Select>
                           
                            </Form.Group>
                        </div> 

                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Monthly Salary(INR)</Form.Label>
                            <Form.Control type="number" placeholder="Enter Salary" 
                            required 
                            value={form.MonthlySalary}
                            onChange={e=> setField(`MonthlySalary`,e.target.value)}
                            isInvalid = {!!errors.MonthlySalary}
                            />
                            
                            </Form.Group>
                        </div>
                    
                
                    <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Company Type</Form.Label>
                            <Form.Select 
                            required
                            type="text"
                            value={form.JobCompany}
                            onChange={e=> setField(`JobCompany`,e.target.value)}
                            isInvalid = {!!errors.JobCompany}
                            >
                                <option disabled selected>Select Company</option>
                                <option>Startup</option>
                                <option>SME</option>
                                <option>Enterprise</option>
                            </Form.Select>
                            </Form.Group>
                        </div>
                    
                        </div>

                    <div class="details ID">
                    <span class="title">Job Interview Preference</span>

                    <div class="fields">

                    <div class="input-field">
                        <Form.Group>
                            <Form.Label>Interview Mode</Form.Label>
                            <Form.Select 
                            required
                            
                            value={form.InterviewMode}
                            onChange={e=> setField(`InterviewMode`,e.target.value)}
                            isInvalid = {!!errors.InterviewMode}
                            >
                                <option disabled selected>Select Mode</option>
                                <option>Face to Face</option>
                                <option>Virtual Video</option>
                                <option >Phone</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                    <div class="input-field">
                        <Form.Group>
                        <Form.Label>Interview Availability</Form.Label>
                            <Form.Select 
                            required
                            value={form.InterviewAvailability}
                            onChange={e=> setField(`InterviewAvailability`,e.target.value)}
                            isInvalid = {!!errors.InterviewAvailability}
                            >
                                <option disabled selected>Select Time</option>
                                <option>Immediate</option>
                                <option>One Week</option>
                                <option>One Month</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                    

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Interview Contact</Form.Label>
                            <Form.Control type="text" placeholder="Enter Contact" 
                            required 
                            value={form.InterviewContact}
                            onChange={e=> setField(`InterviewContact`,e.target.value)}
                            isInvalid = {!!errors.InterviewContact}
                            />
                            
                            </Form.Group>
                        </div>

                    </div>
                    </div>

                    <button onClick={handleSubmit} class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                    </button>
                </div> 
            </div>

            
                        
        </form>
        </Form>
            
                        
        
    </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PostingCandidates