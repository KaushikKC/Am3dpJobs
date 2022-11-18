import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './PostingCandidates.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'


function PostingCandidates({ files, setFiles, removeFile }) {

  const [ActiveVar,SetActiveVar] = useState(false)
  const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [image, setImage] = useState();
    const [url, setUrl] = useState();

    

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


  const validateForm = () => {
    const {Name,CompanyIndustry,CompanyHQ,CompanyUID,RecruiterName,RecruiterNumber,JobDescription,JobTitle, Background, CandidateType, InterviewMode, JobFunction, JobMode,JoiningTime, MonthlySalary, Skill,TypeWork} = form
    const newErrors = {}
    // console.log("name", Name)

    if (!Name || Name === "") 
        newErrors.Name = "Please enter the valid Name"
    if (!CompanyIndustry || CompanyIndustry === "") 
        newErrors.CompanyIndustry = "Please enter the valid Name"
    if (!CompanyHQ || CompanyHQ === "") 
        newErrors.CompanyHQ = "Please enter the valid Name"
    if (!CompanyUID || CompanyUID === "") 
        newErrors.CompanyUID = "Please enter the valid Name"
    if (!RecruiterName || RecruiterName === "") 
        newErrors.RecruiterName = "Please enter the valid Name"
    if (!RecruiterNumber || RecruiterNumber === "") 
        newErrors.RecruiterNumber = "Please enter the valid Name"
    if (!JobDescription || JobDescription === "") 
        newErrors.JobDescription = "Please enter the valid Name"
    if (!JobTitle || JobTitle === "") 
        newErrors.JobTitle = "Please enter the valid Name"
    if (!JobFunction || JobFunction === "") 
        newErrors.JobFunction = "Please enter the valid Job Function"
    if (!JobMode || JobMode === "") 
        newErrors.JobMode = "Please enter the valid Job Mode"
    if (!Background || Background === " ") 
        newErrors.Background = "Please enter the valid Background"
    if (!CandidateType || CandidateType === "") 
        newErrors.CandidateType = "Please enter the valid Candidate Type"
    if (!InterviewMode || InterviewMode === "") 
        newErrors.InterviewMode = "Please enter the valid Interview Mode"
    
    if (!JoiningTime || JoiningTime === "") 
        newErrors.JoiningTime = "Please enter the valid Joining Time"
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
            CompanyName: form.Name,
            CompanyIndustry: form.CompanyIndustry,
            CompanyHQ: form.CompanyHQ,
            CompanyUID: form.CompanyUID,
            RecruiterName: form.RecruiterName,
            RecruiterNumber: form.RecruiterNumber,
            JobDescription: form.JobDescription,
            JobTitle: form.JobTitle,
            JobMode: form.JobMode,
            JobFunction: form.JobFunction,
            Skills: form.Skills,
            MonthlySalary: form.MonthlySalary,
            CandidateType: form.CandidateType,
            TypeOfWork: form.TypeWork,
            Background: form.Background,
            JoiningTime: form.JoiningTime,
            Interview: form.InterviewMode,
            file: url,


        })
        popdown() 
    } } catch (error) {
        console.error(error)
    }
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
        <div className='opacity-50 absolute left-0 top-80 text-5xl cursor-pointer text-white'>
            <Link to={'/job'} class="bi bi-chevron-left"></Link>
        </div>
            <div className='flex flex-col justify-end items-center font-medium text-sm font-mono absolute mx-auto w-full top-[10rem] opacity-50 text-white'>
                <p>"Finding Candidates does not have to be so difficult. Hire the best relevant Talent without hassle"</p>
            
            </div>
        <h1 className=' flex flex-col justify-end h-[13rem] items-center top-60  text-white font-bold text-4xl leading-[50px]'><span>Create your &nbsp;<span Card className='text-primary'>CARD</span> to find candidates   </span>  </h1>
        <p className='absolute mx-auto w-full md:mx-auto flex flex-col items-center  top-[18.7rem] font-semibold text-white d text-xl leading-[50px]'>Takes only a few clicks!</p>
        <div className=' flex flex-col justify-center  items-center mt-8 '>
          {/* <button className=''   >Post a Job</button> */}
          <button className=' flex flex-col justify-center  items-center p-2 rounded-md bg-yellow-500 text-black font-semibold top-[25rem] sm:top-[23rem] md:top-80' onClick={popup}>Create Job</button>
        </div>

        <div className='product'>
        <div className={`field ${ActiveVar ? 'active': ''}`}>
        <div className='my-auto'>
        <div className="file-card">

        <div className="file-inputs">
            <input type="file" name='file' onChange={handleChange} />
            {selectedFile &&  <img className='z-5 h-[391px] w-[319px] my-12' src={preview} alt=''/> }
            <button className={`${selectedFile ? 'hiddend' : ''}`}>
                <i className='ml-[5.4rem]'>
                    <FontAwesomeIcon icon={faPlus} />
                </i >
                <p className='mt-3 text-2xl text-orange-600 font-bold drop-shadow-lg'>UPLOAD</p>
                
            </button>
        </div>
        </div>
        <button onClick={postDetails} className={`flex text-red-600 rounded-lg p-3 bg-white justify-center mx-auto font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>

        <p className="main">Candidate Picture</p>

        </div>
        <div class="container bg-[#fff] dark:bg-slate-800">
        <div className='d-flex justify-content-between mx-3 cursor-pointer'>
        <header className='text-blue-900 drop-shadow-lg font-bold mt-2 text-lg'>Post Your Skills</header>
        <a ><i class="fas fa-times close-btn dark:text-white" onClick={popdown}></i></a>
        </div>

        <Form className='overflow-hidden'>
        <form action="#">
            <div class="form first text-[#333] dark:text-white">
                <div class="details personal">
                    <span class="title text-[#333] dark:text-white">Company Info</span>

                    <div class="fields">
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Company name" 
                            required
                            value={form.Name}
                            onChange={e=> setField(`Name`,e.target.value)}
                            isInvalid = {!!errors.Name}
                            />
                            
                            </Form.Group>
                        </div>                       
                        
                        <div class="input-field">
                        <Form.Group>
                            <label>Company Industry</label>
                            <Form.Control type="text" placeholder="Enter the Industry" 
                            required
                            value={form.CompanyIndustry}
                            onChange={e=> setField(`CompanyIndustry`,e.target.value)} 
                            isInvalid = {!!errors.CompanyIndustry}
                            />
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <label>Company HQ</label>
                            <Form.Control type="text" placeholder="Enter the company HQ" 
                            required
                            value={form.CompanyHQ}
                            onChange={e=> setField(`CompanyHQ`,e.target.value)} 
                            isInvalid = {!!errors.CompanyHQ}
                            />
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <label>Company UID</label>
                            <Form.Control type="text" placeholder="Enter the Company UID" 
                            required
                            value={form.CompanyUID}
                            onChange={e=> setField(`CompanyUID`,e.target.value)} 
                            isInvalid= {!!errors.CompanyUID}
                            />
                            
                            </Form.Group>
                        </div>

                        
                        <div class="input-field">
                        <Form.Group>
                            <label>Recruiter name</label>
                            <Form.Control type="text" placeholder="Enter the name" 
                            required
                            value={form.RecruiterName}
                            onChange={e=> setField(`RecruiterName`,e.target.value)} 
                            isInvalid = {!!errors.RecruiterName}
                            />
                            
                            </Form.Group>
                        </div>
                        

                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Recruiter Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter mobile number with Country code" 
                            required
                            value={form.RecruiterNumber}
                            onChange={e=> setField(`RecruiterNumber`,e.target.value)}
                            isInvalid = {!!errors.RecruiterNumber} 
                            />
                            
                            </Form.Group>
                        </div>
                        

                        
                       
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">Job info</span>

                    <div class="fields">
 
                    <div class="input-field">
                        <Form.Group>
                            <label>Job Description</label>
                            <Form.Control type="text" placeholder="Enter the name" 
                            required
                            value={form.JobDescription}
                            onChange={e=> setField(`JobDescription`,e.target.value)} 
                            isInvalid = {!!errors.JobDescription}
                            />
                            
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
                                <option>Operations</option>
                                <option>Sales</option>
                                <option>Customer Service</option>
                            </Form.Select>
                            
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
                            <Form.Label>Job Mode</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobMode}
                            onChange={e=> setField(`JobMode`,e.target.value)}
                            isInvalid = {!!errors.JobMode}
                            >
                                <option disabled selected>Select Mode</option>
                                <option>On-site</option>
                                <option>Remote</option>
                            </Form.Select>
                           
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
                            <Form.Label>Min Monthly Salary(INR)</Form.Label>
                            <Form.Control type="number" placeholder="Enter Salary" 
                            required 
                            value={form.MonthlySalary}
                            onChange={e=> setField(`MonthlySalary`,e.target.value)}
                            isInvalid = {!!errors.MonthlySalary}
                            />
                            
                            </Form.Group>
                        </div>
                    </div>

                    <div class="details ID">
                    <span class="title">Candidate Preferences</span>

                    <div class="fields">
                    <div class="input-field">
                        <Form.Group>
                            <Form.Label>Candidate Status</Form.Label>
                            <Form.Select 
                            required
                            value={form.CandidateType}
                            onChange={e=> setField(`CandidateType`,e.target.value)}
                            isInvalid = {!!errors.CandidateType}
                            >
                                <option disabled selected>Select Status</option>
                                <option>In</option>
                                <option>Out</option>
                              
                            </Form.Select>
                
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                            <Form.Group>
                            <Form.Label>Candidate Type</Form.Label>
                            <Form.Select 
                            required
                            value={form.TypeWork}
                            onChange={e=> setField(`TypeWork`,e.target.value)}
                            isInvalid = {!!errors.TypeWork}
                            >
                                <option disabled selected>Select type</option>
                                <option>Gig</option>
                                <option>Part-Time</option>
                                <option>Full-Time</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Candidate level</Form.Label>
                            <Form.Select 
                            required
                            value={form.Background}
                            onChange={e=> setField(`Background`,e.target.value)}
                            isInvalid = {!!errors.Background}
                            >
                                <option disabled selected>Select Background</option>
                                <option>Fresh</option>
                                <option>Been There</option>
                                <option>Done That</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                    <div class="input-field">
                        <Form.Group>
                        <Form.Label>Interview Time</Form.Label>
                            <Form.Select 
                            required
                            value={form.JoiningTime}
                            onChange={e=> setField(`JoiningTime`,e.target.value)}
                            isInvalid = {!!errors.JoiningTime}
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