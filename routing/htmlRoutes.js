const path = require("path");
const googleLogin = require("../public/app/app.js")
module.exports = function (app) {
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"))
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/createAccount", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/createaccount.html"))
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/purchase", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/purchase.html"))
    });
}