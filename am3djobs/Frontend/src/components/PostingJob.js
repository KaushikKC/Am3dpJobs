import React, { useEffect, useState } from 'react'
import './PostingJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import {useDispatch} from 'react-redux'
import axios from 'axios'
import {redirectToAuth} from 'supertokens-auth-react'
import Form from 'react-bootstrap/Form';
import Board from "../Images/NoticeBoard.png"
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
// import jobs from '../Images/Jobs.jpg'


function PostingJob({ files, setFiles, removeFile }) {
    const {isAuthenticated,user } = useAuth0();
    const [ActiveVar,SetActiveVar] = useState(false)
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [image, setImage] = useState();
    const [selectedFile, setSelectedFile] = useState()
   
    const [url, setUrl] = useState();
    const [candidate, setCandidate] = useState({});
    const [createCard, setCreateCard] = useState(true);
    const [mode, setMode] = useState();
    const [type, setType] = useState();

    const getSingleProduct = async () => {
    // const dataCompany = await axios.get(`https://backend.am3dpjobs.com/CompanyProfileRead/${user?.sub}`);  // http://localhost:3002/CompanyProfileRead/${user?.sub}
    const {data} = await axios.get(`https://backend.am3dpjobs.com/CandidateProfileRead/${user?.sub}`);
    const once = await axios.get(`https://backend.am3dpjobs.com/jobReadonce/${user?.sub}`)
    if(Object.keys(once.data).length !== 0){
        setCreateCard(false)
    } else if(Object.keys(once.data).length === 0){
        setCreateCard(true)
    }
    setCandidate(data)    
}

    useEffect(() => {
        getSingleProduct();
      });
    const [preview, setPreview] = useState()
    //   console.log(candidate)
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
    // console.log(createCard)
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        console.log("preview:",selectedFile);

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
        console.log("selected File:", e.target.files[0])
    // setImage(e.target.files[0])
    setField('file',e.target.files[0])
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

  const SignUp = async () => {
    redirectToAuth();
}

  const validateForm = () => {
    const {InterviewAvailability,PrefferedLocation,PrefferedIndustry,PrefferedCompanyTitle,PrefferedFunction,PrefferedJobLevel,PrefferedJobMode,PrefferedJobType,WeeklyAvailability,PrefferedDate,PrefferedMonthlySalary,PrefferedCompanyType,InterviewContact,CandidateSummary,CandidateSkills,PrefferedJobTitle, InterviewMode, } = form
    const newErrors = {}
    // console.log("name", Name)

    // if (!Name || Name === "") 
    //     newErrors.Name = "Please enter the valid Name"
    // if (!Location || Location === " ") 
    //     newErrors.Location = "Please enter the valid Location"
    // if (!Number || Number === "") 
    //     newErrors.Number = "Please enter the valid Mobile Number"
    // if (!IDNumber || IDNumber === "") 
    //     newErrors.IDNumber = "Please enter the valid ID-Number"
    // if (!JobSpecialisation || JobSpecialisation === "") 
    //     newErrors.JobSpecialisation = "Please enter the valid Job Specialisation"
    // if (!Skill || Skill === "") 
    //     newErrors.Skill = "Please enter the valid Skill"
    // if (!CandidateType || CandidateType === "") 
    //     newErrors.CandidateType = "Please enter the valid Candidate Type"
    // if (!Background || Background === " ") 
    //     newErrors.Background = "Please enter the valid Background"
    // if (!PrefferedLocation || PrefferedLocation === "") 
    //     newErrors.PrefferedLocation = "Please enter the valid Location"
    if (!CandidateSummary || CandidateSummary === "") 
        newErrors.CandidateSummary = "Please enter the valid Company"
    if (!CandidateSkills || CandidateSkills === "") 
        newErrors.CandidateSkills = "Please enter the valid Job Function"
    if (!PrefferedJobTitle || PrefferedJobTitle === "") 
        newErrors.PrefferedJobTitle = "Please enter the valid Type Work"  
    if (!PrefferedCompanyTitle || PrefferedCompanyTitle === "") 
        newErrors.PrefferedCompanyTitle = "Please enter the valid Job Mode" 
       if (!PrefferedIndustry || PrefferedIndustry === "") 
        newErrors.PrefferedIndustry = "Please enter the valid Job Mode" 
       if (!PrefferedFunction || PrefferedFunction === "") 
        newErrors.PrefferedFunction = "Please enter the valid Job Mode" 
        if(!PrefferedJobLevel || PrefferedJobLevel === "") 
        newErrors.PrefferedJobLevel = "Please enter the valid Job Mode"
       if (!PrefferedJobMode || PrefferedJobMode === "") 
        newErrors.PrefferedJobMode = "Please enter the valid Job Mode"
        if(!PrefferedJobType || PrefferedJobType === "") 
        newErrors.PrefferedJobType = "Please enter the valid Job Mode"
    //    if (!WeeklyAvailability || WeeklyAvailability === "") 
    //     newErrors.WeeklyAvailability = "Please enter the valid Job Mode"
        if (!PrefferedDate || PrefferedDate === "") 
        newErrors.PrefferedDate = "Please enter the valid Job Mode"
        if (!PrefferedCompanyType || PrefferedCompanyType === "") 
        newErrors.PrefferedCompanyType = "Please enter the valid Job Mode"
        if (!InterviewContact || InterviewContact === "") 
        newErrors.InterviewContact = "Please enter the valid Job Mode"
        
    if (!PrefferedMonthlySalary || PrefferedMonthlySalary === "") 
        newErrors.PrefferedMonthlySalary = "Please enter the valid Monthy Salary"
    if (!InterviewMode || InterviewMode === "") 
        newErrors.InterviewMode = "Please enter the valid Interview Mode"
    if (!InterviewAvailability || InterviewAvailability === "") 
        newErrors.InterviewAvailability = "Please enter the valid Joining Time"
    
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
        
            await axios.post("https://backend.am3dpjobs.com/JobUpload", {
                User_id: candidate.User_id,
                CandidateName: candidate.CandidateName,     
                CandidateLocation: candidate.CandidateLocation,
                CandidateNumber: candidate.CandidateNumber,
                CandidateCompany: candidate.CandidateCompany,
                CandidateUID: candidate.CandidateUID,
                CandidateIndustry : candidate.CandidateIndustry,
                CandidateEmail: candidate.CandidateEmail,
                Signal : candidate.Signal,
                CandidateSummary: form.CandidateSummary,
                CandidateSkills: form.CandidateSkills,
                PrefferedJobTitle: form.PrefferedJobTitle,
                PrefferedCompanyTitle: form.PrefferedCompanyTitle,
                PrefferedLocation: form.PrefferedLocation,
                PrefferedIndustry: form.PrefferedIndustry,
                PrefferedFunction: form.PrefferedFunction,
                PrefferedJobLevel: form.PrefferedJobLevel,
                PrefferedJobMode : form.PrefferedJobMode,
                PrefferedJobType: form.PrefferedJobType,
                WeeklyAvailability: form.WeeklyAvailability,
                PrefferedDate: form.PrefferedDate,
                PrefferedMonthlySalary: form.PrefferedMonthlySalary,
                PrefferedCompanyType: form.PrefferedCompanyType,
                InterviewMode: form.InterviewMode,
                InterviewAvailability: form.InterviewAvailability,
                InterviewContact: form.InterviewContact, 
                file: candidate.CandidateImg,

            })
            popdown()
    } } catch (error) {
        console.error(error)
    }
    
   
    
  }

  const handleMode = (e) => {
    setField(`PrefferedJobMode`,e.target.value)
    setMode(e.target.value)
}

    const handleType = (e) => {
        setField(`PrefferedJobType`,e.target.value)
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
            console.log("Successfully sent")
        })
        .catch((err) => {
            // inform the user
            console.error(err)
            removeFile(file.name)
          });
        }

    // console.log(form.file)
  
  return (
    <div className='bg-cover w-full h-[39rem] bg-no-repeat background overlay'>
        <div className='opacity-50 text-white absolute left-0 top-80 text-5xl z-20 cursor-pointer'>
            <Link to={'/'} class="bi bi-chevron-left"></Link>
        </div>
        {/* <img className='h-48 absolute left-64' src={Board} alt="" /> */}
        {/* <img className='absolute right-0 top-36' src="https://www.freepnglogos.com/uploads/businessman-png/business-png-businessman-png-image-private-32.png" alt="" /> */}
        {/* <div className="h-[30rem] bg-[url('https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000')] dark:bg-[url('https://media.istockphoto.com/photos/the-black-and-silver-are-light-gray-with-white-the-gradient-is-the-picture-id1332097112?b=1&k=20&m=1332097112&s=170667a&w=0&h=D_26WN2nM805ssHpKsrqFe9mE63_j2bNefybNF0wOLw=')] bg-cover"> */}
        <div className='h-[39rem]'>
        <h1 className='absolute text-center top-[15rem] flex flex-col items-center mx-auto w-full font-bold text-white drop-shadow-lg d text-3xl leading-[40px]'>
            The Resume is Dead. 
What you did does not matter.. <br />
What you want to do, does!
            </h1>
        <h1 className={`${candidate?.User_id && createCard ? '' : 'hiddend' } absolute opacity mx-auto w-full md:mx-auto flex flex-col  md:top-[19.5rem] sm:top-[22rem] top-[24rem] sm:font-medium lg:font-semibold text-blue-400 italic text-md leading-[50px]`}><span className='mx-auto'>Create your &nbsp;CARD to apply for jobs  </span>  </h1>
        <p className={`${candidate?.User_id && createCard  ? '' : 'hiddend' } absolute opacity mx-auto w-full md:mx-auto flex flex-col items-center  md:top-[21rem] sm:top-[24rem] top-[26rem] lg:font-semibold text-slate-300 italic text-md leading-[50px]`}>Takes only a few clicks!</p>
        <div className='mx-auto w-full flex flex-col items-center '>
          {/* <button className=''   >Post a Job</button> */}
          <button className={`${candidate?.User_id && createCard ? '' : 'hiddend' } absolute mx-auto flex flex-col items-center justify-center p-2 rounded-md  text-[#fff] bg-sky-500 dark:bg-emerald-500 dark:text-black font-bold top-[28.5rem] sm:top-[27rem] md:top-[24rem]`} onClick={popup}>Create a Card</button>
        </div>
        
        {/* <div className='opacity-50 z-20 text-white absolute right-0 top-80 text-5xl cursor-pointer'>
            <Link to={'/talent'} class="bi bi-chevron-right"></Link>
        </div> */}
        
        <div className={`product ${isAuthenticated ? 'hiddend' : ''}`}>
        <div className={`field drop-shadow-md ${ActiveVar ? 'active' : ''}`}>
            <button className='font-bold text-xl px-3 py-2 bg-blue-500 rounded-lg text-white' onClick={SignUp}>Sign up to Create a card</button>
            <a className='absolute top-16 right-5 text-xl cursor-pointer'><i class="fas fa-times close-btn dark:text-white" onClick={popdown}></i></a>

        </div>
        </div>

        <div className={`product ${isAuthenticated ? '' : 'hiddend'}`}>
        <div className={`field drop-shadow-md ${ActiveVar ? 'active': ''}`}>
        <div className=' my-auto'>
        <div className="file-card">

        <div className="file-inputs">
            
            {/* <input onChange={handleChange} type="file" name='file'  />
            {selectedFile &&  <img className='z-5' src={preview} alt=''/> }
            <button className={`${selectedFile ? 'hiddend' : ''}`}>
                <i className='ml-[5.4rem]'>
                    <FontAwesomeIcon icon={faPlus} />
                </i>
                <p className='mt-3 text-2xl text-orange-600 font-bold drop-shadow-lg'>UPLOAD</p>
            </button> */}
            <img className='w-[500px]' src={candidate?.CandidateImg} alt="" />
        </div>
        </div>
        <button onClick={postDetails} className={`flex justify-center mx-auto font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>

        <p className="text-blue-900 drop-shadow-lg font-bold mt-2 text-lg">Candidate Picture</p>
        </div>
        {/* <div className=' absolute left-[30rem] w-[60%]'> */}
        <div class=" container bg-[#fff] dark:bg-slate-800 ">
        <div className='d-flex justify-content-between mx-3 cursor-pointer'>
        <header className='font-bold text-blue-600 text-xl drop-shadow-lg'>Candidate Card</header>
        <a ><i class="fas fa-times close-btn dark:text-white" onClick={popdown}></i></a>
        </div>
        <Form className='overflow-hidden'>
        <form action="#" className='bg-[#fff] dark:bg-slate-800 'enctype="multipart/form-data" >
            <div class="form first dark:bg-slate-800">
                <div class="details personal dark:bg-slate-800 ">
                    <span class="title text-[#333] font-bold dark:text-white">Candidate Info</span>

                    <div class=" grid grid-cols-4 gap-4">
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Name:</h3>
                            <p>{candidate.CandidateName}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Location:</h3>
                            <p>{candidate.CandidateLocation}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Number:</h3>
                            <p>{candidate.CandidateNumber}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate UID:</h3>
                            <p>{candidate.CandidateUID}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Company:</h3>
                            <p>{candidate.CandidateCompany}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Industry:</h3>
                            <p>{candidate.CandidateIndustry}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Candidate Email:</h3>
                            <p>{candidate.CandidateEmail}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-2'>Signal:</h3>
                            <p>{candidate.Signal}</p>
                        </div>
            
                        
                        {/* <div class="input-field text-[#333] dark:text-white">
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
                            <Form.Label>Job Title</Form.Label>
                            <Form.Select 
                            required
                            value={form.Title}
                            onChange={e=> setField(`Title`,e.target.value)}
                            isInvalid = {!!errors.Title}
                            >
                                <option disabled selected>Select Job</option>
                                <option>Mechanical Engineer</option>
                                <option>Design Engineer</option>
                                <option>Project Engineer</option>
                                <option>Male</option>
                                <option>Intern / Fresher</option>
                                <option>AM Consultant</option>
                                <option>Application Engineer</option>
                                <option>Print Manager</option>
                                <option>R&D / Research</option>
                                <option>Electronics Engineer</option>
                                <option>Center Manager</option>
                                <option>Materials Specialist</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        

                        
                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <label>City</label>
                            <Form.Control type="text" placeholder="Enter your City and PinCode" 
                            required
                            value={form.Location}
                            onChange={e=> setField(`Location`,e.target.value)} />
                            
                            </Form.Group>
                        </div>
                        

                        
                        <div class="input-field text-[#333] dark:text-white">
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

                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>ID Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter mobile number with Country code" 
                            required
                            value={form.IDNumber}
                            onChange={e=> setField(`IDNumber`,e.target.value)}
                            isInvalid = {!!errors.IDNumber} 
                            />
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Specialisation</Form.Label>
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

                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Job Skills / Capabilities</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Skills Required" required
                            value={form.Skill}
                            onChange={e=> setField(`Skill`,e.target.value)}
                            isInvalid = {!!errors.Skill}
                            />
                            
                            </Form.Group>
                        </div>

                        
                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Current Status</Form.Label>
                            <Form.Select 
                            required
                            value={form.CandidateType}
                            onChange={e=> setField(`CandidateType`,e.target.value)}
                            isInvalid = {!!errors.CandidateType}
                            >
                                <option disabled selected>Select Type</option>
                                <option>In</option>
                                <option>Out</option>
                              
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Current Level</Form.Label>
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
                        </div> */}
                        
                        
                        
                    </div>
                </div>

                <div class="details ID dark:bg-slate-800">
                    <span class="title">Job Prefrences</span>

                    <div class="fields">

                    <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <label>Candidate Summary</label>
                            <Form.Control as="textarea" type="text" placeholder="Enter the name" 
                            required
                            value={form.CandidateSummary}
                            onChange={e=> setField(`CandidateSummary`,e.target.value)} 
                            isInvalid = {!!errors.CandidateSummary}
                            />
                            </Form.Group>
                        </div>

                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Candidate Skills</Form.Label>
                            <Form.Control 
                            required
                            type='text'
                            value={form.CandidateSkills}
                            onChange={e=> setField(`CandidateSkills`,e.target.value)}
                            isInvalid = {!!errors.CandidateSkills}
                            />
                            
                            </Form.Group>
                        </div>
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Company Title</Form.Label>
                            <Form.Control 
                            required
                            type='text'
                            value={form.PrefferedCompanyTitle}
                            onChange={e=> setField(`PrefferedCompanyTitle`,e.target.value)}
                            isInvalid = {!!errors.PrefferedCompanyTitle}
                            />
                            
                            </Form.Group>
                        </div>
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Job Title</Form.Label>
                            <Form.Control 
                            required
                            type='text'
                            value={form.PrefferedJobTitle}
                            onChange={e=> setField(`PrefferedJobTitle`,e.target.value)}
                            isInvalid = {!!errors.PrefferedJobTitle}
                            />
                            
                            </Form.Group>
                        </div>

                        

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Industry</Form.Label>
                            <Form.Select 
                            required
                            type='text'
                            value={form.PrefferedIndustry}
                            onChange={e=> setField(`PrefferedIndustry`,e.target.value)}
                            isInvalid = {!!errors.PrefferedIndustry}
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
                    


                    <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Preferred Function</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedFunction}
                            onChange={e=> setField(`PrefferedFunction`,e.target.value)}
                            isInvalid = {!!errors.PrefferedFunction}
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
                    <div class="input-field text-[#333] dark:text-white">
                            <Form.Group>
                            <Form.Label>Preferred Job Level</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedJobLevel}
                            onChange={e=> setField(`PrefferedJobLevel`,e.target.value)}
                            isInvalid = {!!errors.PrefferedJobLevel}
                            >
                                <option disabled selected>Select Level</option>
                                <option>Intern</option>
                                <option>Sole Contributor</option>
                                <option>Team Leader</option>
                                <option>Manager</option>
                                <option >Executive</option>
                            </Form.Select>
                           
                            </Form.Group>
                        </div>
                        
                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Preferred Mode</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedJobMode}
                            onChange={e=> handleMode(e) }
                            isInvalid = {!!errors.PrefferedJobMode}
                            >
                                <option disabled selected>Select Mode</option>
                                <option>On-site</option>
                                <option>Remote</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        {
                            (mode === 'On-site') && (
                                <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Location</Form.Label>
                            <Form.Control 
                            // required
                            placeholder='Enter Location'
                            type='text'
                            
                            value={form.PrefferedLocation}
                            onChange={e=> setField(`PrefferedLocation`,e.target.value)}
                            // isInvalid = {!!errors.PrefferedLocation}
                            />
                            
                            </Form.Group>
                        </div>
                            )
                        }

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Job Type</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedJobType}
                            onChange={e=> handleType(e) }
                            isInvalid = {!!errors.PrefferedJobType}
                            >
                                <option disabled selected>Select Type</option>
                                <option>Freelance</option>
                                <option>Exclusive</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>
                        
                        {
                            (type === 'Freelance') && (
                                <div class="input-field">
                                <Form.Group>
                                    <Form.Label>Weekly Availability</Form.Label>
                                    <Form.Control 
                                    // required
                                    placeholder='Enter Availability'
                                    type='number'
                                    value={form.WeeklyAvailability}
                                    onChange={e=> setField(`WeeklyAvailability`,e.target.value)}
                                    // isInvalid = {!!errors.WeeklyAvailability}
                                    />
                                    
                                    </Form.Group>
                                </div> 
                            )
                        }
                        

                        

                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Date</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedDate}
                            onChange={e=> setField(`PrefferedDate`,e.target.value)}
                            isInvalid = {!!errors.PrefferedDate}
                            >
                                <option disabled selected>Select Time</option>
                                <option>Immediate</option>
                                <option>Later</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>

                        <div class="input-field text-[#333] dark:text-white">
                        <Form.Group>
                            <Form.Label>Preferred Monthly Salary(INR)</Form.Label>
                            <Form.Control type="number" placeholder="Enter Salary" 
                            required 
                            value={form.PrefferedMonthlySalary}
                            onChange={e=> setField(`PrefferedMonthlySalary`,e.target.value)}
                            isInvalid = {!!errors.PrefferedMonthlySalary}
                            />
                            
                            </Form.Group>
                        </div>
                        
                        <div class="input-field">
                        <Form.Group>
                            <Form.Label>Preferred Company Type</Form.Label>
                            <Form.Select 
                            required
                            value={form.PrefferedCompanyType}
                            onChange={e=> setField(`PrefferedCompanyType`,e.target.value)}
                            isInvalid = {!!errors.PrefferedCompanyType}
                            >
                                <option disabled selected>Select Company</option>
                                <option>Startup</option>
                                <option>SME</option>
                                <option>Enterprise</option>
                            </Form.Select>
                            
                            </Form.Group>
                        </div>

                        <div class="input-field text-[#333] dark:text-white ">
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

                        <div class="input-field text-[#333] dark:text-white">
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
                            <Form.Label>InterviewContact</Form.Label>
                            <Form.Control type="text" placeholder="Enter Contact" 
                            required 
                            value={form.InterviewContact}
                            onChange={e=> setField(`InterviewContact`,e.target.value)}
                            isInvalid = {!!errors.InterviewContact}
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

export default PostingJob;