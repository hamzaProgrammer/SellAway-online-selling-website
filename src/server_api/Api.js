const axios = require('axios');

const API = axios.create({
    baseURL: 'http://localhost:8080'
    //baseURL: ' https://oturq-trading-app.herokuapp.com'
});

// this is for using local storage in headers, otherwise it will not work
API.interceptors.request.use((req) => { 
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});


// Users Routes
const signInUser = (data) => API.post(`/api/users/signin`, data);
const signUpUser = (data) => API.post(`/api/users/signup`, data);
const sendMail = (email) => API.put(`/api/users/sendMail/${email}`);
const checkOtp = (email , userEmail) => API.put(`/api/users/checkSentCode/${userEmail}` , email );
const updatePassword = (email , userEmail) => API.put(`/api/users/updatePassword/${userEmail}` , email );
const getUserInfo = (id) => API.get(`/api/users/getProfileInfo/${id}`);
const updateProfilePic = (data , id) => API.put(`/api/users/uploadProfilePic/${id}`, data );
const updateUserInfo = (id , data) => API.put(`/api/users/updateProfileInfo/${id}`, data );


// Properties Routes
const getHotProperties = () => API.get(`/api/properties/getPaginatedProperties`);
const getPropertyImages = (id) => API.get(`/api/properties/getSinglePropertyImages/${id}`);
const getPropertyMainDet = (id) => API.get(`/api/properties/getSinglePropertyDetails/${id}`);
const getPropertyDesc = (id) => API.get(`/api/properties/getSinglePropertyDes/${id}`);
const getPropertyCords = (id) => API.get(`/api/properties/getSinglePropertyCoords/${id}`);
const getPropertyRelated = (id) => API.get(`/api/properties/getSRelatedProperties/${id}`);
const getPropertyDet = (id) => API.get(`/api/properties/getSinglePropertyDetails/${id}`);
const getPropertyFeatures = (id) => API.get(`/api/properties/getSinglePropertyFeatures/${id}`);
const getPropertyOwner = (id) => API.get(`/api/properties/getOwnerDetails/${id}`);
const getFilteredProperties = (search) => API.get(`/api/properties/getFilteredProperties?${search}`);
const getUserAllProperties = (userId) => API.get(`/api/properties/getAllListedPropertiesOfUser/${userId}`);
const getUserSoldProperties = (userId) => API.get(`/api/properties/getAllSoldPropertiesOfUser/${userId}`);
const getUsersavedProperties = (userId) => API.get(`/api/properties/getAllSavedProperties/${userId}`);
const getUsersavedSearches = (userId) => API.get(`/api/properties/getSavedSearchesOfUser/${userId}`);
const saveOrUnsaveSavedSearch = (userId , saveSearch) => API.put(`/api/properties/saveSearch/${userId}`, saveSearch);
const saveOrUnsaveProperties = (userId , propId ) => API.put(`/api/properties/savePropertyForLater/${userId}/${propId}`);
const getRecentProperties = (city) => API.get(`/api/properties/getCityProperties/${city}`);
const uploadPropertyData = (data) => API.post(`/api/properties/addNew`, data);
const uploadPropertyImages = (data,id) => API.post(`/api/properties/UploadImages/${id}`, data);
const getSinglePropData = (id) => API.get(`/api/properties/getSinglePropertyData/${id}`);
const uploadSinglePropertyImage = (data,id,index) => API.post(`/api/properties/UploadSingleImage/${id}/${index}`, data);
const updateSingleProperty = (data,id,owner) => API.put(`/api/properties/updateAdInfo/${id}/${owner}`, data);
const deleteSinglePropertyImage = (id,index) => API.post(`/api/properties/deleteSingleImage/${id}/${index}`);
const addNewPropertyImage = (data,id,owner) => API.post(`/api/properties/addNewImage/${id}/${owner}`, data);
const deleteProperty = (userId , propId) => API.delete(`/api/properties/deletePropertyOfUser/${userId}/${propId}`);
const saveMySearch = (userId, data) => API.put(`/api/properties/saveSearch/${userId}`, data);




module.exports = {
    getHotProperties,
    getPropertyImages,
    getPropertyMainDet,
    getPropertyDesc,
    getPropertyCords,
    getPropertyRelated,
    getPropertyDet,
    getPropertyFeatures,
    getPropertyOwner,
    getFilteredProperties,
    signUpUser,
    signInUser,
    getUserAllProperties,
    getUserSoldProperties,
    getUsersavedProperties,
    getUsersavedSearches,
    saveOrUnsaveSavedSearch,
    saveOrUnsaveProperties,
    getUserInfo,
    updateProfilePic,
    updateUserInfo,
    getRecentProperties,
    uploadPropertyData,
    uploadPropertyImages,
    getSinglePropData,
    uploadSinglePropertyImage,
    updateSingleProperty,
    deleteSinglePropertyImage,
    addNewPropertyImage,
    deleteProperty,
    saveMySearch,
}