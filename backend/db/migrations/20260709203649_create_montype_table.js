/* The creature's type (t_name) and a description for that type of creature (t_descrip) */

exports.up = function(knex) {
    return knex.schema.createTable('montype', (table) => {
        table.increments('type_id').primary();
        table.string('t_name').notNullable().unique();
        table.text('t_descrip');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('montype');
};