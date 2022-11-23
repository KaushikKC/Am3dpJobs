import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import './CompanyProfile.css'

function CompanyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState({})
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
      setUrl(data.url1)
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

              await axios.post("http://localhost:3002/CompanyProfile", {
                CandidateName: form.Name,     
                Location: form.City,
                RecruiterName: form.RecruiterName,
                Industry: form.Industry,
                CompanyUID: form.CompanyUID,
                RecruiterNumber: form.RecruiterNumber,
                file: url,

            })

          } } catch (error) {
            console.error(error)
        }
        }

    const validateForm = () => {
      const {Name,City,RecruiterName,Industry,CompanyUID,RecruiterNumber} = form
      const newErrors = {}
      // console.log("name", Name)
  
      if (!Name || Name === "") 
          newErrors.Name = "Please enter the valid Name"
      if (!City || City === " ") 
          newErrors.City = "Please enter the valid Location"
      if (!RecruiterName || RecruiterName === "") 
          newErrors.RecruiterName = "Please enter the valid Mobile Number"
      if (!Industry || Industry === "") 
          newErrors.Industry = "Please enter the valid Mobile Number"
      if (!CompanyUID || CompanyUID === "") 
          newErrors.CompanyUID = "Please enter the valid ID-Number"
      if (!RecruiterNumber || RecruiterNumber === "") 
          newErrors.RecruiterNumber = "Please enter the valid Job Specialisation"
      
      return newErrors
  }
  const submitHandler = (e) => {
    e.preventDefault();

    // dispatch(updateProfile({ name, email, password, pic }));
  };
  return (
    <div className='h-full'>
      <Row className="profileContainer h-full">
          <Col md={6} className="w-full h-full">
            <Form className='flex' onSubmit={submitHandler}>
              {/* {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
              <div className='w-[35%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={form.Name}
                  onChange={(e) => setField(`Name`,e.target.value)}
                  isInvalid = {!!errors.Name}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email" className='mb-3'>
                <Form.Label>HQ City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  value={form.City}
                  onChange={(e) => setField(`City`,e.target.value)}
                  isInvalid = {!!errors.City}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password" className='mb-3'>
                <Form.Label>Recruiter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={form.RecruiterName}
                  onChange={(e) => setField(`RecruiterName`,e.target.value)}
                  isInvalid = {!!errors.RecruiterName}
                  ></Form.Control>
                  </Form.Group>
               
              </div>
              <div className='w-[35%] pt-24 h-full mb-4 pl-14'>
              <Form.Group controlId="email" className='mb-3'>
                <Form.Label>Compnay Industry</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Industry"
                  value={form.Industry}
                  onChange={(e) => setField(`Industry`,e.target.value)}
                  isInvalid = {!!errors.Industry}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Company UID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UID"
                  value={form.CompanyUID}
                  onChange={(e) => setField(`CompanyUID`,e.target.value)}
                  isInvalid = {!!errors.CompanyUID}
                ></Form.Control>
              </Form.Group>
              
              <Form.Group controlId="confirmPassword" className='mb-3'>
                <Form.Label>Recruiter Mobile Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Number"
                  value={form.RecruiterNumber}
                  onChange={(e) => setField(`RecruiterNumber`,e.target.value)}
                  isInvalid = {!!errors.RecruiterNumber}
                ></Form.Control>
              </Form.Group>{" "}
              
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
                <input className='rounded-lg p-4 profilePic mt-2 dark:text-white' type="file" onChange={handleChange} name="" id="" />
                <button onClick={postDetails} className={`flex justify-center mx-auto px-3 py-2 bg-red-500 text-white rounded-lg font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>
                
                
              </Form.Group>
              </div>
               
            </Form>
            <button onClick={handleSubmit} className='mt-4 ml-14 px-3 py-2 bg-blue-500 rounded-lg text-white' type="submit" >
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

export default CompanyProfile;