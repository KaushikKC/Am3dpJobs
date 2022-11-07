
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
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Current City</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>ID Number</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Domain"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "} 
              <Form.Group controlId="password">
                <Form.Label>Specialisation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Current Status</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Domain"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name">
                <Form.Label>Current Job Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Current Level</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Key Skills</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Preferred City</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Domain"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "} 
              <Form.Group controlId="password">
                <Form.Label>Preferred Company</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Preferred Function</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Domain"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              </div>
              <div className='w-[25%] pt-24 h-full pl-14'>
              <Form.Group controlId="name">
                <Form.Label>Preferred Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Preferred Mode</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Preferred Monthly Salary</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Availability for Interview</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Domain"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "} 
              
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
            <Button className='mt-4 ml-14 text-black' type="submit" >
                Update
              </Button>
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