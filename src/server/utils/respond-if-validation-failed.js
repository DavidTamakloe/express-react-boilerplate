const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorResponse = {
            message: "Request Validation Error",
            errors: errors.array().reduce((acc, error) => (acc += `${error.msg}, `), "")
        };
        _logger.error("Request Validation Error");
        _logger.error(errors.array().reduce((acc, error) => (acc += `${error.msg}, `), ""));

        return res.status(400).send(errorResponse);
    }

    return next();
};
