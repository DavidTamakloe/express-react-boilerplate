const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(args) {
    return backofficeAgent
        .query()
        .insert(args)
        .returning("*")
        .first();
};
