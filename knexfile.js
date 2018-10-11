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
      DATABASE_URL: 'postgres://zaafqrkhrpgvkk:0d67ae50e3d9f49687c40b9c538f8687e17d3e2483e758f4fb1432993d3729f3@ec2-107-21-233-72.compute-1.amazonaws.com:5432/d3eac0gbh1gtg7',
      HEROKU_POSTGRESQL_TEAL_URL: 'postgres://cyvzkzyrgttwxi:b72560ae7f5b8c33d6e53d7ab1e91f6e3f1b63ef208a0442729a2e3f5a7e8e0b@ec2-54-225-241-25.compute-1.amazonaws.com:5432/d97afagrjhvict',
      database: 'final_project',
      user:     'final',
      password: 'final'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
