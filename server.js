let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");


let app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/.public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set Handlebars.
let exphbs = require("express-handlebars");
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function(){
    console.log(`Server listening on port: ${PORT}`);
});