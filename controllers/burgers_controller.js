// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

//Routing
router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data)
        res.render("index", { burger_data });
    })

});

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect("/")
    })
})

//Export
module.exports = router;