exports.up = async function(knex) {
  await knex.schema.table('profiles', t => {
    t.string('anonymous_id').unique();
  });
};

exports.down = async function(knex) {
  await knex.schema.table('profiles', t => {
    t.dropColumn('anonymous_id');
  });
};
