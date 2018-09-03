
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
        profile_pic: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/32436_117915591572150_2707307_n.jpg?_nc_cat=0&oh=f8c80b6d9a7d9b47f8fc19d394d581c2&oe=5C03FF20'
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
      return knex('users').insert({
        first_name: 'Arnold',
        last_name: 'Schwarzenegger',
        email: 'arnie@arnie.arnie',
        password: 'arnie',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 2,
        profile_pic: 'https://24smi.org/public/media/2018/4/9/06-9j5po29.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Ronda',
        last_name: 'Rousey',
        email: 'ronda@rousey.rousey',
        password: 'ronda',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 2,
        profile_pic: 'https://tribktla.files.wordpress.com/2015/09/rousey.jpg?quality=85&strip=all&strip=all'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Yuna',
        last_name: 'Kim',
        email: 'yuna@kim.kim',
        password: 'yuna',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 2,
        profile_pic: 'http://www.nbcolympics.com/sites/default/files/field_image/19April2017/yuna-kim-ambassador-pyc-flickr-1920-15691841066_a142e51565_o.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Simone',
        last_name: 'Biles',
        email: 'simone@biles.biles',
        password: 'simone',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 2,
        profile_pic: 'https://usagym.org/pages/athletes/athletephotos/164887.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Chris',
        last_name: 'Hadfield',
        email: 'chris@hadfield.hadfield',
        password: 'chris',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 3,
        profile_pic: 'http://www.spacefacts.de/bios/portraits_hi/international/hadfield_chris.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Robert',
        last_name: 'Thirsk',
        email: 'robert@thirsk.thirsk',
        password: 'robert',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 3,
        profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Robert_thirsk_v2.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Don',
        last_name: 'Cherry',
        email: 'don@cherry.cherry',
        password: 'don',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 3,
        profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsbOlAbIIuSjxiyEvAU31CHaQP0KM1emKTK91q5NeWVIpD7CJ'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Henrik',
        last_name: 'Sedin',
        email: 'henrik@sedin.sedin',
        password: 'henrik',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 3,
        profile_pic: 'http://www.hockeydb.com/ihdb/photos/henrik-sedin-2017-39.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Daniel',
        last_name: 'Sedin',
        email: 'daniel@sedin.sedin',
        password: 'daniel',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 3,
        profile_pic: 'http://www.hockeydb.com/ihdb/photos/daniel-sedin-2018-39.jpg'
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
        profile_pic: 'https://www.thoughtco.com/thmb/pYLUnM7lQ6ef-ShHTdunHcExcw0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg'
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
        profile_pic: 'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125'
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
        profile_pic: 'https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg/revision/latest?cb=20180430181839'
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
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 6
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 6,
        friend_id: 1
      });
    })
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
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 15
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 15,
        friend_id: 1
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 1,
        friend_id: 16
      });
    })
    .then(() => {
      return knex('friends').insert({
        user_id: 16,
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
        requester_id: 2,
        accepted: true
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
