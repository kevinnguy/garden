exports.up = async function(knex) {
  await knex.schema.createTable("categories", function(t) {
    t.uuid('id').unique().primary().notNullable();
    t.inherits('entity');
    t.string('name').notNullable();
    t.specificType('gender', 'gender_enum');
    t.uuid('parent_id');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("categories");
};
