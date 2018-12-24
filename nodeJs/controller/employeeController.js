const express = require('express');

var router = express.Router();

var { Employee } = require('../model/employee');


// get Reqiest from db

// localhost:4000/employess/list

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log('Error in retriving Employee: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
   var emp = new Employee ({
       name: req.body.name,
       position: req.body.position,
       office: req.body.office,
       number: req.body.number,
   });
   emp.save((err, doc) => {
       if (!err) {
           res.send(doc);
       } else {
        console.log('Error in  Employee save: ' + JSON.stringify(err, undefined, 2));
       }
   });
});

module.exports = router;