const http = require("http");

module.exports = app => {
    const port = normalizePort(process.env.PORT || "3000");
    app.set("port", port);

    const server = http.createServer(app);
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening.bind(null, server));
};

const normalizePort = val => {
    const port = parseInt(val, 10);

    // named pipe
    if (isNaN(port)) return val;

    // port number
    if (port >= 0) return port;

    return false;
};

/* Event listener for HTTP server "error" event */
const onError = error => {
    const port = normalizePort(process.env.PORT || "3000");
    if (error.syscall !== "listen") throw error;

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            _logger.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            _logger.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/* Event listener for HTTP server "listening" event */
const onListening = server => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
};
