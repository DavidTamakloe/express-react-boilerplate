const mongoose = require("mongoose");

module.exports = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on("error", () => {
        _logger.error("MongoDB connection error!");
    });
    db.once("open", () => {
        console.log("Connected to mongo!");
    });
    return db;
};
