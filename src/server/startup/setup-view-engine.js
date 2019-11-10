const path = require("path");

module.exports = app => {
    app.set("views", path.join(__dirname, "../../../dist"));
    app.set("view engine", "ejs");
};
