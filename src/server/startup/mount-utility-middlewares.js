const path = require("path");
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

module.exports = app => {
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "../../../dist")));
    app.use(helmet());
};
