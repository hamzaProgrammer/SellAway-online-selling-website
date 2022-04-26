const Properties = require('../models/PropertiesSchema')
const Users = require('../models/UserSchema')
const URL = "http://localhost:8080"
// node geo coder
const NodeGeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    apiKey: 'AIzaSyDbvQuvGbCB0ghywwsM2tjlKBIPfXUSpHg', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);
const mongoose = require("mongoose")


// add new property
const addNewProperty = async (req, res) => {
    const {title , address , price , desc , city , features, bedrooms , baths , kitchen , rooms , tvLaunch , balcony , furnished , area , status , owner } = req.body;

    if (!title || !address || !price || !desc || !city || !bedrooms  || !baths || !kitchen || !rooms  || !tvLaunch  || !balcony || !furnished || !area || !status || !owner) {
        return res.json({
            success: false,
            message: "Please Provide All Required Fields"
        });
    } else {
        let isExistUser = await Users.findById(owner)
        if(!isExistUser){
            return res.json({
                success: false,
                message : "Sorry, User Not Found or Not Registered Yet"
            });
        }

        const isExist = await Properties.findOne({
            title: title,
            address : address,
            price : price,
            owner : owner,
            status : status
        })
        if(isExist) {
            if (isExist.length > 0) {
                return res.json({
                    success: false,
                    message : "Property Already Listed, You Should Change  Title or Price or Address to Upload."
                });
            }
        }

        // Using callback
        const result = await geocoder.geocode(address);

        req.body.coordinates = [result[0].latitude , result[0].longitude]
        req.body.city = city.toLowerCase();

        if(tvLaunch === "No"){
            req.body.tvLaunch = false;
        }else if(tvLaunch === "Yes"){
            req.body.tvLaunch = true;
        }

        if(furnished === "No"){
            req.body.furnished = false;
        }else if(furnished === "Yes"){
            req.body.furnished = true;
        }

        if(balcony === "No"){
            req.body.balcony = false;
        }else if(balcony === "Yes"){
            req.body.balcony = true;
        }

        const newProperty = new Properties({
            ...req.body,
        })

        try {
            const newProp = await newProperty.save();

            // pushing new property to user
            await Users.findByIdAndUpdate(owner , {$push : {listedProperties : newProp._id.toString() }} , {new : true})

            return res.status(201).json({
                PropertyId : newProp._id,
                success: true,
                message: 'Details of New Property Ad Listed SuccessFully'
            })
        } catch (error) {
            console.log("Error in addNewProperty and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry for inconvienance, Could Not Post Your Ad now. Try again after some time. Thanks"
            })
        }
    }
}

// check Images type
const uploadPropertyImages = async (req,res) => {
    const {id} = req.params;
    console.log("req.files : ", req.files , req.file)
    console.log("reid : ", id)

    if(!req.files){
        return res.json({
            success: false,
            message: "Please Provide Images of Property Also"
        });
    }

    if(req.files.length < 1){
        return res.json({
            success: false,
            message: "No Images Found"
        });
    }

    for(let i = 0; i !== req.files.length; i++){
        if ((req.files[i].mimetype  !== "image/jpeg" && req.files[i].mimetype  !== "image/jpg" && req.files[i].mimetype  !== "image/webP" && req.files[i].mimetype  !== "image/png")) {
            return res.json({
                success: false,
                message: "All Images Should be of Image Type Only"
            });
        }
    }


    // pushing images
    let isExist = await Properties.findById(id)
    if (!isExist) {
        return res.json({
            success: false,
            message: "Property Does Not Exists"
        });
    }

    isExist.images = []
    for(let i = 0; i !==  req.files.length; i++){
        let lower = URL + "/propertiesImages/" +  req.files[i].filename.toLowerCase();
        isExist.images.push(lower)
    }

    try {
        await Properties.findByIdAndUpdate(id, {$set : {...isExist}} , {new : true})
        return res.json({
            success: true,
            message: 'Property Images Uploaded SuccessFully'
        });
    } catch (error) {
        console.log("Error in uploadPropertyImages and error is : ", error)
        return res.json({
            success: false,
            message: 'Could Not Upload Images of Property'
        });
    }

}

// check Images type
const updateSingleImageProperty = async (req,res) => {
    const {id , index} = req.params;
    console.log("reid : ", id)
    console.log("req.file : ", req.file)

    if ((req.file.mimetype  !== "image/jpeg" && req.file.mimetype  !== "image/jpg" && req.file.mimetype  !== "image/webP" && req.file.mimetype  !== "image/png")) {
        return res.json({
            success: false,
            message: "Images Should be of Image Type Only"
        });
    }


    // pushing images
    let isExist = await Properties.findById(id)
    if (!isExist) {
        return res.json({
            success: false,
            message: "Property Does Not Exists"
        });
    }

        let lower = URL + "/propertiesImages/" +  req.file.filename.toLowerCase();
        isExist.images[index] = lower

    try {
        await Properties.findByIdAndUpdate(id, {$set : {...isExist}} , {new : true})
        return res.json({
            success: true,
            message: 'Property Image Uploaded SuccessFully'
        });
    } catch (error) {
        console.log("Error in updateSingleImageProperty and error is : ", error)
        return res.json({
            success: false,
            message: 'Could Not Upload Images of Property'
        });
    }

}

// adding new image to property
const addNewImageProperty = async (req,res) => {
    const {id , owner} = req.params;
    console.log("req.file : ", req.file)

    if ((req.file.mimetype  !== "image/jpeg" && req.file.mimetype  !== "image/jpg" && req.file.mimetype  !== "image/webP" && req.file.mimetype  !== "image/png")) {
        return res.json({
            success: false,
            message: "Images Should be of Image Type Only"
        });
    }


    // pushing images
    let isExist = await Properties.findById(id)
    if (!isExist) {
        return res.json({
            success: false,
            message: "Property Does Not Exists"
        });
    }

        let lower = URL + "/propertiesImages/" +  req.file.filename.toLowerCase();
        isExist.images.push(lower)

    try {
        await Properties.findByIdAndUpdate(id, {$set : {...isExist}} , {new : true})
        return res.json({
            success: true,
            message: 'Property Image Uploaded SuccessFully'
        });
    } catch (error) {
        console.log("Error in addNewImageProperty and error is : ", error)
        return res.json({
            success: false,
            message: 'Could Not Upload Images of Property'
        });
    }

}

// check Images type
const deleteSingleImageProperty = async (req,res) => {
    const {id , index} = req.params;

    // pushing images
    let isExist = await Properties.findById(id)
    if (!isExist) {
        return res.json({
            success: false,
            message: "Property Does Not Exists"
        });
    }

        let newImagesArray = []
        for(let i = 0; i !== isExist.images.length;  i++){
            if(i != index){
                newImagesArray.push(isExist.images[i])
            }
        }

        isExist.images = newImagesArray;
    try {
        await Properties.findByIdAndUpdate(id, {$set : {...isExist}} , {new : true})
        return res.json({
            success: true,
            message: 'Property Image Uploaded SuccessFully'
        });
    } catch (error) {
        console.log("Error in deleteSingleImageProperty and error is : ", error)
        return res.json({
            success: false,
            message: 'Could Not Upload Images of Property'
        });
    }

}

// update info of property
const updatePropertyInfo = async (req, res) => {
    const {id , owner} = req.params;
    console.log("body : ",req.body)
    if (Object.keys(req.body).length === 0) {
        return res.json({
            success: false,
            message: "No Data Sent for Updating"
        });
    }

    if (!id || !owner) {
        return res.json({
            success: false,
            message: "Owner and Property Id are Required for Updating "
        });
    } else {
        let isExistUser = await Users.findById(owner)
        if(!isExistUser){
            return res.json({
                success: false,
                message : "Sorry, User Not Found"
            });
        }

        let isExist = await Properties.findById({_id : id , owner : owner })
        if(!isExist) {
            return res.json({
                success: false,
                message : "Property Not Found or Does Not Exist."
            });
        }

        try {
            await Properties.findByIdAndUpdate(id, {$set : {...req.body}} , {new : true})

            return res.status(201).json({
                success: true,
                message: 'Property Information Updated SuccessFully'
            })
        } catch (error) {
            console.log("Error in updatePropertyInfo and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry for inconvienance, Could Not Update Your Ad now. Try again after some time. Thanks"
            })
        }
    }
}

// get single property images only
const getSinglePropertyImages = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Images of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                PropertyImages : isExist.images,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyImages and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get single property data
const getSinglePropertyData = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Images of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                SingleProperty : isExist,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyImages and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get single property details only
const getSinglePropertyDetails = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Details of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                Title : isExist.title,
                Price : isExist.price,
                Baths : isExist.baths,
                Bedrooms : isExist.bedrooms,
                Area : isExist.area,
                Address : isExist.address,
                CreatedAt : isExist.createdAt,
                DateOfPosting : isExist.createdAt
            })
        } catch (error) {
            console.log("Error in getSinglePropertyDetails and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get single property description only
const getSinglePropertyDesc = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Description of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                Desc : isExist.desc,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyDesc and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get single property main features only
const getSinglePropertyFeatures = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Features of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                Bedrooms : isExist.bedrooms,
                Baths : isExist.baths,
                Kitchens : isExist.kitchen,
                Rooms : isExist.rooms,
                TvLaunch : isExist.tvLaunch,
                Balcony : isExist.balcony,
                Furnished : isExist.furnished,
                Area : isExist.area,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyFeatures and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get single property main coordinates only
const getSinglePropertyCoord = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Features of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                Coordinates : isExist.coordinates,
                Image : isExist.images,
                Address : isExist.address,
                Title : isExist.title,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyCoord and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// getting all properties related
const getAllRelatedProperties = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Please Provide Id of Property"
        })
    } else {
        const prop = await Properties.findById(id);
        if(!prop){
                return res.json({
                success: false,
                message: "Property Not Found"
            })
        }

        try {
            let allProperties = [];
            let allIds = [];

            // getting same city properties
            const isExist = await Properties.find({city : prop.city, _id : {$ne : id }}, {createdAt : 0 , updatedAt : 0 , __v : 0}).limit(3);
            if(isExist.length > 0){
                for(let i = 0; i !== isExist.length ; i++){
                    allIds.push(isExist[i]._id);
                    allProperties.push(isExist[i]);
                }
            }
            allIds.push(id);

            // getting all other properties of user
            for(let i = 0; i !== allProperties.length; i++){
                let isEx = await Properties.findOne({_id : {$nin : allIds } , owner : prop.owner ,  city : prop.city}, {createdAt : 0 , updatedAt : 0 , __v : 0});
                if(isEx){
                    allProperties.push(isEx);
                    allIds.push(isEx._id)
                }
            }

            // getting all other properties of same city
            for(let i = 0; i !== allProperties.length; i++){
                let isEx = await Properties.findOne({_id : {$nin : allIds } ,  city : prop.city}, {createdAt : 0 , updatedAt : 0 , __v : 0});
                if(isEx){
                    allProperties.push(isEx);
                }
            }

            return res.json({
                RelatedProperties : allProperties,
                success: true,
            });
        } catch (error) {
            console.log("Error in getAllRelatedProperties and error is : ", error)
            return res.json({
                success: false,
                message : "Could Not get Properties"
            });
        }
    }

}

// get owner of Property details
const getSinglePropertyOwner = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "Id is Required for getting Features of Property"
        });
    } else {
        try {
            const isExist = await Properties.findById(id)
            if(!isExist) {
                return res.json({
                    success: false,
                    message : "Property Not Found or Does Not Exist."
                });
            }

            const user = await Users.findById(isExist.owner);
            if(!user) {
                return res.json({
                    success: false,
                    message : "User Not Found or Does Not Exist."
                });
            }

            return res.status(201).json({
                success: true,
                Id : user._id,
                Name : user.name,
                PhoneNo : user.phoneNo,
                ProfileImage : user.profilePic,
            })
        } catch (error) {
            console.log("Error in getSinglePropertyOwner and error is : ", error)
            res.status(504).json({
                success: false,
                message : "Sorry Could Not get Images"
            })
        }
    }
}

// get all recent properties
const getRecentProperties = async (req, res) => {
    try {
        const isExist = await Properties.find({} , {_id : 1 , images : 1 , city : 1 , owner : 1,  title : 1 , address : 1 , createdAt : 1 , price : 1 }).sort({createdAt : -1}).limit(12);

        return res.status(201).json({
            success: true,
            AllProperties : isExist
        })
    } catch (error) {
        console.log("Error in getRecentProperties and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get Recent properties"
        })
    }
}

// get all recent properties of city which user recently visited
const getCityProperties = async (req, res) => {
    const {city} = req.params;
    if(!city){
        return res.status(201).json({
            success: false,
            message : "City Is Required"
        })
    }
    try {
        const isExist = await Properties.find({city : city} , {_id : 1 , images : 1 , owner : 1  , title : 1 , address : 1 , price : 1 , createdAt : 1 }).sort({createdAt : -1}).limit(12);

        return res.status(201).json({
            success: true,
            RelatedProperties : isExist
        })
    } catch (error) {
        console.log("Error in getCityProperties and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get Recent properties"
        })
    }
}

// get all saved properties of a user
const getAllSavedPropertiesOfUser = async (req, res) => {
    const {id} = req.params;

    if(!id){
        return res.status(201).json({
            success: false,
            message : "Id is Required"
        })
    }
    try {
        const isExist = await Users.aggregate([
            {
                $match : {
                    _id: mongoose.Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: 'olxproperties',
                    localField: 'savedProperties',
                    foreignField: '_id',
                    as: 'Property'
                },
            },
            {
                $unwind: "$Property"
            },
            {
                $project: {
                    PropertyData: {
                        PropertyId : "$Property._id",
                        PropTitle : "$Property.title",
                        PropImages : "$Property.images",
                        PropPrice : "$Property.price",
                        PropAddress: "$Property.address",
                        PropCreatedAt: "$Property.createdAt",
                    },
                }
            },
            {
                $group: {
                    allSavedProperties: {
                        $push: "$PropertyData"
                    },
                    _id: {
                    },
                }
            }
        ])

        return res.status(201).json({
            success: true,
            RelatedProperties : isExist
        })
    } catch (error) {
        console.log("Error in getAllSavedPropertiesOfUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get All Saved Later Properties"
        })
    }
}

// saving /unsaving property of a user
const saveUnSavePropertiesOfUser = async (req, res) => {
    const {userId , propId} = req.params;

    if(!userId || !propId){
        return res.status(404).json({
            success: false,
            message : "User Id and Property Id are Required"
        })
    }
    try {
        const isExist = await Properties.findById(propId);
        if(!isExist){
            return res.status(404).json({
                success: false,
                message : "Sorry , Property Not Found"
            })
        }

        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        const isPropExist = await Users.findOne({_id : userId, savedProperties : {$elemMatch : {$eq : propId}} });
        if(isPropExist){
            await Users.findByIdAndUpdate(userId , {$pull : {savedProperties : propId }}, {new : true});
            return res.status(201).json({
                success: true,
                message : "Property Removed from Saved Later"
            })
        }

        let nn = await Users.findByIdAndUpdate(userId , {$push : {savedProperties : propId }}, {new : true});
        console.log("nn : ", nn)
        return res.status(201).json({
            success: true,
            message : "Property Saved For Later"
        })
    } catch (error) {
        console.log("Error in saveUnSavePropertiesOfUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not Save property for Later "
        })
    }
}

// saving/unsaving search of a user
const saveUnSaveSearchOfUser = async (req, res) => {
    const {userId} = req.params;
    const {savedSearch} = req.body;

    if(!userId || !req.body){
        return res.status(404).json({
            success: false,
            message : "Please Provide All Fields"
        })
    }
    try {
        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        const isPropExist = await Users.findOne({_id : userId, savedSearches : {$elemMatch : {$eq : savedSearch}} });
        if(isPropExist){
            await Users.findByIdAndUpdate(userId , {$pull : {savedSearches : savedSearch }}, {new : true});
            return res.status(201).json({
                success: true,
                message : "Saved Search Removed successFully"
            })
        }

        await Users.findByIdAndUpdate(userId , {$push : {savedSearches : savedSearch }}, {new : true});

        return res.status(201).json({
            success: true,
            message : "Saved Search Added SuccessFully"
        })
    } catch (error) {
        console.log("Error in saveUnSaveSearchOfUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not Save property for Later "
        })
    }
}

// getting all saved later searches of a user
const getSaveSearchesOfUser = async (req, res) => {
    const {userId} = req.params;

    if(!userId){
        return res.status(404).json({
            success: false,
            message : "Id of User is Required"
        })
    }
    try {
        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        return res.status(201).json({
            success: true,
            SavedSearches : isUser.savedSearches
        })
    } catch (error) {
        console.log("Error in getSaveSearchesOfUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not Save search "
        })
    }
}

// getting all listed properties of a  user
const getAllListedPropertiesofUser = async (req, res) => {
    const {userId} = req.params;

    if(!userId){
        return res.status(404).json({
            success: false,
            message : "Id of User is Required"
        })
    }
    try {
        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        const isExist = await Users.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: 'olxproperties',
                    localField: 'listedProperties',
                    foreignField: '_id',
                    as: 'Property'
                },
            },
            {
                $unwind: "$Property"
            },
            {
                $project: {
                    PropertyData: {
                        PropertyId : "$Property._id",
                        PropTitle : "$Property.title",
                        PropImages : "$Property.images",
                        PropPrice : "$Property.price",
                        PropAddress: "$Property.address",
                        PropCreatedAt: "$Property.createdAt",
                    },
                }
            },
            {
                $group: {
                    allListedProperties: {
                        $push: "$PropertyData"
                    },
                    _id: {
                    },
                }
            }
        ])

        return res.status(201).json({
            success: true,
            AllListedProperties : isExist
        })
    } catch (error) {
        console.log("Error in getAllListedPropertiesofUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get All Listed Properties"
        })
    }
}

// getting all sold properties of a  user
const getAllSoldPropertiesofUser = async (req, res) => {
    const {userId} = req.params;

    if(!userId){
        return res.status(404).json({
            success: false,
            message : "Id of User is Required"
        })
    }
    try {
        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        const isExist = await Users.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: 'olxproperties',
                    localField: 'soldProperties',
                    foreignField: '_id',
                    as: 'Property'
                },
            },
            {
                $unwind: "$Property"
            },
            {
                $project: {
                    PropertyData: {
                        PropertyId : "$Property._id",
                        PropTitle : "$Property.title",
                        PropImages : "$Property.images",
                        PropPrice : "$Property.price",
                        PropAddress: "$Property.address",
                        PropCreatedAt: "$Property.createdAt",
                    },
                }
            },
            {
                $group: {
                    allSoldProperties: {
                        $push: "$PropertyData"
                    },
                    _id: {
                    },
                }
            }
        ])

        return res.status(201).json({
            success: true,
            AllListedProperties : isExist
        })
    } catch (error) {
        console.log("Error in getAllSoldPropertiesofUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get All Listed Properties"
        })
    }
}

// delete a property of a  user
const deletePropertyofUser = async (req, res) => {
    const {userId , propId} = req.params;

    if(!userId || !propId){
        return res.status(404).json({
            success: false,
            message : "Id of User and Property are Required is Required"
        })
    }
    try {
        const isUser = await Users.findById(userId);
        if(!isUser){
            return res.status(404).json({
                success: false,
                message : "Sorry , User Not Found"
            })
        }

        const isExist = await Properties.findOne({_id : propId , owner : userId})
        if(!isExist){
            return res.status(404).json({
                success: false,
                message : "Property might not Found or Yoy u are not Authorized to do so."
            })
        }

        // deleting property
        const isDelete = await Properties.findByIdAndDelete(propId)

        // removing from user account if deleted successfully
        if(isDelete){
            const isSold = await Users.findOne({_id : userId , soldProperties : {$elemMatch : {$eq : id}} })
            if(isSold){
                await Users.findByIdAndUpdate(userId , {$pull : {soldProperties : id }} , {new : true})
            }else{
                await Users.findByIdAndUpdate(userId , {$pull : {listedProperties : id }} , {new : true})
            }
        }

        return res.status(201).json({
            success: true,
            message : "Property Deleted SuccessFully"
        })
    } catch (error) {
        console.log("Error in deletePropertyofUser and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get All Listed Properties"
        })
    }
}

// getting all properties with filters
const getAllFilteredProperties = async (req, res) => {

    let filters = {};

    let sortBy = "";

    if(req.query.sortBy){
        if(req.query.sortBy === "new"){
            sortBy = "new";
        }else{
            sortBy = "older";
        }
    }

    if(req.query.city){
        filters = {...filters , city : req.query.city }
    }
    if(req.query.activeStatus){
        filters = {...filters , status : req.query.activeStatus }
    }
    if(req.query.bedrooms){
        filters = {...filters , bedrooms : req.query.bedrooms }
    }
    if(req.query.area){
        filters = {...filters , area : req.query.area }
    }
    if(req.query.balcony){
        filters = {...filters , balcony : req.query.balcony }
    }
    if(req.query.tvLaunch){
        filters = {...filters , tvLaunch : req.query.tvLaunch }
    }
    if(req.query.kitchen){
        filters = {...filters , kitchen : req.query.kitchen }
    }
    if(req.query.minPrice && req.query.maxPrice){
        const price = {
            $gte: req.query.minPrice,
            $lte: req.query.maxPrice,
        }
        filters = {...filters , price : price }
    }

    console.log("filters : ",filters)

    const page = parseInt(req.query.pageNumber) || 1;
    const pageSize = 12;
    const skip = pageSize * (page - 1);

    try {
        let isExist;
        if(sortBy === "new"){
            isExist = await Properties.find(filters).limit(pageSize).skip(skip).sort({createdAt : 1});
        }else{
            isExist = await Properties.find(filters).limit(pageSize).skip(skip).sort({createdAt : -1});
        }

        return res.status(201).json({
            success: true,
            AllProperties : isExist
        })
    } catch (error) {
        console.log("Error in getAllFilteredProperties and error is : ", error)
        res.status(504).json({
            success: false,
            message : "Sorry Could Not get All Properties"
        })
    }
}


module.exports = {
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
    getSinglePropertyData,
    updateSingleImageProperty,
    deleteSingleImageProperty,
    addNewImageProperty,
}