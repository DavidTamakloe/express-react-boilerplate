const { sanitize } = require("express-validator");

module.exports = app => {
	app.use([
		sanitize("*.*")
			.escape()
			.trim()
	]);
};
