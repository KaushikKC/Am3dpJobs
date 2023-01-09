const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    CandidateName: String,
    Location: String,
    Number: Number,
    IDNumber: Number,
    JobSpecialisation: String,
    Skills: String,
    Status: String,
    Level: String,
    Role: String,
    CandidateImg: String,
});

const CandidateProfile = mongoose.model("CandidateProfileData", CandidateSchema);
module.exports = CandidateProfile;