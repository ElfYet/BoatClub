// Configuration file containing the database connection details
const mysql = require('mysql2');
// dotenv package installed to load environment variables from a file named .env
// This will hide the sensitive password data (Don't forget to add the .env file to .gitignore)
//require('dotenv').config({ path: "../.env"}); // Load environment variables from .env file

// Create a MySQL connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'XpBE7s}i9c)FR3MB5^5h',
    database: 'skylineboatclub',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;

//Pool Code
/*
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;
*/




