const { Model } = require("../config/objection");

class BaseModel extends Model {
    $beforeInsert() {
        this.created_at = new Date().toISOString();
        delete this.updated_at;
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
        delete this.created_at;
    }

    //Uncomment this to prevent NaN values from entering the database
    $beforeValidate(jsonSchema, json) {
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                if (Number.isNaN(json[key])) {
                    throw new Error("NaN Validation Failed!");
                }
            }
        }
    }
}

module.exports = BaseModel;
