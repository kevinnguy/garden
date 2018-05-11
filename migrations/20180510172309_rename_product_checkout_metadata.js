exports.up = async function(knex) {
  await knex.schema.renameTable('checkout_products', 'product_checkout_metadata');
};

exports.down = async function(knex) {
  await knex.schema.renameTable('product_checkout_metadata', 'checkout_products');
};
