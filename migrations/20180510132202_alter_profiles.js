exports.up = async function(knex) {
  await knex.schema.table("profiles", function(t) {
    t.dropColumns('active', 'invited', 'verified');

    t.timestamp('active_at');
    t.timestamp('disabled_at');
    t.timestamp('invited_at');
    t.timestamp('verified_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.table("profiles", function(t) {
    t.dropColumns('active_at', 'disabled_at', 'invited_at', 'verified_at');

    t.boolean('active').defaultTo(false).notNullable();
    t.boolean('invited').defaultTo(false).notNullable();
    t.boolean('verified').defaultTo(false).notNullable();
  });
};
