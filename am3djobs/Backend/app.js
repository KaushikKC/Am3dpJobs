// const { connect } = require('./db')
// eslint-disable-next-line no-unused-vars
// const JobUpload = require('./middeware/upload');
const bodyParser = require("body-parser")
const multer = require("multer");
// const path = require('path')
const JobFormModel = require('./models/JobForm')
const JobLikeModel = require('./models/JobLike')
const TallentFormModel = require('./models/TallentForm')
const CandidateProfileModel = require('./models/CandidateProfile')
const CompanyProfileModel = require('./models/CompanyProfile')
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const fs = require("fs");
const https = require("https");
const { initSocketServer } = require("./lib");
const { Server } = require("socket.io");
const { totalRoomsRunning, allRooms } = require("./lib");

// let db;
const mongoose = require('mongoose');
// const JobForm = require('./models/form');
const uri = "mongodb+srv://Am3dpJobs:Pondicherry123@cluster0.0kyoubg.mongodb.net/?retryWrites=true&w=majority"

// let dbConnection
// const upload = multer({ storage: multer.memoryStorage() });
 async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch(err) {
    console.log(err);
  }
}

const db = mongoose.connection;

const storage = multer.diskStorage({
  destination:"./uploads/",
  filename: function(req, file, cb){
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName)
  }
});



app.use(express.json())
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((err,req,res,next) => {
    res.status(500).send("Internet error: " + err.message);
})



app.get('/', (req,res) => {
  res.status(200).send('<h1>Hi</h1>')
})

// app.get('/JobRead/:id', (req,res) => {
//   console.log(req.params.id)
// })

app.get('/JobRead/:id', (req,res) => {
  JobFormModel.findById(req.params.id) 
     .then(result => {
      res.send(result)
     })
     .catch(err => {
      console.log(err)
     }) 
})

app.get('/TallentRead/:id', (req,res) => {
  TallentFormModel.findById(req.params.id) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  }) 
})

app.get('/CompanyProfileUpdate/:id', (req,res) => {
  CompanyProfileModel.findById(req.params.id) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)

  }) 
})

app.get('/CandidateProfileUpdate/:id', (req,res) => {
  CandidateProfileModel.findById(req.params.id) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)

  }) 
})

app.get('/JobRead', (req,res) => {
  JobFormModel.find({}, (err,result) => {
    if(err) {
      res.send(err)
    }
    res.send(result)
  })
})

app.get('/JobReadonce/:userid', (req,res) => {
  JobFormModel.findOne({User_id: req.params.userid}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  }) 
})
// app.get('/JobReadonce/:userid', (req,res) => {
//   JobFormModel.find({User_id: req.params.userid}) 
//   .then(result => {
//    res.send(result)
//   })
//   .catch(err => {
//    console.log(err)
//   }) 
// })

app.get('/TallentReadonce/:userid', (req,res) => {
  TallentFormModel.find({User_id: req.params.userid}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  }) 
})

app.get('/CompanyProfileRead/:userid', (req,res) => {
  CompanyProfileModel.findOne({User_id: req.params.userid}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  }) 
})

app.get('/CandidateProfileRead/:userid', (req,res) => {
  CandidateProfileModel.findOne({User_id: req.params.userid}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  }) 
})

app.get('/CompanyProfileRead', (req,res) => {
  CompanyProfileModel.find({}, (err,result) => {
    if(err) {
      res.send(err)
    }
    res.send(result)
  })
})

app.get('/CandidateProfileRead', (req,res) => {
  CandidateProfileModel.find({}, (err,result) => {
    if(err) {
      res.send(err)
    }
    res.send(result)
  })
})

app.get('/TallentRead', (req,res) => {
  TallentFormModel.find({}, (err,result) => {
    if(err) {
      res.send(err)
    }
    res.send(result)
  })
})

app.post("/likedJobs", async (req, res) => {
  const LikedJobForm = new JobLikeModel({
    Job_id: req.body.Job_id,
    User_id: req.body.User_id,
    CandidateName: req.body.CandidateName,
    CandidateLocation: req.body.CandidateLocation,
    CandidateNumber: req.body.CandidateNumber,
    CandidateCompany: req.body.CandidateCompany,
    CandidateUID: req.body.CandidateUID,
    CandidateIndustry: req.body.CandidateIndustry,
    CandidateEmail : req.body.CandidateEmail,
    Signal : req.body.Signal,
    CandidateSummary: req.body.CandidateSummary,
    CandidateSkills : req.body.CandidateSkills,
    PrefferedJobTitle : req.body.PrefferedJobTitle,
    PrefferedCompanyTitle : req.body.PrefferedCompanyTitle,
    PrefferedLocation: req.body.PrefferedLocation,
    PrefferedIndustry : req.body.PrefferedIndustry,
    PrefferedFunction : req.body.PrefferedFunction,
    PrefferedJobLevel : req.body.PrefferedJobLevel,
    PrefferedJobMode : req.body.PrefferedJobMode,
    PrefferedJobType : req.body.PrefferedJobType,
    WeeklyAvailability: req.body.WeeklyAvailability,
    PrefferedDate: req.body.PrefferedDate,
    PrefferedMonthlySalary: req.body.PrefferedMonthlySalary,
    PrefferedCompanyType: req.body.PrefferedCompanyType,
    InterviewMode: req.body.InterviewMode,
    InterviewAvailability: req.body.InterviewAvailability,
    InterviewContact: req.body.InterviewContact, 
    CandidatePicture : req.body.file,
    
    })
    try{
      await LikedJobForm.save();
      res.send("inserted data");
    } catch (err) {
      console.log(err)
    }
  })

app.post("/CompanyProfile",async (req, res) => {
  const CompanyProfile = new CompanyProfileModel({
    User_id: req.body.User_id,
    CompanyName: req.body.CompanyName,
    Location : req.body.Location,
    RecruiterName : req.body.RecruiterName,
    CompanyIndustry: req.body.Industry,
    CompanyUID : req.body.CompanyUID,
    RecruiterNumber : req.body.RecruiterNumber,
    RecruiterEmail: req.body.RecruiterEmail,
    Signal: req.body.Signal,
    RecruiterPicture: req.body.file,
  })

  
  try{
    await CompanyProfile.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err)
  }
})

app.put("/UpdateCompanyProfile/:id",async (req, res) => {
  try {
    var id = req.params.id;
    var options = { new: true};
    const result = await CompanyProfileModel.findByIdAndUpdate({ _id: id},
      {$set:{CompanyName: req.body.CompanyName,
        Location : req.body.Location,
        Number : req.body.Number,
        RecruiterName : req.body.RecruiterName,
        CompanyIndustry: req.body.CompanyIndustry,
        CompanyUID : req.body.CompanyUID,
        RecruiterNumber : req.body.RecruiterNumber,
        RecruiterEmail: req.body.RecruiterEmail,
        Signal: req.body.Signal,
        CompanyLogo: req.body.file,}}, options);
    result.save();
    res.send(result) 
  } catch(err){
    console.log(err);
  }
  
})

app.put("/UpdateCandidateProfile/:id",async (req, res) => {
  try {
    var id = req.params.id;
    var options = { new: true};
    const result = await CandidateProfileModel.findByIdAndUpdate({ _id: id},
      {$set:{CandidateName: req.body.CandidateName,
        CandidateLocation : req.body.CandidateLocation,
        CandidateNumber : req.body.CandidateNumber,
        CandidateUID: req.body.CandidateUID,
        CandidateCompany : req.body.CandidateCompany,
        CandidateIndustry: req.body.CandidateIndustry,
        CandidateEmail: req.body.CandidateEmail,
        Signal: req.body.Signal,
        CandidateImg: req.body.file,}}, options);
    result.save();
    res.send(result) 
  } catch(err){
    console.log(err);
  }
  
})

app.post("/CandidateProfile",async (req, res) => {
  const CandidateProfile = new CandidateProfileModel({
    User_id: req.body.User_id,
    CandidateUID: req.body.CandidateUID,
    CandidateName : req.body.CandidateName,
    CandidateLocation : req.body.CandidateLocation,
    CandidateCompany: req.body.CandidateCompany,
    CandidateIndustry: req.body.CandidateIndustry,
    CandidateNumber : req.body.CandidateNumber,
    CandidateEmail: req.body.CandidateEmail,
    Signal: req.body.Signal,
    CandidateImg: req.body.file,
  })

  
  try{
    await CandidateProfile.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err)
  }
})


app.post("/JobUpload", async (req, res) => {
  const JobForm = new JobFormModel({
    User_id: req.body.User_id,
    CandidateName: req.body.CandidateName,
    CandidateLocation: req.body.CandidateLocation,
    CandidateNumber: req.body.CandidateNumber,
    CandidateCompany: req.body.CandidateCompany,
    CandidateUID: req.body.CandidateUID,
    CandidateIndustry: req.body.CandidateIndustry,
    CandidateEmail : req.body.CandidateEmail,
    Signal : req.body.Signal,
    CandidateSummary: req.body.CandidateSummary,
    CandidateSkills : req.body.CandidateSkills,
    PrefferedJobTitle : req.body.PrefferedJobTitle,
    PrefferedCompanyTitle : req.body.PrefferedCompanyTitle,
    PrefferedLocation: req.body.PrefferedLocation,
    PrefferedIndustry : req.body.PrefferedIndustry,
    PrefferedFunction : req.body.PrefferedFunction,
    PrefferedJobLevel : req.body.PrefferedJobLevel,
    PrefferedJobMode : req.body.PrefferedJobMode,
    PrefferedJobType : req.body.PrefferedJobType,
    WeeklyAvailability: req.body.WeeklyAvailability,
    PrefferedDate: req.body.PrefferedDate,
    PrefferedMonthlySalary: req.body.PrefferedMonthlySalary,
    PrefferedCompanyType: req.body.PrefferedCompanyType,
    InterviewMode: req.body.InterviewMode,
    InterviewAvailability: req.body.InterviewAvailability,
    InterviewContact: req.body.InterviewContact, 
    CandidatePicture : req.body.file,
    
    })

  
    try{
      await JobForm.save();
      res.send("inserted data");
    } catch (err) {
      console.log(err)
    }
  
})

app.post("/TallentUpload", async (req, res) => {
  const TallentForm = new TallentFormModel({
    User_id: req.body.User_id,
    CompanyName: req.body.CompanyName,   
    CompanyIndustry : req.body.CompanyIndustry,
    Location: req.body.Location,
    CompanyUID : req.body.CompanyUID,
    RecruiterName : req.body.RecruiterName,
    RecruiterNumber : req.body.RecruiterNumber,
    RecruiterEmail: req.body.RecruiterEmail,
    Signal: req.body.Signal, 
    JobDescription: req.body.JobDescription,
    JobTitle : req.body.JobTitle,
    JobMode : req.body.JobMode,
    JobLocation: req.body.JobLocation,
    JobIndustry: req.body.JobIndustry,
    JobFunction : req.body.JobFunction,
    Skills : req.body.Skills,
    JobStartDate: req.body.JobStartDate,
    MonthlySalary: req.body.MonthlySalary,
    JobCompany: req.body.JobCompany,
    JobCompanyName: req.body.JobCompanyName,
    JobLevel: req.body.JobLevel,
    JobType: req.body.JobType,
    JobWeeklyHr: req.body.JobWeeklyHour,
    InterviewMode: req.body.InterviewMode,
    InterviewAvailability: req.body.InterviewAvailability,
    InterviewContact: req.body.InterviewContact,
    CompanyLogo: req.body.file,
    })

    try{
      await TallentForm.save();
      res.send("inserted data");
    } catch (err) {
      console.log(err)
    }
})

app.get("/filteredJobs",(req, res) => {
  JobFormModel.find({PrefferedJobMode: req.query.jobmode, PrefferedJobType: req.query.typeofwork}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  })
})

app.get("/filteredTallent",async(req, res) => {
  TallentFormModel.find({JobMode: req.query.jobmode, JobType: req.query.typeofwork}) 
  .then(result => {
   res.send(result)
  })
  .catch(err => {
   console.log(err)
  })
})

const options = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.crt"),
};


connect();  
  
// app.listen() // "3002, () => console.log(`API server listening on port ${3002}`)"
    
var server = https.createServer(options, app)
.listen(3002, function (req, res) {
  console.log("Server started at port 3002");
});

const io = new Server(server, {});
initSocketServer(io);



