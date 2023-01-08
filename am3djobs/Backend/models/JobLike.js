const mongoose = require('mongoose');

const JobLikeSchema = new mongoose.Schema({
    Job_id : String,
    User_id : String,
    CandidateName: String,
    CandidateLocation: String,
    CandidateNumber: Number,
    CandidateUID: Number,
    CandidateCompany: String,
    CandidateIndustry: String,
    CandidateEmail : String,
    Signal: String,
    CandidateSummary: String,
    CandidateSkills: String,
    PrefferedJobTitle: String,
    PrefferedCompanyTitle: String,
    PrefferedIndustry: String,
    PrefferedFunction: String,
    PrefferedJobLevel: String,
    PrefferedJobMode: String,
    PrefferedLocation: String,
    PrefferedJobType: String,
    WeeklyAvailability: String,
    PrefferedDate: String,
    PrefferedMonthlySalary: Number,
    PrefferedCompany: String,
    InterviewMode: String,  
    InterviewAvailability: String,
    InterviewContact: String,  
    CandidatePicture: String,
});

const JobLike = mongoose.model("JobLikeData", JobLikeSchema);
module.exports = JobLike;