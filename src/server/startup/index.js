module.exports = {
    mountBaseSanitizerMiddleware: require("./mount-base-sanitizer-middleware"),
    mountCSRFMiddleware: require("./mount-csrf-protection-middleware"),
    mountErrorHandlers: require("./mount-error-handlers"),
    mountRoutes: require("./mount-routes"),
    mountSessionMiddleware: require("./mount-session-middleware"),
    mountUtilityMiddleware: require("./mount-utility-middlewares"),
    setupMongoDB: require("./setup-mongodb"),
    startServer: require("./setup-server"),
    setupViewEngine: require("./setup-view-engine")
};
