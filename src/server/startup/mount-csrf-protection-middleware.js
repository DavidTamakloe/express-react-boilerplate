const csurf = require("csurf");

module.exports = app => {
    // Routes to be exluded from CSRF protection
    if (process.env.CAN_CREATE_ROOT == "true") {
        app.post("/api/web/backoffice/create-root-agent", require("../routes/api/web/backoffice/create-root-agent"));
    }

    // Disable CSRF protection in testing
    if (process.env.NODE_ENV != "testing") {
        app.use(csurf());

        // Attach CSRF Token
        app.use((req, res, next) => {
            if (process.env.NODE_ENV !== "testing") res.cookie("XSRF-TOKEN", req.csrfToken());
            return next();
        });
    }
};
