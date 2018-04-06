const { knexSnakeCaseMappers } = require('objection');

const config = {
  client: 'postgresql',
  pool: {
    min: 2,
    max: 10
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
      database: 'garden',
    },
  },
  staging: {
    ...config,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
  },
  production: {
    ...config,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
  },
};
