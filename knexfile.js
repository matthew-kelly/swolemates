module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'final_project',
      user:     'final',
      password: 'final'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'final_project',
      user:     'final',
      password: 'final'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
