const models = require('citrus');
const { objection } = require('citrus');
const Knex = require('knex');
const knexfile = require('./knexfile');

const knex = Knex(knexfile.development);
objection.Model.knex(knex);

const { transaction } = objection;
transaction.create = async () => await transaction.start(knex);

module.exports = {
  models,
  transaction,
};
