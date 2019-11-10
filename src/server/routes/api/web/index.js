const WebRouter = require("express").Router();

WebRouter.use("/backoffice", require("./backoffice"));

module.exports = WebRouter;
