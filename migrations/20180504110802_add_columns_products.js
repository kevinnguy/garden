exports.up = async function(knex) {
  await knex.schema.table('products', t => {
    t.uuid('category_id').notNullable().references('categories.id').onDelete('CASCADE');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('products', t => {
    t.dropColumn('category_id');
  });
};
