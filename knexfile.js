require('dotenv').config();

const { objection } = require('citrus');
const { knexSnakeCaseMappers } = objection;

const config = {
  client: 'postgresql',
  pool: {
    min: process.env.GARDEN_POOL_MIN,
    max: process.env.GARDEN_POOL_MAX,
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ...knexSnakeCaseMappers(),
};

module.exports = {
  development: {
    ...config,
    connection: {
      database: process.env.GARDEN_NAME,
    },
  },
  staging: {
    ...config,
    connection: {
      database: process.env.GARDEN_NAME,
      user:     process.env.GARDEN_USER,
      password: process.env.GARDEN_PASSWORD,
    },
  },
  production: {
    ...config,
    connection: {
      database: process.env.GARDEN_NAME,
      user:     process.env.GARDEN_USER,
      password: process.env.GARDEN_PASSWORD,
    },
  },
};
