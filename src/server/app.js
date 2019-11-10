const express = require("express");
const logger = require("./config/winston");
const {
    setupMongoDB,
    setupViewEngine,
    mountUtilityMiddleware,
    mountCSRFMiddleware,
    mountErrorHandlers,
    mountRoutes,
    mountSessionMiddleware,
    mountBaseSanitizerMiddleware,
    startServer
} = require("./startup");

const app = express();

//=====================SETUP GLOBALS===============================
const services = require("./services");
const utils = require("./utils");
global._services = services;
global._utils = utils;
global._logger = logger;
//=================================================================

const mongoConnection = setupMongoDB();
mountSessionMiddleware(app);
setupViewEngine(app);
mountUtilityMiddleware(app);
mountCSRFMiddleware(app);
mountBaseSanitizerMiddleware(app);
mountRoutes(app);
mountErrorHandlers(app);

if (process.env.NODE_ENV != "testing") {
    startServer(app);
}

module.exports = app;
module.exports.mongoConnection = mongoConnection;
