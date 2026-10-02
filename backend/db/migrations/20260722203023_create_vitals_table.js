/* Handling the creature's vitals and rewards */

exports.up = function(knex) {
    return knex.schema.createTable('vitals', (table) => {
        table.increments('vit_id').primary();
        table.integer('hp').notNullable();
        table.integer('xp');
        table.string('cr');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vitals');
};