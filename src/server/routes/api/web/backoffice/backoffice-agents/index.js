const Router = require("express").Router();
const { isLoggedIn } = require("../middlewares/policies");

Router.use(isLoggedIn);

Router.get("/fetch-all", require("./fetch-all"));
Router.post("/create", require("./create"));
Router.post("/update", require("./update"));
Router.post("/delete", require("./delete"));

module.exports = Router;
