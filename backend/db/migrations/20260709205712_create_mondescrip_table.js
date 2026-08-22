/* This table breaks down the creature's attributes
    the creature's size (size)
    the creature's speed (speed)
    the creature's description (descrip)
    If there is any background info (info)
    the creature's image URL (img_url)
*/

exports.up = function(knex) {
    return knex.schema.createTable('mondescrip', (table) => {
        table.increments('descrip_id').primary();
        table.string('size').notNullable();
        table.string('speed').notNullable();
        table.text('descrip').notNullable();
        table.text('info');
        table.string('img_url');
    });
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists('mondescrip');
};