exports.up = async function(knex) {
  await knex.schema.createTable("product_images", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('product_id').notNullable().references('products.id').onDelete('CASCADE');
    t.uuid('retailer_id').notNullable().references('retailers.id').onDelete('CASCADE');
    t.boolean('expired').defaultTo('false').notNullable();
    t.specificType('scheme', 'url_scheme');
    t.string('hostname').notNullable();
    t.text('path');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("product_images");
};
