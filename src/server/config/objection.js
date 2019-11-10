/**
 *
 * config/objection.js
 *
 * @description:: config file for knex, and objection.
 *
 */

const pg = require("pg");
const PG_DECIMAL_OID = 1700;
pg.types.setTypeParser(PG_DECIMAL_OID, parseFloat);

let knexfile = require("../../../knexfile.js");
let knex = require("knex")(knexfile[process.env.NODE_ENV]);

const { Model } = require("objection");
Model.knex(knex);

module.exports = { Model, knex };
