/* Alignment a categorization of a character's or creature's moral and ethical perspective (a_type) and a description
of the alignment type (a_descrip) */

exports.up = function(knex) {
    return knex.schema.createTable('alignment', (table) => {
        table.increments('align_id').primary(); //Auto-increment ID
        table.string('a_type').notNullable().unique();
        table.text('a_descrip'); 
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists('alignment');
};
