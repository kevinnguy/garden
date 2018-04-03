exports.up = async function(knex) {
  await knex.schema.createTable("retailers", function(t) {
    t.uuid('id').unique().primary().notNullable();
    t.inherits('url');
    t.string('name', 500).notNullable();
    t.text('logoURL').notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("retailers");
};
