exports.up = async function(knex) {
  await knex.schema.createTable("retailer_category_links", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('category_id').notNullable().references('categories.id').onDelete('CASCADE');
    t.uuid('retailer_id').notNullable().references('retailers.id').onDelete('CASCADE');
    t.specificType('scheme', 'url_scheme');
    t.string('hostname').notNullable();
    t.text('path');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("retailer_category_urls");
};
