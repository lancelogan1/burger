// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

// * Export the ORM object in `module.exports`.

let connection = require("./connection.js");

let orm = {
    all: function (tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    update: function (tableInput, condition, cb) {
        connection.query(`UPDATE ${tableInput} SET devoured=true WHERE id=${condition};`, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    create: function(tableInput, val, cb){
        connection.query(`INSERT INTO ${tableInput} (burger_name) VALUES ("${val}");`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    }

};




module.exports = orm;
