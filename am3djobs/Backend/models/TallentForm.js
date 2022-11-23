const mongoose = require('mongoose');

const JobFormSchema = new mongoose.Schema({
    CompanyName: String,
    CompanyIndustry: String,
    CompanyHQ: String,
    CompanyUID: String,
    RecruiterName: String,
    RecruiterNumber: Number,
    JobDescription: String,
    JobTitle: String,
    JobMode: String,
    JobFunction: String,
    Skills: String,
    MonthlySalary: String,
    CandidateType: String,
    TypeOfWork: String,
    Background : String,
    JoiningTime: String,
    Interview: String,
    CompanyLogo: String,
});

const TallentForm = mongoose.model("TallentFormData", JobFormSchema);
module.exports = TallentForm;