exports.up = function(knex) {
    return knex.schema.createTable("backoffice_agents", table => {
        table.increments().primary();
        table.string("first_name");
        table.string("last_name");
        table
            .string("email")
            .index()
            .unique()
            .notNullable();
        table.string("password").index();
        table.integer("access_level");
        table.timestamps(false, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("backoffice_agents");
};
