exports.up = async function(knex) {
  await knex.schema.table('checkouts', t => {
    t.timestamp('checkout_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('checkouts', t => {
    t.dropColumn('checkout_at');
  });
};
