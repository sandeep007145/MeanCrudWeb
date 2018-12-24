const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/myCrud';

MongoClient.connect(url, { useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('Mongodb Connected successfully');
    } else {
        console.log('Error in db connection : ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = MongoClient;