// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Index Redirect
// router.get('/', function (req, res) {
//     res.redirect('/index');
// });



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.post("/burger/create", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');

    });
});

router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});



// Export routes for server.js to use.
module.exports = router;