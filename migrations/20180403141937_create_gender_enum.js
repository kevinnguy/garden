exports.up = async function(knex) {
  await knex.schema.raw(
    "CREATE TYPE gender_enum AS ENUM ('female', 'male', 'all', 'other')"
  );
};

exports.down = async function(knex) {
  await knex.schema.raw("DROP TYPE gender_enum");
};
