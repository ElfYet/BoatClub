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
    var sql = "UPDATE customers SET address = 'Canyon 123' \
    WHERE address = 'Valley 345'"; // used back slash to break string in 2
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});