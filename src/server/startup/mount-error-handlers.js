module.exports = app => {
    // CSRF error handler
    app.use((err, req, res, next) => {
        if (err.code !== "EBADCSRFTOKEN") return next(err);
        res.status(403).json({ error: 403, message: "Session has expired or form has been tampered with" });
    });

    // General error handler
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        res.json({ error: err.status || 500, message: err.message });
    });
};
