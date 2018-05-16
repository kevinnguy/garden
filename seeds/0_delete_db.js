const tables = require('../tables');

exports.seed = async function(knex) {
  for (let table of tables) {
    await knex(table).del();
  }
};