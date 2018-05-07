exports.up = async function(knex) {
  await knex.schema.raw("CREATE TYPE url_scheme AS ENUM ('http', 'https')");
};

exports.down = async function(knex) {
  await knex.schema.raw("DROP TYPE url_scheme");
};
