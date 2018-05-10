exports.up = async function(knex) {
  await knex.schema.createTable("checkouts", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('profile_id').notNullable().references('profiles.id').onDelete('CASCADE');
    t.timestamp('completed_at');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("checkouts");
};
