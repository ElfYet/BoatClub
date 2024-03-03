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
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});