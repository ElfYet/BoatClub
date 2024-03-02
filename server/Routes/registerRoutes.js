/*
MemberRoutes.js routes file includes API endpoints for
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
*/

const express = require('express');
const { registerMember } = require('../Controllers/registerController');

const router = express.Router();

// POST /registration

    router.post('/registration', registerMember);

module.exports = router;