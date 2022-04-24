const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({
    path: './config.env'
})
require('./db/conn')
var port = process.env.PORT || 8080;

app.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))
app.use(cors())

app.use(express.json())

app.use('/propertiesImages', express.static('propertiesImages'));
app.use('/userImages', express.static('userImages'));



// adding routes
app.use(require('./routes/UsersRoutes'))
app.use(require('./routes/PropertiesRoutes'))




app.listen(process.env.PORT || 8080, (req, res) => {
    console.log(`Express Server Running at ${port}`)
})