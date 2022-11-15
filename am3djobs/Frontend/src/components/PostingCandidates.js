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
    const {Name, Background, CandidateType, InterviewMode, JobFunction, JobMode, JobSpecialisation, JoiningTime, MonthlySalary, Number,RoleType,Skill, Companies,TypeWork} = form
    const newErrors = {}
    // console.log("name", Name)

    if (!Name || Name === "") 
        newErrors.Name = "Please enter the valid Name"
    if (!Background || Background === " ") 
        newErrors.Background = "Please enter the valid Background"
    if (!CandidateType || CandidateType === "") 
        newErrors.CandidateType = "Please enter the valid Candidate Type"
    if (!InterviewMode || InterviewMode === "") 
        newErrors.InterviewMode = "Please enter the valid Interview Mode"
    if (!JobFunction || JobFunction === "") 
        newErrors.JobFunction = "Please enter the valid Job Function"
    if (!JobMode || JobMode === "") 
        newErrors.JobMode = "Please enter the valid Job Mode"
    if (!JobSpecialisation || JobSpecialisation === "") 
        newErrors.JobSpecialisation = "Please enter the valid Job Specialisation"
    if (!JoiningTime || JoiningTime === "") 
        newErrors.JoiningTime = "Please enter the valid Joining Time"
    if (!MonthlySalary || MonthlySalary === "") 
        newErrors.MonthlySalary = "Please enter the valid Monthy Salary"
    if (!Number || Number === "") 
        newErrors.Number = "Please enter the valid Mobile Number"
    if (!RoleType || RoleType === "") 
        newErrors.RoleType = "Please enter the valid Role Type"
    if (!Skill || Skill === "") 
        newErrors.Skill = "Please enter the valid Skill"
    if (!Companies || Companies === "") 
        newErrors.Title = "Please enter the valid Companies"
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
            console.log(form)
            // dispatch(registerUser(form))
      
        await axios.post("https://backend.am3dpjobs.com/TallentUpload", {
            CandidateName: form.Name,
            Title: form.Title,
            Location: form.Location,
            Number: form.Number,
            CandidateType: form.CandidateType,
            Background: form.Background,
            TypeOfWork: form.TypeWork,
            MonthlySalary: form.MonthlySalary,
            JobSpecialisation: form.JobSpecialisation,
            RoleType: form.RoleType,
            JobMode: form.JobMode,
            JobFunction: form.JobFunction,
            JoiningTime: form.JoiningTime,
            Interview: form.Interview,
            Company : form.Companies,
            JobSkills: form.JobSkills,
            file: url,


        })
    } popdown() } catch (error) {
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
          <button className=' flex flex-col justify-center  items-center p-2 rounded-md bg-yellow-500 text-black font-semibold top-[25rem] sm:top-[23rem] md:top-80' onClick={popup}>Post a Skills</button>
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
                    <span class="title text-[#333] dark:text-white">Company Details</span>

                    <div class="fields">
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Candidate Name</Form.Label>
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
                            <label>Location</label>
                            <Form.Control type="text" placeholder="Enter your City and PinCode" 
                            required
                            value={form.Loaction}
                            onChange={e=> setField(`Location`,e.target.value)} />
                            
                            </Form.Group>
                        </div>
                        

                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter mobile number with Country code" 
                            required
                            value={form.Number}
                            onChange={e=> setField(`Number`,e.target.value)}
                            isInvalid = {!!errors.Number} 
                            />
                            
                            </Form.Group>
                        </div>
                        

                        
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
                           =
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                            <Form.Group>
                            <Form.Label>Type of work</Form.Label>
                            <Form.Select 
                            required
                            value={form.TypeWork}
                            onChange={e=> setField(`TypeWork`,e.target.value)}
                            isInvalid = {!!errors.TypeWork}
                            >
                                <option disabled selected>Select work</option>
                                <option>Gig</option>
                                <option>Part-Time</option>
                                <option>Full-Time</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Background</Form.Label>
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
                        
                    </div>
                </div>

                <div class="details ID">
                    {/* <span class="title">Identity Details</span> */}

                    <div class="fields">
                    

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

                        

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Job Specialisation</Form.Label>
                            <Form.Select 
                            required
                            value={form.JobSpecialisation}
                            onChange={e=> setField(`JobSpecialisation`,e.target.value)}
                            isInvalid = {!!errors.JobSpecialisation}
                            >
                                <option disabled selected>Select specialisation</option>
                                <option>Design</option>
                                <option>CAD</option>
                                <option>Manufacturing</option>
                            </Form.Select>
                           
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                        <Form.Label>Prefered Role</Form.Label>
                            <Form.Select 
                            required
                            value={form.RoleType}
                            onChange={e=> setField(`RoleType`,e.target.value)}
                            isInvalid = {!!errors.RoleType}
                            >
                                <option disabled selected>Select type</option>
                                <option>Intern</option>
                                <option>Contributor</option>
                                <option>Team Lead</option>
                                <option>Manager</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Prefered Mode</Form.Label>
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
                        <Form.Label>Availability</Form.Label>
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
                            <Form.Label>Preferred Companies</Form.Label>
                            <Form.Select 
                            required
                            value={form.Companies}
                            onChange={e=> setField(`Companies`,e.target.value)}
                            isInvalid = {!!errors.Companies}
                            >
                                <option disabled selected>Select Job</option>
                                <option>HP</option>
                                <option>IBM</option>
                                <option>Apple</option>
                                
                            </Form.Select>
                            
                            </Form.Group>
                        </div>

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Interview</Form.Label>
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
                            <Form.Label>Key Skills / Capabilities</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Skills Required" required
                            value={form.Skill}
                            onChange={e=> setField(`Skill`,e.target.value)}
                            isInvalid = {!!errors.Skill}
                            />
                            
                            </Form.Group>
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