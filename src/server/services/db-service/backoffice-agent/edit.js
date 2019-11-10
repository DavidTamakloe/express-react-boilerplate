const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(id, args) {
    return backofficeAgent
        .query()
        .where({ id })
        .patch(args)
        .returning("*")
        .first();
};
