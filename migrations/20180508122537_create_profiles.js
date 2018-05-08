exports.up = async function(knex) {
  await knex.schema.raw(
    "CREATE TYPE oauth_enum AS ENUM ('facebook', 'google')"
  );
  await knex.schema.createTable("profiles", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.string('email', 500).unique();
    t.text('password');
    t.string('first_name', 50);
    t.string('last_name', 50);
    t.string('username', 20).unique();
    t.string('phone', 30).unique();
    t.specificType('oauth', 'oauth_enum');
    t.specificType('gender', 'gender_enum');
    t.text('note');
    t.integer('karma').defaultTo(0).notNullable();
    t.text('image_url');
    t.boolean('active').defaultTo(false).notNullable();
    t.boolean('disabled').defaultTo(false).notNullable();
    t.boolean('invited').defaultTo(false).notNullable();
    t.boolean('verified').defaultTo(false).notNullable();
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("profiles");
  await knex.schema.raw("DROP TYPE oauth_enum");
};
