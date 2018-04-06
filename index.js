const Knex = require('knex');
const knexfile = require('./knexfile');
const objection = require('objection');

const models = require('./models');

const knex = Knex(knexfile);
objection.Model.knex(knex);

module.exports = {
  models,
  objection,
}