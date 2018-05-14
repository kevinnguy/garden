exports.up = async function(knex) {
  await knex.schema.table('product_checkout_metadata', t => {
    t.timestamp('add_to_retailer_cart_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('product_checkout_metadata', t => {
    t.dropColumn('add_to_retailer_cart_at')
  });
};
