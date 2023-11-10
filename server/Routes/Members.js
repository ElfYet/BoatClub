// This must be edit to fit the particular Boat Club website
/*
Members.js routes file includes API endpoints for
CRUD (Create, Read, Update, Delete) operations.

Each endpoint corresponds to a specific resource or object in your app, and it supports various HTTP methods for CRUD operations.
For example, if you have a 'members' table in your databasae, you might have a set of API endpoints like this:
 - GET/api/members : Retrieves a list of members
 - GET/api/members/:id : Retrieves a specific user by ID
 - POST/api/members : Create a new user
 - PUT/api/members:id : Update an existing members by ID
 - DELETE/api/members/:id : Delete a user by ID
These endpoints cover all the CRUD operations for the 'members' resource. When you design your front-end components, they interect with
these endpoints to perform operations on the 'user' data in your database

// library from backend library encryption
const bcrpyt = require("bcrypt");
*/

import DBConnection from '../Models/DBConnection';

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/loginController");

router.post("/login", loginUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require(body-parser);

const app = express();
const path = require('path');

app.use(cors());
app.use(bodyParser.json())

DBConnection();

/*
var mysql = require('mysql2');

// create connection to mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XpBE7s}i9c)FR3MB5^5h"
});
*/

var url = require('url');

// use this section to test that web server is awake and responding
app.get('/hello', (routRequest, routeResult) => {
    routeResult.json({
        message: 'Hello World'
    });
})

// use this section to test bringing up initial webpage
app.get('/', (routRequest, routeResult) => {
    routeResult.sendFile(path.join(_dirname, '/DemoProject.html'))
});

app.post('/member', (routeRequest, routeResult) => {
    console.log("insidee of POST function")
    
    let member = routeRequest.body
    let name = member.name
    let address = member.address

    connection.connect(function(error) {
        if (error) throw error;
        console.log("Connected!");

        console.log(name, address);

        var sqlQuery = 'Insert INto member (name, address) Values ("${name}", ${address}")';
        connection.query(sqlQuery, function (error, queryResult) {
            if (error) throw error;
            console.log("1 record inserted, ID:" + queryResult.insertID);
            routeResult.json({
                message: 'Inserted record ' + queryResult.insertID
            });
        });
    });
})

app.get('/member/:id', (routeRequest, routeResult) => {
    var id = routeRequest.params.id
    
    console.log("inside of read function")
    connection.connect(function(error) {
        if (error) throw error;
        console.log("Connected!");

        var sqlQuery = 'SELECT * FROM members WHERE ID = "${id}"';
        console.log(sqlQuery);

        connection.query(sqlQuery, function (error, queryResult, fields) {
            if (error) throw error;
            console.log("1 record read: " + queryResult[0].name + " " + queryResult[0].address);
            routeResult.json({
                message: 'Retrieved record ' + queryResult[0].name + " " + queryResult[0].address
            });
        });
    });
});

// activate the server
app.listen(8080, () => {
    console.log('server is listening on port 8080');
});