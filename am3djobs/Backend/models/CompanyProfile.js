const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    CompanyName: String,
    Location: String,
    RecruiterName: String,
    CompanyIndustry: String,
    CompanyUID: String,  
    RecruiterNumber: Number,
    CompanyLogo: String,
});

const CompanyProfile = mongoose.model("CompanyProfileData", CompanySchema);
module.exports = CompanyProfile;