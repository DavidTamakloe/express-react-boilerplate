const backofficeAgent = require("../../../models/backoffice-agent");

module.exports = function(relationString = "") {
    return backofficeAgent.query().eager(relationString);
};
