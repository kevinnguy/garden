exports.up = async function(knex) {
  await knex.schema.createTable("categories", function(t) {
    t.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('parent_id');
    t.string('name').notNullable();
    t.specificType('gender', 'gender_enum');
    t.timestamps(true, true);
    t.boolean('deleted').defaultTo(false).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("categories");
};
