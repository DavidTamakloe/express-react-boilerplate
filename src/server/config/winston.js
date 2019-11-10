const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, colorize } = format;

const logFormat = printf(info => {
    const { timestamp, label, level, message, stack } = info;
    if (info.message instanceof Array) {
        const messages = [];
        for (const m of message) {
            if (m instanceof Error) {
                messages.push(m.stack);
            } else if (typeof m == "object") {
                messages.push(JSON.stringify(m));
            } else messages.push(m);
        }
        return `[${label}] ${timestamp} ${level}: ${messages}`;
    }
    if (info instanceof Error) return `[${label}] ${timestamp} ${level}: ${message} - ${stack}`;
    if (info instanceof Object) return `[${label}] ${timestamp} ${level}: ${JSON.stringify(message)}`;
    return `[${label}] ${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(timestamp(), label({ label: "cedimanager-logger" }), logFormat),
    transports: [new transports.Console({ format: colorize({ all: true }) })]
});

module.exports = logger;
