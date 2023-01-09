// const { connect } = require('./db')
// eslint-disable-next-line no-unused-vars
const JobUpload = require('./middeware/upload');
const bodyParser = require("body-parser")
const multer = require("multer");
const path = require('path')
const JobFormModel = require('./models/JobForm')
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
const uri = "mongodb+srv://Kaushik:Kaushik17@cluster0.34e5lj3.mongodb.net/Forms?retryWrites=true&w=majority"

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

app.get('/JobRead', (req,res) => {
  JobFormModel.find({}, (err,result) => {
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

app.post("/CompanyProfile",async (req, res) => {
  const CompanyProfile = new CompanyProfileModel({
    CompanyName: req.body.CandidateName,
    Location : req.body.Location,
    RecruiterName : req.body.RecruiterName,
    CompanyIndustry: req.body.Industry,
    CompanyUID : req.body.CompanyUID,
    RecruiterNumber : req.body.RecruiterNumber,
    CompanyLogo: req.body.file,
  })

  
  try{
    await CompanyProfile.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err)
  }
})

app.post("/CandidateProfile",async (req, res) => {
  const CandidateProfile = new CandidateProfileModel({
    CandidateName: req.body.CandidateName,
    Location : req.body.Location,
    Number : req.body.Number,
    IDNumber: req.body.IDNumber,
    JobSpecialisation : req.body.JobSpecialisation,
    Skills : req.body.Skills,
    Status : req.body.Status,
    Level : req.body.Level,
    Role : req.body.Role,
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
    CandidateName: req.body.CandidateName,
    Location : req.body.Location,
    Number : req.body.Number,
    IDNumber: req.body.IDNumber,
    JobSpecialisation : req.body.JobSpecialisation,
    Skills : req.body.Skills,
    CandidateType : req.body.CandidateType,
    Background : req.body.Background,
    PrefferedLocation: req.body.PrefferedLocation,
    Companies : req.body.Companies,
    JobFunction : req.body.JobFunction,
    TypeOfWork : req.body.TypeOfWork,
    JobMode : req.body.JobMode,
    MonthlySalary : req.body.MonthlySalary,
    Interview : req.body.Interview,
    JoiningTime : req.body.JoiningTime, 
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
    CompanyName: req.body.CompanyName,   
    CompanyIndustry : req.body.CompanyIndustry,
    CompanyHQ : req.body.CompanyHQ,
    CompanyUID : req.body.CompanyUID,
    RecruiterName : req.body.RecruiterName,
    RecruiterNumber : req.body.RecruiterNumber, 
    JobDescription: req.body.JobDescription,
    JobTitle : req.body.JobTitle,
    JobMode : req.body.JobMode,
    JobFunction : req.body.JobFunction,
    Skills : req.body.Skills,
    MonthlySalary: req.body.MonthlySalary,
    CandidateType : req.body.CandidateType,
    TypeOfWork : req.body.TypeOfWork,
    Background: req.body.Background,
    JoiningTime: req.body.JoiningTime,
    Interview: req.body.Interview,
    CompanyLogo: req.body.file,
    })

    try{
      await TallentForm.save();
      res.send("inserted data");
    } catch (err) {
      console.log(err)
    }
})

const options = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.crt"),
};


connect();  
  
// app.listen(3002, () => console.log(`API server listening on port ${3002}`))
    
var server = https.createServer(options, app)
.listen(3002, function (req, res) {
  console.log("Server started at port 3002");
});

const io = new Server(server, {});
initSocketServer(io);



