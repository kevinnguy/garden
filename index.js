const models = require('citrus');
const { objection } = require('citrus');
const Knex = require('knex');
const knexfile = require('./knexfile');

const knex = Knex(knexfile.development);
objection.Model.knex(knex);

module.exports = {
  knex,
  models,
  objection,
};
