/* Handling the stats breakdown of the creature */

exports.up = function(knex) {
    return knex.schema.createTable('stats', (table) => {
        table.increments('stats_id').primary();
        table.integer('armor').notNullable();
        table.integer('str').notNullable(); //<-- Creatures strength
        table.integer('cons').notNullable(); //<-- Creatures consitution
        table.integer('dex').notNullable(); //<-- Creatures dexterity
        table.integer('intel').notNullable(); //<-- Creatures intelligence
        table.integer('wis').notNullable(); //<-- Creatures wisdom
        table.integer('cha').notNullable(); //<-- Creatures charisma
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stats');
};