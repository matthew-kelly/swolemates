
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(() => {
      return knex('events').del();
    })
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('gyms').del()
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'Globo Gym',
        address: '123 Fourth Avenue'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Mark',
        last_name: 'Johnson',
        email: 'mark@mark.mark',
        password: 'mark',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/32436_117915591572150_2707307_n.jpg?_nc_cat=0&oh=f8c80b6d9a7d9b47f8fc19d394d581c2&oe=5C03FF20',
        connections: JSON.stringify([2]),
        goals: JSON.stringify(['Get jacked', 'Look good'])
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@john.john',
        password: 'john',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://powerplay.co.uk/app/resources/php/timthumb/timthumb.php?src=L2FwcC9yZXNvdXJjZXMvaW1hZ2VzL3VzZXIvc2xpZGVyLzcyNS90ZWFtc2xpZGVyOTA5NTVHbG9ib0d5bS5qcGc=&w=635&h=400',
        connections: JSON.stringify([1]),
        goals: JSON.stringify(['Get super jacked', 'Look super good'])
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: 'August 30, 2018 12:00:00',
        time_end: 'August 30, 2018 13:00:00',
        tags: JSON.stringify(['Legs', 'Quads'])
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: 'August 28, 2018 14:00:00',
        time_end: 'August 28, 2018 15:00:00',
        tags: JSON.stringify(['Cardio'])
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: 'August 29, 2018 19:30:00',
        time_end: 'August 29, 2018 20:30:00',
        tags: JSON.stringify(['Cardio', 'Stretching'])
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 1,
        category1: 4,
        category2: 4,
        category3: 5,
        comment: 'He was great to work out with. Super nice guy.'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 1,
        category1: 3,
        category2: 4,
        category3: 4,
        comment: 'Pretty good, kind of cocky.'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 1,
        category1: 5,
        category2: 5,
        category3: 5,
        comment: 'Absolutely incredible lad.'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 2,
        category1: 2,
        category2: 1,
        category3: 2,
        comment: 'This guy sucks. Seriously.'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 2,
        category1: 3,
        category2: 2,
        category3: 3,
        comment: 'Didn\'t really vibe with him'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 2,
        category1: 1,
        category2: 1,
        category3: 2,
        comment: 'His parents obviously failed him. He sucks.'
      });
    })
};
