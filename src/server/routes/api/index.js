const APIRouter = require("express").Router();

APIRouter.use("/web", require("./web"));

module.exports = APIRouter;
