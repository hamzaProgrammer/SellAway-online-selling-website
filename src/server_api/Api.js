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
const signInAdmin = (data) => API.post(`/api/users/signin`, data);
const signUpAdmin = (data) => API.post(`/api/users/signup`, data);
const sendMail = (email) => API.put(`/api/users/sendMail/${email}`);
const checkOtp = (email , userEmail) => API.put(`/api/users/checkSentCode/${userEmail}` , email );
const updatePassword = (email , userEmail) => API.put(`/api/users/updatePassword/${userEmail}` , email );



module.exports = {

}