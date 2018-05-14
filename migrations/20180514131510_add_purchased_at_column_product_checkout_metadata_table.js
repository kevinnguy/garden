exports.up = async function(knex) {
  await knex.schema.table('product_checkout_metadata', t => {
    t.timestamp('purchased_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('product_checkout_metadata', t => {
    t.dropColumn('purchased_at');
  });
};
