import React, { useState } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import './CompanyProfile.css'

function CompanyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const userUpdate = useSelector((state) => state.userUpdate);
  // const { loading, error, success } = userUpdate;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/");
  //   } else {
  //     setName(userInfo.name);
  //     setEmail(userInfo.email);
  //     setPic(userInfo.pic);
  //   }
  // }, [history, userInfo]);

  // const postDetails = (pics) => {
  //   setPicMessage(null);
    // if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //   // const data = new FormData();
      // data.append("file", pics);
      // data.append("upload_preset", "notezipper");
      // data.append("cloud_name", "piyushproj");
      // fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
      //   method: "post",
      //   body: data,
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setPic(data.url.toString());
      //     console.log(pic);
      //   })
      //   .catch((err) => {
      //     console.log(err);
        // });
    // } else {
    //   return setPicMessage("Please Select an Image");
    // }
  // };

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
              <div className='w-[45%] pt-24 h-full pl-14'>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Location"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Domain</Form.Label>
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
              <Form.Group controlId="pic">
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

export default CompanyProfile;