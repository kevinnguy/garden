exports.up = async function(knex) {
  await knex.schema.createTable("retailer_category_urls", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.inherits('url');
    t.uuid('category_id').notNullable().references('categories.id').onDelete('CASCADE');
    t.uuid('retailer_id').notNullable().references('retailers.id').onDelete('CASCADE');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("retailer_category_urls");
};
