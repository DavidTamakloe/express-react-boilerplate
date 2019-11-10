const AuthRouter = require("express").Router();

// Put route handlers here
AuthRouter.post("/login", require("./login"));
AuthRouter.post("/signup", require("./signup"));
AuthRouter.get("/logout", require("./logout"));

module.exports = AuthRouter;
