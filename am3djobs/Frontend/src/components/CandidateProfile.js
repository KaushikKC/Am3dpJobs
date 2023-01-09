
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import './CompanyProfile.css'
import { useNavigate } from 'react-router-dom';

function CandidateProfile({userprofile}) {
  const navigate = useNavigate();
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [form, setForm] = useState()
  const [errors, setErrors] = useState({})
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
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

              await axios.post("https://backend.am3dpjobs.com/CandidateProfile", {
                User_id: userprofile.sub,
                CandidateUID: form.CandidateUID,
                CandidateName: form.CandidateName,     
                CandidateLocation: form.CandidateLocation,
                CandidateNumber: form.CandidateNumber,
                CandidateCompany: form.CandidateCompany,
                CandidateIndustry: form.CandidateIndustry,
                CandidateEmail: form.CandidateEmail,
                Signal: form.Signal,
                file: url,

            })
            navigate('/')  
          } } catch (error) {
            console.error(error)
      
        }
        }

    const validateForm = () => {
      const {Name,City,Number,IDNumber,Specialisation,Skills,Signal,Role,Level,Industry,CompanyUID,RecruiterNumber} = form
      const newErrors = {}
      // console.log("name", Name)
  
      // if (!Name || Name === "") 
      //     newErrors.Name = "Please enter the valid Name"
      // if (!City || City === " ") 
      //     newErrors.City = "Please enter the valid Location"
      // if (!Number || Number === "") 
      //     newErrors.Number = "Please enter the valid Mobile Number"
      // if (!IDNumber || IDNumber === "") 
      //     newErrors.IDNumber = "Please enter the valid Mobile Number"
      // if (!Specialisation || Specialisation === "") 
      //     newErrors.Specialisation = "Please enter the valid ID-Number"
      // if (!Skills || Skills === "") 
      //     newErrors.Skills = "Please enter the valid Job Specialisation"
      // if (!Signal || Signal === "") 
      //     newErrors.Signal = "Please enter the valid Job Specialisation"
      // if (!Level || Level === "") 
      //     newErrors.Level = "Please enter the valid Job Specialisation"
      // if (!Role || Role === "") 
      //     newErrors.Role = "Please enter the valid Job Specialisation"


      return newErrors
  }

  const submitHandler = (e) => {
    e.preventDefault();

    // dispatch(updateProfile({ name, email, password, pic }));
  };
  return (
    <div>
         <Row className="profileContainer">
          <Col md={6} className="w-full">
            <Form className='flex' onSubmit={submitHandler}>
              {/* {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Candidate UID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={form?.CandidateUID}
                  onChange={(e) => setField(`CandidateUID`,e.target.value)}
                  isInvalid = {!!errors.CandidateUID}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="Company"  className='mb-3'>
                <Form.Label>Candidate Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={form?.CandidateCompany}
                  onChange={(e) => setField(`CandidateCompany`,e.target.value)}
                  isInvalid = {!!errors.CandidateCompany}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="Industry"  className='mb-3'>
                <Form.Label>Candidate Industry</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Enter Industry"
                  value={form?.CandidateIndustry}
                  onChange={(e) => setField(`CandidateIndustry`,e.target.value)}
                  isInvalid = {!!errors.CandidateIndustry}
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
              
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Candidate Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mail"
                  value={form?.CandidateEmail}
                  onChange={(e) => setField(`CandidateEmail`,e.target.value)}
                  isInvalid = {!!errors.CandidateEmail}
                ></Form.Control>
              </Form.Group>
              
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Candidate Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={form?.CandidateName}
                  onChange={(e) => setField(`CandidateName`,e.target.value)}
                  isInvalid = {!!errors.CandidateName}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="C"  className='mb-3'>
                <Form.Label>Candidate Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={form?.CandidateLocation}
                  onChange={(e) => setField(`CandidateLocation`,e.target.value)}
                  isInvalid = {!!errors.CandidateLocation}
                ></Form.Control>
              </Form.Group>
              
              
              <Form.Group controlId="password" className='mb-3'>
                <Form.Label>Candidate Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={form?.CandidateNumber}
                  onChange={(e) => setField(`CandidateNumber`,e.target.value)}
                  isInvalid = {!!errors.CandidateNumber}
                ></Form.Control>
              </Form.Group>
              
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Signal</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Enter Status"
                  value={form?.Signal}
                  onChange={(e) => setField(`Signal`,e.target.value)}
                  isInvalid = {!!errors.Signal}
                >
                  <option disabled selected>Select Signal</option>
                  <option >Available</option>
                  <option >Not Available</option>
                </Form.Select>
              </Form.Group>
              
              </div>
            
              {/* {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )} */}
              <div className='flex justify-center items-center mx-auto'>
              <Form.Group className='ml-20 mt-10' controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <div className={`h-28 mb-6 ${selectedFile ? 'hiddend' : ''}`}>
                <i class="text-[7.2rem] bi bi-person-square ml-6 mb-6"></i>
                </div>
                {selectedFile &&  <img className='z-5 w-[200px] h-[200px] mt-3' src={preview} alt=''/> }
                <input onChange={handleChange} className='rounded-lg p-4 profilePic mt-2 dark:text-white' type="file" name="" id="" />
                <button onClick={postDetails} className={`flex justify-center mx-auto px-3 py-2 bg-red-500 text-white rounded-lg font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>
                
              </Form.Group>
              </div>
               
            </Form>
            <button onClick={handleSubmit} className='mt-4 px-4 py-2 bg-yellow-400 rounded-lg font-bold hover:bg-yellow-600 ml-14 text-black hover:text-white' type="submit" >
                Update
              </button>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src='' alt='' className="profilePic" />
        
          </Col>
        </Row> 
    </div>
  )
}

export default CandidateProfile