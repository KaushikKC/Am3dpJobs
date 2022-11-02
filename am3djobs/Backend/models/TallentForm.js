const mongoose = require('mongoose');

const JobFormSchema = new mongoose.Schema({
    CandidateName: String,
    Location: String,
    Number: Number,
    CandidateType: String,
    TypeOfWork: String,
    Background: String,
    MonthlySalary: Number,
    JobSpecialisation: String,
    RoleType: String,
    JobMode: String,
    JobFunction: String,
    JoiningTime: String,
    Companies: String,
    Interview: String,
    JobSkills: String
});

const TallentForm = mongoose.model("TallentFormData", JobFormSchema);
module.exports = TallentForm;