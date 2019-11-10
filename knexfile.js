/**
 * knexfile.js
 *
 * @description: configuration file for knex. specifies which database knex connects to
 * Remember to set all required environment variables before running the app.
 *
 **/

module.exports = {
    development: {
        client: "pg",
        migrations: {
            directory: "./src/server/migrations"
        },
        connection: process.env.DATABASE_URL
    },
    testing: {
        client: "pg",
        connection: process.env.DATABASE_URL
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        ssl: true
    }
};
