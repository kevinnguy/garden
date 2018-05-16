const tables = require('../tables');

exports.up = async function(knex) {
  await knex.schema.raw(`
    CREATE OR REPLACE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;`);

  for (let table of tables) {
    await knex.schema.raw(`
      CREATE TRIGGER set_timestamp_${table}
      BEFORE UPDATE ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE trigger_set_timestamp();`);
  }
};

exports.down = async function(knex) {
  for (let table of tables) {
    await knex.schema.raw(`DROP TRIGGER set_timestamp_${table} ON ${table}`);
  }

  await knex.schema.raw("DROP FUNCTION trigger_set_timestamp()");
};
