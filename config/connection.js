// * Inside the `connection.js` file, setup the code to connect Node to MySQL
// * Export the connection.

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mogwai123",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;


