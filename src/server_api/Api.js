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


// Admin Routes
const signInUser = (data) => API.post(`/api/users/signin`, data);
const signUpUser = (data) => API.post(`/api/users/signup`, data);
const sendMail = (email) => API.put(`/api/users/sendMail/${email}`);
const checkOtp = (email , userEmail) => API.put(`/api/users/checkSentCode/${userEmail}` , email );
const updatePassword = (email , userEmail) => API.put(`/api/users/updatePassword/${userEmail}` , email );


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
const getFilteredProperties = (city , activeStatus) => API.get(`/api/properties/getFilteredProperties?city=${city}&activeStatus=${activeStatus}`);




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
    signInUser
}