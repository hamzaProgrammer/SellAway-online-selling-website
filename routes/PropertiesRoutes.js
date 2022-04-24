const express = require('express');
const router = express.Router();
const {
    addNewProperty,
    uploadPropertyImages,
    updatePropertyInfo,
    getSinglePropertyImages,
    getSinglePropertyDetails,
    getSinglePropertyDesc,
    getSinglePropertyFeatures,
    getAllRelatedProperties,
    getSinglePropertyCoord,
    getSinglePropertyOwner,
    getRecentProperties,
    getCityProperties,
    getAllSavedPropertiesOfUser,
    saveUnSavePropertiesOfUser,
    saveUnSaveSearchOfUser,
    getSaveSearchesOfUser,
    getAllListedPropertiesofUser,
    getAllSoldPropertiesofUser,
    deletePropertyofUser,
    getAllFilteredProperties,
} = require('../controllers/PropertiesController')
const multer = require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './propertiesImages/')
        //cb(null, '../products')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage,
});


// add new property details
router.post('/api/properties/addNew',  addNewProperty)

// check Type of images
router.put('/api/properties/UploadImages/:id', upload.array('propertyImage', 12) , uploadPropertyImages)

// update info of ad
router.put('/api/properties/updateAdInfo/:id/:owner' , updatePropertyInfo)

// getting images of a property
router.get('/api/properties/getSinglePropertyImages/:id' , getSinglePropertyImages)

// getting details of a property
router.get('/api/properties/getSinglePropertyDetails/:id' , getSinglePropertyDetails)

// getting description of a property
router.get('/api/properties/getSinglePropertyDes/:id' , getSinglePropertyDesc)

// getting main features of a property
router.get('/api/properties/getSinglePropertyFeatures/:id' , getSinglePropertyFeatures)

// getting coordinates of a property
router.get('/api/properties/getSinglePropertyCoords/:id' , getSinglePropertyCoord)

// getting related properties
router.get('/api/properties/getSRelatedProperties/:id' , getAllRelatedProperties)

// getting owner of property details
router.get('/api/properties/getOwnerDetails/:id' , getSinglePropertyOwner)

// getting new properties using pagination
router.get('/api/properties/getPaginatedProperties' , getRecentProperties)

// getting  properties of user recently visited city
router.get('/api/properties/getCityProperties/:city' , getCityProperties)

// save properties for later of a user
router.put('/api/properties/savePropertyForLater/:userId/:propId' , saveUnSavePropertiesOfUser)

// getting all saved properties of a user
router.get('/api/properties/getAllSavedProperties/:id' , getAllSavedPropertiesOfUser)

// saving search of a user
router.put('/api/properties/saveSearch/:userId' , saveUnSaveSearchOfUser)

// getting all saved searches of a user
router.get('/api/properties/getSavedSearchesOfUser/:userId' , getSaveSearchesOfUser)

// getting all listed properties of a user
router.get('/api/properties/getAllListedPropertiesOfUser/:userId' , getAllListedPropertiesofUser)

// getting all sold properties of a user
router.get('/api/properties/getAllSoldPropertiesOfUser/:userId' , getAllSoldPropertiesofUser)

// delete property of a user
router.delete('/api/properties/deletePropertyOfUser/:userId/:propId' , deletePropertyofUser)

// get all properties with filters
router.get('/api/properties/getFilteredProperties' , getAllFilteredProperties)

module.exports = router;