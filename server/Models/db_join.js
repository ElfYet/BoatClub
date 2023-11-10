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
    var sql = "SELECT users.name AS user, product.name AS favorite \
    FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});