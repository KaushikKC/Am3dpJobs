import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'


const UserProfile = () => {
  const { loginWithRedirect,user, isAuthenticated, isLoading } = useAuth0();
    const [User, setUser] = useState({})
    let {id} = useParams();
    // console.log(id)
    const getSingleProduct = async () => {
        const {data} = await axios.get(`https://backend.am3dpjobs.com/CandidateProfileUpdate/${id}`)
        setUser(data)
      }
      useEffect(() => {
        getSingleProduct();
      });
  
  // console.log(User.CandidateImg)
      
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [url, setUrl] = useState()

  const [updatedUser, setUpdatedUser] = useState({
    Name: User.CandidateName,
    Location: User.Location,
    Number: User.Number,
    IDNumber: User.IDNumber,
    JobSpecialisation: User.JobSpecialisation,
    Skills: User.Skills,
    Status: User.Status,
    Level: User.Level,
    Role: User.Role,

  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleImgChange = (e) => {
    // setImage(e.target.files[0])
    if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        console.log("selected File:", e.target.files[0])
    // setImage(e.target.files[0])
    // setF('file',e.target.files[0])
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
  

  async function handleSubmit  (event)  {
    event.preventDefault();
    try {
    await axios.put(`https://backend.am3dpjobs.com/UpdateCandidateProfile/${id}`, {
                CandidateName: updatedUser.name,     
                Location: updatedUser.city,
                Number: updatedUser.number,
                IDNumber: updatedUser.idNumber,
                JobSpecialisation: updatedUser.jobspecialisation,
                Skills: updatedUser.skills,
                Status: updatedUser.status,
                Level: updatedUser.level,
                Role: updatedUser.role, 
                file: url,

            })
            
    } catch (error){
      console.log(error);
    }
    setEditMode(false);
    // save the updatedUser to a database or API
   
  };

  const back = () => {
    setEditMode(false);
  }

  if (editMode) {
    return (
      <div>
        <div>
        <div className='flex justify-center items-center mx-auto'>
              <form className='ml-20 mt-10' controlId="pic">
                <label>Change Profile Picture</label>
                <div className={`h-28 mb-6 ${selectedFile ? 'hiddend' : ''}`}>
                <i class="text-[7.2rem] bi bi-person-square ml-6 mb-6"></i>
                </div>
                {selectedFile &&  <img className='z-5 w-[200px] h-[200px] mt-3' src={preview} alt=''/> }
                <input onChange={handleImgChange} className='rounded-lg p-4 profilePic mt-2 dark:text-white' type="file" name="" id="" />
                <button onClick={postDetails} className={`flex justify-center mx-auto px-3 py-2 bg-red-500 text-white rounded-lg font-bold ${selectedFile ? '' : 'hiddend'}`}>UPLOAD IT </button>
                
              </form>
              </div>
        </div>
      <form onSubmit={handleSubmit} className='p-4 grid grid-cols-4 gap-4 items-center'>
        <label htmlFor="name">Name:</label>
        <input className='' type="text" id="name" name="name" onChange={handleChange} value={updatedUser.Name} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" onChange={handleChange} value={updatedUser.Location} />

        <label htmlFor="numbetr">Number:</label>
        <input type="number" id="number" name="number" onChange={handleChange} value={updatedUser.Number} />

        <label htmlFor="idnumber">ID Number:</label>
        <input type="number" id="idnumber" name="idnumber" onChange={handleChange} value={updatedUser.IDNumber} />

        <label htmlFor="jobspecialisation">Job Specialisation:</label>
        <input type="text" id="jobspecialisation" name="jobspecialisation" onChange={handleChange} value={updatedUser.JobSpecialisation} />

        <label htmlFor="skills">Skills:</label>
        <input type="text" id="skills" name="skills" onChange={handleChange} value={updatedUser.Skills} />

        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" onChange={handleChange} value={updatedUser.Status} />

        <label htmlFor="level">Level:</label>
        <input type="text" id="level" name="level" onChange={handleChange} value={updatedUser.Level} />

        <label htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" onChange={handleChange} value={updatedUser.Level} />


        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" onChange={handleChange} value={updatedUser.bio} />
        <div>
        <button className='px-4 py-2 ml-4 w-[100px] mt-6 bg-black text-white rounded-3xl font-semibold' type="submit" onClick={handleSubmit} >Save</button>
        <button className='px-4 py-2 ml-4 w-[100px] mt-6 bg-black text-white rounded-3xl font-semibold' onClick={back}>Back</button>
        </div>
        
      </form>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-center mt-5'>
      <img className='w-[100px]' src={User.CandidateImg} alt="" />
      </div>
      

    <div className='ml-5 grid grid-cols-4 gap-4 items-center font-semibold'>
      <p>Name: {User.CandidateName}</p>
      <p>Location: {User.Location}</p>
      <p>Number: {User.Number}</p>
      <p>ID Number: {User.IDNumber}</p>
      <p>Job Specialisation: {User.JobSpecialisation}</p>
      <p>Skills: {User.Skills}</p>
      <p>Status: {User.Status}</p>
      <p>Level: {User.Level}</p>
      <p>Role: {User.Role}</p>
      </div>
      <div>

      
      <button className='ml-5 px-4 py-2 mt-6 bg-black text-white rounded-3xl font-semibold' type="button" onClick={() => setEditMode(true)}>
        Edit
      </button>
      <Link to='/' className='ml-5 px-4 py-2 mt-6 bg-black text-white rounded-3xl font-semibold'>
        Back
      </Link>
      </div>
    
    </div>
  );
};

export default UserProfile;
