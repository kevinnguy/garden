exports.up = async function(knex) {
  await knex.schema.createTable("products", function(t) {
    t.uuid('id').unique().primary().notNullable();
    t.inherits('entity');
    t.string('title', 500).notNullable();
    t.text('description');
    t.text('promo');
    t.decimal('price', null).notNullable();
    t.decimal('price_old', null);
    t.text('retailer_url_path').notNullable();
    t.uuid('retailer_id').notNullable().references('retailers.id').onDelete('CASCADE');
    t.boolean('expired').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("products");
};
