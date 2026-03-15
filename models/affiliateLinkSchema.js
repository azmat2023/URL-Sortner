const mongoose = require('mongoose');


const affiliateLinkSchema = new mongoose.Schema({


    // link details 

    title: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,

    },
    shortUrl: {
        type: String,
        required: true
    },
    refParam: {
        type: String
    },


    // Owner

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    //stats

    totalClicks: {
        type: Number,
        default: 0
    },
    uniqueClicks: {
        type: Number, default: 0
    },
    isActive: { type: Boolean, default: true }


},{timestamps:true});

module.exports = mongoose.model('AffiliateLink',affiliateLinkSchema);