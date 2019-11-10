const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            name: "express-react-session",
            saveUninitialized: false,
            rolling: true,
            resave: true,
            cookie: { maxAge: 3600000, httpOnly: true },
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        })
    );
};
