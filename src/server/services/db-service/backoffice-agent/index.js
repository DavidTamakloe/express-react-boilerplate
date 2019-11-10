const create = require("./create.js");
const findAll = require("./find-all.js");
const findById = require("./find-by-id.js");
const findByEmail = require("./find-by-email.js");
const edit = require("./edit.js");
const destroy = require("./destroy.js");

module.exports = {
	create: create,
	findAll: findAll,
	findById: findById,
	edit: edit,
	destroy: destroy,
	findByEmail: findByEmail
};
