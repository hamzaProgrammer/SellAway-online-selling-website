const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    listedProperties: [{
        type : mongoose.Types.ObjectId,
        ref : 'olxproperties',
    }],
    soldProperties: [{
        type : mongoose.Types.ObjectId,
        ref : 'olxproperties',
    }],
    savedProperties: [{
        type : mongoose.Types.ObjectId,
        ref : 'olxproperties',
    }],
    savedSearches: [{
        type: String,
    }],
    profilePic: {
        type: String,
        default : ''
    },
    address: {
        type: String,
        default : ''
    },
    phoneNo: {
        type: String,
        default : ''
    },
    otpCode : {
        type : Number,
        default : ''
    },
    codeSentTime : {
        type : Date,
        default : null
    }
}, {
    timestamps: true
});


const OlxUsers = mongoose.model('OlxUsers', UserSchema);

module.exports = OlxUsers