// * Inside the `connection.js` file, setup the code to connect Node to MySQL
// * Export the connection.

//SQL
let mysql = require("mysql");

//connection info
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mogwai123",
    database: "burgers_db"
});

//Connecting to localsever
connection.connect(function(err){
    if(err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});

//export
module.exports = connection;


