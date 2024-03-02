var mysql = require('mysql');

var con = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "XpBE7s}i9c)FR3MB5^5h",
    database: "SkylineBoatClub"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});