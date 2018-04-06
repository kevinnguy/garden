exports.up = async function(knex) {
  await knex.schema.createTable("entity", function(t) {
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
    t.comment('Not used as an actual table. Only use this for inheritance.');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("entity");
};
