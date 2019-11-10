/**
 * routes/index.js
 *
 * @description:: index file for routes. This file is like a central station where
 * all routes come before they are directed to the respective "mini-application".
 *
 */

module.exports = function(app) {
    app.use("/api", require("./api"));

    app.use("/backoffice/*", (req, res) => {
        res.render("backoffice/index");
    });

    app.use("/*", (req, res) => {
        res.render("website/index");
    });
};
