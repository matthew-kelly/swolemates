
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
      table.text('profile_pic');
    })
    .createTable('events', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('gym_id').references('gyms.id');
      table.text('description');
      table.boolean('public');
      table.string('time_begin');
      table.string('time_end');
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
    .createTable('messages', (table) => {
      table.increments('id');
      table.integer('creator_id').references('users.id');
      table.integer('receiver_id').references('users.id');
      table.string('content');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('event_requests', (table) => {
      table.increments('id');
      table.integer('event_id').references('events.id');
      table.integer('requester_id').references('users.id');
      table.boolean('accepted').defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('event_requests'),
    knex.schema.dropTable('connections'),
    knex.schema.dropTable('friends'),
    knex.schema.dropTable('blocks'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('goals'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('messages'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('gyms')
  ])
};
