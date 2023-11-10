var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XpBE7s}i9c)FR3MB5^5h"
});

con.connect(function(error) {
    if (error) throw error;
    console.log("Connection!");
    con.query("CREATE DATABASE mydb", function (error, result) {
        if (error) throw error;
        console.log("Database created");
    });
});