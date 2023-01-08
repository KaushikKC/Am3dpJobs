const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    User_id: String,
    CompanyName: String,
    Location: String,
    RecruiterName: String,
    CompanyIndustry: String,
    CompanyUID: String,  
    RecruiterNumber: Number,
    RecruiterEmail: String,
    Signal: String,
    RecruiterPicture: String,
});

const CompanyProfile = mongoose.model("CompanyProfileData", CompanySchema);
module.exports = CompanyProfile;