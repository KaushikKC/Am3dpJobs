const mongoose = require('mongoose');

const JobFormSchema = new mongoose.Schema({
    CandidateName: String,
    Location: String,
    Number: Number,
    IDNumber: Number,
    JobSpecialisation: String,
    Skills: String,
    CandidateType: String,
    Background: String,
    PrefferedLocation: String,
    Companies: String,
    JobFunction: String,
    TypeOfWork: String,
    JobMode: String,
    MonthlySalary: Number,
    Interview: String,  
    JoiningTime: String,  
    CandidatePicture: String,
});

const JobForm = mongoose.model("JobFormData", JobFormSchema);
module.exports = JobForm;