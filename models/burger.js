// * Inside your `burger` directory, create a folder named `models`.

// * In `models`, make a `burger.js` file.

//   * Inside `burger.js`, import `orm.js` into `burger.js`

//   * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//   * Export at the end of the `burger.js` file.

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },
    update: function (burgerID, cb) {
        orm.updateOne(burgerID, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;