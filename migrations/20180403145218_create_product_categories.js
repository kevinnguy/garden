exports.up = async function(knex) {
  await knex.schema.createTable("product_categories", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('product_id').notNullable().references('products.id').onDelete('CASCADE');
    t.uuid('category_id').notNullable().references('categories.id').onDelete('CASCADE');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("product_categories");
};
