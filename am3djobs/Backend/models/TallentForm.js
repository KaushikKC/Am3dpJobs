const mongoose = require('mongoose');

const TallentFormSchema = new mongoose.Schema({
    User_id: String,
    CompanyName: String,
    Location: String,
    CompanyIndustry: String,
    CompanyUID: String,
    RecruiterName: String,
    RecruiterNumber: Number,
    RecruiterEmail: String,
    Signal: String,
    JobDescription: String,
    JobTitle: String,
    JobMode: String,
    JobLocation: String,
    JobIndustry: String,
    JobFunction: String,
    Skills: String,
    JobStartDate: String,
    MonthlySalary: String,
    JobCompany: String,
    JobCompanyName: String,
    JobCompanyLogo: String,
    JobLevel: String,
    JobType: String,
    JobWeeklyHr: String,
    InterviewMode: String,
    InterviewAvailability: String,
    InterviewContact: String,
    RecruiterPicture: String,
});

const TallentForm = mongoose.model("TallentFormData", TallentFormSchema);
module.exports = TallentForm;