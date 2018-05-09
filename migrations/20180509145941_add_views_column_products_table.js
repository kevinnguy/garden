exports.up = async function(knex) {
  await knex.schema.table('products', t => {
    t.integer('views').defaultTo(0).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.table('products', t => t.dropColumn('views'));
};
