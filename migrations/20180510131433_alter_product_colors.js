exports.up = async function(knex) {
  await knex.schema.table('product_colors', t => {
    t.dropColumn('expired');
    t.timestamp('expired_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('product_colors', t => {
    t.dropColumn('expired_at');
    t.boolean('expired').defaultTo(false).notNullable();
  });
};
