/* Handling the monster's connection points */

exports.up = function(knex) {
    return knex.schema.createTable('monsters', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();

        //--- Foreign Key Connections ---

        //1. Alignment
        table.integer('align_id').unsigned().references('align_id').inTable("alignment").onDelete("CASCADE");

        //2. Monster Type
        table.integer("type_id").unsigned().references("type_id").inTable("montype").onDelete("CASCADE");

        //3. Monster Description
        table.integer("descrip_id").unsigned().references("descrip_id").inTable("mondescrip").onDelete("CASCADE");

        //4. Stats (AR, STR, DEX, etc.)
        table.integer("stats_id").unsigned().references("stats_id").inTable("stats").onDelete("CASCADE");

        //5. Attacks
        table.integer("atk_id").unsigned().references("atk_id").inTable("monattack").onDelete("CASCADE");

        //6. Vitals and Rewards (HP, XP, CR)
        table.integer("vit_id").unsigned().references("vit_id").inTable("vitals").onDelete("CASCADE");

        table.timestamps(true, true);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('monsters');
};