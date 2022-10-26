import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './PostingCandidates.css'


function PostingCandidates({ files, setFiles, removeFile }) {

  const [ActiveVar,SetActiveVar] = useState(false)

  const popup = () => {
    SetActiveVar(true);
  
  }

  const popdown = () => {
    SetActiveVar(false);
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
    axios.post('http://localhost:8080/upload', formData)
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
    <div>
        <h1 className=' text-center d-flex align-items-center justify-content-center mx-4'><span>Get easily &nbsp;<span className='text-primary'>Hired</span> at your comfort </span>  </h1>
        <div className='d-flex justify-content-center mt-3 pt-3 mb-3'>
          <button className='d-flex align-items-center justify-content-center' type="button" class="btn btn-primary" onClick={popup}>Post Your Skills</button>
        </div>

        <div className='product'>
        <div className={`field ${ActiveVar ? 'active': ''}`}>
        <div className='my-auto'>
        <div className="file-card">

        <div className="file-inputs">
            <input type="file" onChange={uploadHandler} />
            <button>
                <i>
                    <FontAwesomeIcon icon={faPlus} />
                </i>
                Upload
            </button>
        </div>
        </div>

        <p className="main">Candidate Picture</p>

        </div>
        <div class="container">
        <header>Post Your Skills</header>

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <i class="close fa-sharp fa-solid fa-xmark"></i>
                    <span class="title">Candidates Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your First and last name" required />
                        </div>

                        <div class="input-field">
                            <label>Location</label>
                            <input type="text" placeholder="Enter your City and PinCode" required />
                        </div>

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number with Country code" required />
                        </div>

                        <div class="input-field">
                            <label>Current Status</label>
                            <select required>
                                <option disabled selected>Select Status</option>
                                <option>In</option>
                                <option>Out</option>
                                
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Background</label>
                            <select required>
                                <option disabled selected>Select Background</option>
                                <option>Fresh</option>
                                <option>Been There</option>
                                <option>Done That</option>
                              
                            </select>
                        </div>

                        <div class="input-field">
                            <label>AM3DP Specialisation</label>
                            <select required>
                                <option disabled selected>Select Specialisation</option>
                                <option>Design</option>
                                <option>CAD</option>
                                <option>Manufacturing</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="details ID">
                    {/* <span class="title">Identity Details</span> */}

                    <div class="fields">
                    <div class="input-field">
                            <label>Type of work</label>
                            <select required>
                                <option disabled selected>Select work</option>
                                <option>Gig</option>
                                <option>Part-Time</option>
                                <option>Full-Time</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Min Salary</label>
                            <input type="number" placeholder="Enter Salary" required />
                        </div>

                        

                        <div class="input-field">
                            <label>Preferred Role</label>
                            <select required>
                                <option disabled selected>Select role</option>
                                <option>Intern</option>
                                <option>Contribution</option>
                                <option>Team Lead</option>
                                <option>Manager</option>
                            </select>
                        </div>

                        <div class="input-field">
                        <label>Preferred Mode</label>
                            <select required>
                                <option disabled selected>Select type</option>
                                <option>On-site</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Function</label>
                            <select required>
                                <option disabled selected>Select Mode</option>
                                <option>Operations</option>
                                <option>Sales</option>
                                <option>Customer Service</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>Availability</label>
                            <select required>
                            <option disabled selected>Select Time</option>
                                <option>Immediate</option>
                                <option>Contributor</option>
                                <option>One Week</option>
                                <option>One Month</option>
                            </select>
                        </div>
                        <div class="input-field">
                        <label>Preferred Companies</label>
                            <input type="text" placeholder="Enter the company name" required />
                        </div>

                        <div class="input-field">
                            <label>Interview</label>
                            <select required>
                                <option disabled selected>Select Mode</option>
                                <option>Face to Face</option>
                                <option>Virtual Video</option>
                                <option >Phone</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>Key Skills / Capabilities</label>
                            <input type="text" placeholder="Enter the your Skills" required />
                        </div>
                    </div>

                    <button onClick={popdown} class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                    </button>
                </div> 
            </div>

            
                        
        </form>
    </div>
        </div>
        </div>
    </div>
  )
}

export default PostingCandidates