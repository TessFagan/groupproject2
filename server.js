const express = require("express");
const path = require("path");
const dotenv = require("dotenv");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);

// Requiring our models for syncing
var db = require("./models");

// sequelize
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// starting our Express app/db

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});


