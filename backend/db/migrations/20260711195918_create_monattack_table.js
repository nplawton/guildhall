/* Handling the creature's attacks */

exports.up = function(knex) {
    return knex.schema.createTable('monattack', (table) => {
        table.increments('atk_id').primary();
        table.string('atk1_name').notNullable();
        table.text('atk1_descrip').notNullable();
        table.string('atk2_name');
        table.text('atk2_descrip');
        table.string('atk3_name');
        table.text('atk3_descrip');
        table.string('atk4_name');
        table.text('atk4_descrip');
        table.string('spatk1_name');
        table.text('spatk1_descrip');
        table.string('spatk2_name');
        table.text('spatk2_descrip');
        table.string('spatk3_name');
        table.text('spatk3_descrip');
        table.string('spatk4_name');
        table.text('spatk4_descrip');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('monattack');
};