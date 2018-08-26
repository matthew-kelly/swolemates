
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(() => {
      return knex('tags').del()
    })
    .then(() => {
      return knex('goals').del()
    })
    .then(() => {
      return knex('blocks').del()
    })
    .then(() => {
      return knex('connections').del()
    })
    .then(() => {
      return knex('friends').del()
    })
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
      return knex('gyms').insert({
        name: 'SNFW Arbutus',
        address: '1230 West Broadway'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Mark',
        last_name: 'Johnson',
        email: 'mark@mark.mark',
        password: 'mark',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gym_id: 1,
        profile_pic: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/32436_117915591572150_2707307_n.jpg?_nc_cat=0&oh=f8c80b6d9a7d9b47f8fc19d394d581c2&oe=5C03FF20'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@john.john',
        password: 'john',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gym_id: 1,
        profile_pic: 'https://powerplay.co.uk/app/resources/php/timthumb/timthumb.php?src=L2FwcC9yZXNvdXJjZXMvaW1hZ2VzL3VzZXIvc2xpZGVyLzcyNS90ZWFtc2xpZGVyOTA5NTVHbG9ib0d5bS5qcGc=&w=635&h=400'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Paul',
        last_name: 'Paulson',
        email: 'paul@paul.paul',
        password: 'paul',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gym_id: 1,
        profile_pic: 'https://powerplay.co.uk/app/resources/php/timthumb/timthumb.php?src=L2FwcC9yZXNvdXJjZXMvaW1hZ2VzL3VzZXIvc2xpZGVyLzcyNS90ZWFtc2xpZGVyOTA5NTVHbG9ib0d5bS5qcGc=&w=635&h=400'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Keanu',
        last_name: 'Reeves',
        email: 'keanu@reeves.reeves',
        password: 'keanu',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://imgix.ranker.com/user_node_img/50013/1000250501/original/keanu-reeves-doesn-t-want-your-money-all-people-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Terry',
        last_name: 'Crews',
        email: 'terry@crews.crews',
        password: 'terry',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg'
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 1,
        goal: "I wanna get jacked."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 1,
        goal: "Cultivate mass."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Gotta get yoked."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Look good."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Cultivate mass."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Cultivate more mass."
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 2
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 3
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 5
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 2,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 3,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 2,
        connection_id: 3
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 3,
        connection_id: 2
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 4,
        friend_id: 3
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 4,
        friend_id: 2
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 4,
        connection_id: 1
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 4,
        connection_id: 5
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 5,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 5,
        connection_id: 2
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 5,
        connection_id: 3
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: true,
        time_begin: 'August 30, 2018 12:00:00',
        time_end: 'August 30, 2018 13:00:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 1,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: true,
        time_begin: 'August 30, 2018 12:00:00',
        time_end: 'August 30, 2018 13:00:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 2,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 2,
        tag: "Shoulders"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: 'August 29, 2018 12:00:00',
        time_end: 'August 29, 2018 14:00:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 3,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 3,
        tag: "Tris"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: 'August 28, 2018 14:00:00',
        time_end: 'August 28, 2018 15:00:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 4,
        tag: "Back"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: true,
        time_begin: 'August 29, 2018 19:30:00',
        time_end: 'August 29, 2018 20:30:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 5,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: false,
        time_begin: 'September 1, 2018 11:30:00',
        time_end: 'September 1, 2018 12:30:00'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 6,
        tag: "HIT"
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
        user_id: 2,
        category1: 1,
        category2: 1,
        category3: 1,
        comment: 'Distracted the entire time.'
      });
    })
    .then(() => {
      return knex('ratings').insert({
        user_id: 2,
        category1: 2,
        category2: 5,
        category3: 5,
        comment: 'Living his best life.'
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
