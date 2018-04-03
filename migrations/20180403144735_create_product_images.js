exports.up = async function(knex) {
  await knex.schema.createTable("product_images", function(t) {
    t.uuid('id').unique().primary().notNullable();
    t.inherits('url');
    t.boolean('expired').defaultTo('false').notNullable();
    t.uuid('product_id').notNullable().references('products.id').onDelete('CASCADE');
    t.uuid('retailer_id').notNullable().references('retailers.id').onDelete('CASCADE');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("product_images");
};
