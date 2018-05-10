exports.up = async function(knex) {
  await knex.schema.createTable("checkout_products", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('checkout_id').notNullable().references('checkouts.id').onDelete('CASCADE');
    t.uuid('product_id').notNullable().references('products.id').onDelete('CASCADE');
    t.integer('quantity').defaultTo(0).notNullable();
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("checkout_products");
};
