exports.up = async function(knex) {
  await knex.schema.createTable("retailers", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.string('name', 500).notNullable();
    t.text('logo_url').notNullable();
    t.specificType('scheme', 'url_scheme');
    t.string('hostname').notNullable();
    t.text('path');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("retailers");
};
