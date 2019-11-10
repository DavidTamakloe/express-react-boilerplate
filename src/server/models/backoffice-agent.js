const BaseModel = require("./base-model");

class BackofficeAgent extends BaseModel {
    static get tableName() {
        return "backoffice_agents";
    }

    // static get relationMappings() {
    // 	return {
    // 		//Put relations here
    // 	};
    // }
}

module.exports = BackofficeAgent;
