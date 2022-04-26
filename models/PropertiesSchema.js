const mongoose = require("mongoose");

const PropertiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    coordinates : [],
    desc: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    baths: {
        type: Number,
        required: true,
    },
    kitchen: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },
    tvLaunch: {
        type: Boolean,
        default : 'false'
    },
    balcony: {
        type: Boolean,
        default : 'false'
    },
    furnished: {
        type: Boolean,
        default : 'false'
    },
    area: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
    }],
    features: [{
        type: String,
    }],
    status: {
        type: String,
        required: true,
        enum : ['sell' , 'rent' , 'sold']
    },
    city: {
        type: String,
        default : ''
    },
    owner: {
        type : mongoose.Types.ObjectId,
        ref : 'olxusers',
        required: true
    },
}, {
    timestamps: true
});


const OlxProperties = mongoose.model('OlxProperties', PropertiesSchema);

module.exports = OlxProperties