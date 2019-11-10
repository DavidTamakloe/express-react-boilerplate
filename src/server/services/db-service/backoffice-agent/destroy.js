const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(id) {
    return backofficeAgent
        .query()
        .where({ id: id })
        .del();
};
