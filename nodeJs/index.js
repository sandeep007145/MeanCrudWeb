const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { MongoClient } = require('./db.js')


//use expreess 
var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}))

//request statement from epmloyee controller
 
var employeeController = require('./controller/employeeController.js');



//listinig host

app.listen(4000, () => {
    console.log('Server started at port : 4000');
});

// create endpoint for employee controller

app.use('/employess', employeeController);