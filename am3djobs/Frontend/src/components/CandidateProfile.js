
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
                CandidateName: form.Name,     
                Location: form.City,
                Number: form.Number,
                IDNumber: form.IDNumber,
                JobSpecialisation: form.Specialisation,
                Skills: form.Skills,
                Status: form.Status,
                Level: form.Level,
                Role: form.Role, 
                file: url,

            })
            navigate('/')  
          } } catch (error) {
            console.error(error)
      
        }
        }

    const validateForm = () => {
      const {Name,City,Number,IDNumber,Specialisation,Skills,Status,Role,Level,Industry,CompanyUID,RecruiterNumber} = form
      const newErrors = {}
      // console.log("name", Name)
  
      if (!Name || Name === "") 
          newErrors.Name = "Please enter the valid Name"
      if (!City || City === " ") 
          newErrors.City = "Please enter the valid Location"
      if (!Number || Number === "") 
          newErrors.Number = "Please enter the valid Mobile Number"
      if (!IDNumber || IDNumber === "") 
          newErrors.IDNumber = "Please enter the valid Mobile Number"
      if (!Specialisation || Specialisation === "") 
          newErrors.Specialisation = "Please enter the valid ID-Number"
      if (!Skills || Skills === "") 
          newErrors.Skills = "Please enter the valid Job Specialisation"
      if (!Status || Status === "") 
          newErrors.Status = "Please enter the valid Job Specialisation"
      if (!Level || Level === "") 
          newErrors.Level = "Please enter the valid Job Specialisation"
      if (!Role || Role === "") 
          newErrors.Role = "Please enter the valid Job Specialisation"


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
                <Form.Label>Candidate Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={form?.name}
                  onChange={(e) => setField(`Name`,e.target.value)}
                  isInvalid = {!!errors.Name}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="C"  className='mb-3'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={form?.City}
                  onChange={(e) => setField(`City`,e.target.value)}
                  isInvalid = {!!errors.City}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password" className='mb-3'>
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={form?.Number}
                  onChange={(e) => setField(`Number`,e.target.value)}
                  isInvalid = {!!errors.Number}
                ></Form.Control>
              </Form.Group>
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>ID number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={form?.IDNumber}
                  onChange={(e) => setField(`IDNumber`,e.target.value)}
                  isInvalid = {!!errors.IDNumber}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Specialisation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Specialisation"
                  value={form?.Specialisation}
                  onChange={(e) => setField(`Specialisation`,e.target.value)}
                  isInvalid = {!!errors.Specialisation}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Key Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Skill"
                  value={form?.Skills}
                  onChange={(e) => setField(`Skills`,e.target.value)}
                  isInvalid = {!!errors.Skills}
                ></Form.Control>
              </Form.Group>
              
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Status"
                  value={form?.Status}
                  onChange={(e) => setField(`Status`,e.target.value)}
                  isInvalid = {!!errors.Status}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Role"
                  value={form?.Role}
                  onChange={(e) => setField(`Role`,e.target.value)}
                  isInvalid = {!!errors.Role}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Level</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Level"
                  value={form?.Level}
                  onChange={(e) => setField(`Level`,e.target.value)}
                  isInvalid = {!!errors.Level}
                ></Form.Control>
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