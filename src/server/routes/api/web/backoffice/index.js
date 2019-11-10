const BackofficeRouter = require("express").Router();
const { isLoggedIn } = require("./middlewares/policies");

if (process.env.CAN_CREATE_ROOT == "true") {
    BackofficeRouter.post("/create-root-agent", require("./create-root-agent"));
}

BackofficeRouter.use("/auth", require("./auth"));

BackofficeRouter.use(isLoggedIn);

BackofficeRouter.get("/fetch-current-agent", require("./fetch-current-agent"));
BackofficeRouter.use("/backoffice-agents", require("./backoffice-agents"));

module.exports = BackofficeRouter;
