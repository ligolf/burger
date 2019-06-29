// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
    // selectAll function
    selectAll: function (cb) {

        // Run MySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            cb(result);
        });

    },

    insertOne: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    // updateOne function
    updateOne: function (burgerID, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{
            devoured: true
        }, {
            id: burgerID
        }], function (err, result) {
            if (err) throw err;
            cb(result);
        });

    }
};




module.exports = orm;