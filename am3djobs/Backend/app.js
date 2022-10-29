// const { connect } = require('./db')
// eslint-disable-next-line no-unused-vars
const JobFormModel = require('./models/JobForm')
const TallentFormModel = require('./models/TallentForm')
const express = require('express');
const cors = require('cors');
const app = express();
// let db;
const mongoose = require('mongoose');
// const JobForm = require('./models/form');
const uri = "mongodb+srv://Kaushik:Kaushik17@cluster0.34e5lj3.mongodb.net/Forms?retryWrites=true&w=majority"

// let dbConnection

 async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch(err) {
    console.log(err);
  }
}

const db = mongoose.connection;

app.use(express.json())
app.use(cors());

app.use((err,req,res,next) => {
    res.status(500).send("Internet error: " + err.message);
})

app.get('/', (req,res) => {
  res.status(200).send('<h1>Hi</h1>')
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

app.post("/JobUpload", async (req, res) => {
  
	
  // const CompanyName = req.body.CompanyName
  // const Title = req.body.Title
  // const Location = req.body.Location
  // const Number = req.body.Number
  // const CandidateType = req.body.CandidateType
  // const Background = req.body.Background
  // const TypeOfWork = req.body.TypeOfWork
  // const MonthlySalary = req.body.MonthlySalary
  // const JobSpecialisation = req.body.JobSpecialisation
  // const RoleType = req.body.RoleType
  // const JobMode = req.body.JobMode
  // const JobFunction = req.body.JobFunction
  // const JoiningTime = req.body.JoiningTime
  // const Interview = req.body.Interview
  // const JobSkills = req.body.JobSkills

  // eslint-disable-next-line no-use-before-define
  const JobForm = new JobFormModel({
    CompanyName: req.body.CompanyName,
    Title : req.body.Title,
    Location : req.body.Location,
    Number : req.body.Number,
    CandidateType : req.body.CandidateType,
    Background : req.body.Background,
    TypeOfWork : req.body.TypeOfWork,
    MonthlySalary : req.body.MonthlySalary,
    JobSpecialisation : req.body.JobSpecialisation,
    RoleType : req.body.RoleType,
    JobMode : req.body.JobMode,
    JobFunction : req.body.JobFunction,
    JoiningTime : req.body.JoiningTime,
    Interview : req.body.Interview,
    JobSkills : req.body.JobSkills,
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
    CandidateName: req.body.CandidateName,   
    Location : req.body.Location,
    Number : req.body.Number,
    CandidateType : req.body.CandidateType,
    TypeOfWork : req.body.TypeOfWork,
    Background : req.body.Background, 
    MonthlySalary : req.body.MonthlySalary,
    JobSpecialisation : req.body.JobSpecialisation,
    RoleType : req.body.RoleType,
    JobMode : req.body.JobMode,
    JobFunction : req.body.JobFunction,
    JoiningTime : req.body.JoiningTime,
    Companies : req.body.Companies,
    Interview : req.body.Interview,
    JobSkills : req.body.JobSkills,
    })

    try{
      await TallentForm.save();
      res.send("inserted data");
    } catch (err) {
      console.log(err)
    }
})




connect();  
  
app.listen(3002, () => console.log(`API server listening on port ${3002}`))
    
 



