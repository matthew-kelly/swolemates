
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(() => {
      return knex('event_requests').del()
    })
    .then(() => {
      return knex('goals').del()
    })
    .then(() => {
      return knex('blocks').del()
    })
    .then(() => {
      return knex('messages').del()
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
        name: 'SNFW Kitsilano',
        address: '2150 W Broadway'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'SNFW Cambie',
        address: '555 West 12th Ave'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'SNFW Coquitlam',
        address: '111-3000 Lougheed Hwy'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'SNFW Downtown Sports Club',
        address: '610 Granville St'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'SNFW Howe & Davie',
        address: '1214 Howe St'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'SNFW Yaletown',
        address: '1085 Homer St'
      });
    })
    .then(() => {
      return knex('gyms').insert({
        name: 'FitForever',
        address: '1615 E 1st Ave'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Mark',
        last_name: 'Johnson',
        email: 'mark@mark.mark',
        password: 'mark',
        bio: 'Hi, my name is Mark. I am new to Vancouver and am keen to meet some like-minded gym go-ers. Currently working in and around Yaletown so working out somewhere like the Steve Nash Club near the 7/11 would be ideal. Find me posting workouts in the calender pretty much everyday most weeks. "You miss 100% of the shots you don\'t take" -- Wayne Gretzky -- Michael Scott',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/c4ca4238a0b923820dcc509a6f75849b.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@john.john',
        password: 'john',
        bio: 'I want to be really strong',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/c81e728d9d4c2f636f067f89cc14862c.svg'
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
        profile_pic: 'https://vanillicon.com/v2/eccbc87e4b5ce2fe28308fd9f2a7baf3.svg'
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
        profile_pic: 'https://vanillicon.com/v2/a87ff679a2f3e71d9181a67b7542122c.svg'
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
        profile_pic: 'https://vanillicon.com/v2/e4da3b7fbbce2345d7772b0674a318d5.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Arnold',
        last_name: 'Schwarzenegger',
        email: 'arnie@arnie.arnie',
        password: 'arnie',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 2,
        profile_pic: 'https://vanillicon.com/v2/1679091c5a880faf6fb5e6087eb1b2dc.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Ronda',
        last_name: 'Rousey',
        email: 'ronda@rousey.rousey',
        password: 'ronda',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/8f14e45fceea167a5a36dedd4bea2543.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Yuna',
        last_name: 'Kim',
        email: 'yuna@kim.kim',
        password: 'yuna',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/c9f0f895fb98ab9159f51fd0297e236d.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Simone',
        last_name: 'Biles',
        email: 'simone@biles.biles',
        password: 'simone',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/45c48cce2e2d7fbdea1afc51c7c6ad26.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Chris',
        last_name: 'Hadfield',
        email: 'chris@hadfield.hadfield',
        password: 'chris',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/d3d9446802a44259755d38e6d163e820.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Robert',
        last_name: 'Thirsk',
        email: 'robert@thirsk.thirsk',
        password: 'robert',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/6512bd43d9caa6e02c990b0a82652dca.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Don',
        last_name: 'Cherry',
        email: 'don@cherry.cherry',
        password: 'don',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/c20ad4d76fe97759aa27a0c99bff6710.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Henrik',
        last_name: 'Sedin',
        email: 'henrik@sedin.sedin',
        password: 'henrik',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/c51ce410c124a10e0db5e4b97fc2af39.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Daniel',
        last_name: 'Sedin',
        email: 'daniel@sedin.sedin',
        password: 'daniel',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://vanillicon.com/v2/aab3238922bcc25a6f606eb525ffdc56.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Obi-Wan',
        last_name: 'Kenobi',
        email: 'obi-wan@kenobi.kenobi',
        password: 'obi-wan',
        bio: 'Hello there.',
        gym_id: 4,
        profile_pic: 'https://vanillicon.com/v2/9bf31c7ff062936a96d3c8bd1f8f2ff3.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Master',
        last_name: 'Yoda',
        email: 'master@yoda.yoda',
        password: 'master',
        bio: 'Be fit, you must.',
        gym_id: 4,
        profile_pic: 'https://vanillicon.com/v2/c74d97b01eae257e44aa9d5bade97baf.svg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Count',
        last_name: 'Dooku',
        email: 'count@dooku.dooku',
        password: 'count',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 4,
        profile_pic: 'https://vanillicon.com/v2/70efdf2ec9b086079795c442636b55fb.svg'
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
      return knex('goals').insert({
        user_id: 16,
        goal: "Be fit, I must."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 15,
        goal: "Have the higher ground."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 15,
        goal: "Train the best jedi."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 5,
        goal: "Be a walking tank."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 6,
        goal: "I want to be great."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 11,
        goal: "I want to do really well."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 15,
        goal: "Be as strong as my mitochlorian count."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 16,
        goal: "Be strong, I must."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 7,
        goal: "Be as humanly fit as possible."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 6,
        goal: "Cultivate strength."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 8,
        goal: "Cultivate a lot of strength."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 9,
        goal: "Be fast."
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 10,
        goal: "Be really fast."
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
        user_id: 2,
        friend_id: 1
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
        user_id: 3,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 4
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 4,
        friend_id: 1
      });
    })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 1,
    //     friend_id: 6
    //   });
    // })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 6,
    //     friend_id: 1
    //   });
    // })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 7
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 7,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 8
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 8,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 9
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 9,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 10
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 10,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 11
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 11,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 12
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 12,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 13
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 13,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 14
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 14,
        friend_id: 1
      });
    })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 1,
    //     friend_id: 15
    //   });
    // })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 15,
    //     friend_id: 1
    //   });
    // })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 1,
    //     friend_id: 16
    //   });
    // })
    // .then(() => {
    //   return knex('friends').insert({
    //     user_id: 16,
    //     friend_id: 1
    //   });
    // })
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
        user_id: 3,
        friend_id: 4
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 15,
        friend_id: 16
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 16,
        friend_id: 15
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 3,
        connection_id: 5
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 5,
        connection_id: 3
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 4,
        connection_id: 5
      });
    })
    .then(() => {
      return knex('connections').insert({
        user_id: 5,
        connection_id: 4
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: true,
        time_begin: '20180908 1100',
        time_end: '20180908 1500'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 1,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 1,
        tag: "Back"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: true,
        time_begin: '20180909 1000',
        time_end: '20180909 1200'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 2,
        tag: "Cardio"
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
        time_begin: '20180910 1700',
        time_end: '20180910 1830'
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
        tag: "Triceps"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat.',
        public: true,
        time_begin: '20180911 1400',
        time_end: '20180911 1500'
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
        time_begin: '20180912 1930',
        time_end: '20180912 2030'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 5,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 5,
        tag: "Stretching"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Donec eu ex nec velit dignissim semper.',
        public: false,
        time_begin: '20180907 1300',
        time_end: '20180907 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 6,
        tag: "HIT"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 16,
        gym_id: 4,
        description: 'Work everything, I must',
        public: true,
        time_begin: '20180907 1300',
        time_end: '20180907 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 7,
        tag: "ORM"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 6,
        gym_id: 1,
        description: 'Working on my fitness (be my witness?)',
        public: true,
        time_begin: '20180908 1300',
        time_end: '20180908 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 8,
        tag: "ORM"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 8,
        tag: "HIT"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 6,
        gym_id: 1,
        description: 'Working on my fitness (be my witness?)',
        public: true,
        time_begin: '20180908 1300',
        time_end: '20180908 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 9,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 9,
        tag: "HIT"
      });
    })
    .then(() => {
      return knex('messages').insert({
        creator_id: 1,
        receiver_id: 2,
        content: 'His parents obviously failed him. He sucks.',
        created_at: '2018-08-29T12:00:00+00:00'
      });
    })
    .then(() => {
      return knex('messages').insert({
        creator_id: 2,
        receiver_id: 1,
        content: 'My parents did not.',
        created_at: '2018-08-30T12:00:00+00:00'
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 5,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 4,
        accepted: false
      });
    })
    // .then(() => {
    //   return knex('event_requests').insert({
    //     event_id: 1,
    //     requester_id: 6,
    //     accepted: false
    //   });
    // })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 7,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 8,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 9,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 10,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 11,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 1,
        requester_id: 12,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 2,
        requester_id: 2,
        accepted: false
      });
    })
    .then(() => {
      return knex('event_requests').insert({
        event_id: 4,
        requester_id: 2,
        accepted: false
      });
    })
};
