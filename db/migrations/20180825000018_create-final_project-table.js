
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
      table.json('connections');
      table.json('friends');
      table.json('blocked');
      table.json('goals');
    })
    .createTable('events', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('gym_id').references('gyms.id');
      table.text('description');
      table.boolean('public');
      table.dateTime('time_begin');
      table.dateTime('time_end');
      table.json('tags');
    })
    .createTable('ratings', (table) => {
      table.increments('id');
      table.integer('user_id').references('users.id');
      table.integer('category1');
      table.integer('category2');
      table.integer('category3');
      table.text('comment')
    })
};

exports.down = function(knex, Promise) {
  knex.schema
    .dropTable('ratings')
    .dropTable('events')
    .dropTable('users')
    .dropTable('gyms')
};
