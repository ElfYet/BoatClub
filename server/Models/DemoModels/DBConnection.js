function DBConnection() {
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XpBE7s}i9c)FR3MB5^5h"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //query a database
    //use sql statements to read/write a mysql database. This is called "to query" the database
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        //the query method takes an sql statements as a parameter and returns the result
    });
});
}

export default DBConnection
