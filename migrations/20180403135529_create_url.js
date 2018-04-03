exports.up = async function(knex) {
  await knex.schema.raw("CREATE TYPE url_scheme AS ENUM ('http', 'https')");
  await knex.schema.createTable("url", function(t) {
    t.inherits('entity');
    t.string('hostname').notNullable();
    t.text('path');
    t.specificType('scheme', 'url_scheme').notNullable();

    t.comment('Not used as an actual table. Only use this for inheritance.');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("url");
  await knex.schema.raw("DROP TYPE url_scheme");
};
