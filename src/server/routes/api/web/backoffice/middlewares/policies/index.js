/**
* routes/backoffice/policies/index
*
* @description:: Index file for policies in this mini-application.
*
*/

const isLoggedIn = require("./is-logged-in.js");

module.exports = {
	isLoggedIn: isLoggedIn
};
