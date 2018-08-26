
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('gyms', (table) => {
      table.increments('id');
      table.string('name');
      table.string('address');
    })
    .createTable('users', (table) => {
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.text('bio');
      table.integer('gym_id').references('gyms.id')
      table.string('profile_pic');
    })
    .createTable('events', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('gym_id').references('gyms.id');
      table.text('description');
      table.boolean('public');
      table.dateTime('time_begin');
      table.dateTime('time_end');
    })
    .createTable('ratings', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('category1');
      table.integer('category2');
      table.integer('category3');
      table.text('comment');
    })
    .createTable('goals', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.text('goal');
    })
    .createTable('connections', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('connection_id').references('users.id');
    })
    .createTable('friends', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('friend_id').references('users.id');
    })
    .createTable('blocks', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('blocked_id').references('users.id');
    })
    .createTable('tags', (table) => {
      table.increments('id');
      table.integer('event_id').references('events.id');
      table.string('tag');
    })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ratings'),
    knex.schema.dropTable('connections'),
    knex.schema.dropTable('friends'),
    knex.schema.dropTable('blocks'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('goals'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('gyms')
  ])
};
