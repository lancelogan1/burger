// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

let express = require("express");
let router = express.Router();

router.get("/", function (req, res){
    res.render("index");
});

module.exports = router;