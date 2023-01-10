const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    User_id: String,
    CandidateUID: Number,
    CandidateName: String,
    CandidateLocation: String,
    CandidateCompany: String,
    CandidateIndustry: String,
    CandidateNumber: Number,
    CandidateEmail: String,
    Signal: String,
    CandidateImg: String,
});

const CandidateProfile = mongoose.model("CandidateProfileData", CandidateSchema);
module.exports = CandidateProfile;