const mongoose = require('mongoose');

const JobFormSchema = new mongoose.Schema({
    CompanyName: String,
    Title: String,
    Location: String,
    Number: Number,
    CandidateType: String,
    Background: String,
    TypeOfWork: String,
    MonthlySalary: Number,
    JobSpecialisation: String,
    RoleType: String,
    JobMode: String,
    JobFunction: String,
    JoiningTime: String,
    Interview: String,
    JobSkills: String
});

const JobForm = mongoose.model("JobFormData", JobFormSchema);
module.exports = JobForm;