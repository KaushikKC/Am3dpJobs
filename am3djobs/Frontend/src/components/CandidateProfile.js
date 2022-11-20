
import React, { useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import './CompanyProfile.css'

function CandidateProfile() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="C"  className='mb-3'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password" className='mb-3'>
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>ID number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Specialisation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Specialisation"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Key Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Skill"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Status"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Role"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className='mb-3'>
                <Form.Label>Current Level</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Level"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              
              
              </div>
              {/* {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )} */}
              <div className='flex justify-center items-center mx-auto'>
              <Form.Group className='ml-20 mt-10' controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <div className='h-28'>
                <i class="text-[7.2rem] bi bi-person-square ml-6"></i>
                </div>
                
                <input className='rounded-lg p-4 profilePic mt-6 dark:text-white' type="file" name="" id="" />
                
                
              </Form.Group>
              </div>
               
            </Form>
            <button className='mt-4 px-4 py-2 bg-yellow-400 rounded-lg font-bold hover:bg-yellow-600 ml-14 text-black hover:text-white' type="submit" >
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