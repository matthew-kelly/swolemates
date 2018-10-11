
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
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM25.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@john.john',
        password: 'john',
        bio: 'Originally from Chicago. I love playing tennis and loud music. Find me on the court any time of day! During my down-time I like to pretend I am a dog photographer. Trying to work on my fitness goals and find like-minded gym-goers!',
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM7.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Paul',
        last_name: 'Paulson',
        email: 'paul@paul.paul',
        password: 'paul',
        bio: 'Originally from Miami. I love black and white classics, chillout music and green tea. I am a 47-year-old former health centre receptionist who enjoys escapology, cookery and jigsaw puzzles. Energetic and friendly, but can also be a bit standoffish.',
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM20.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane@jane.jane',
        password: 'jane',
        bio: "Spent several months exporting Uno for no pay. Uniquely-equipped for creating marketing channels for basketballs in Minneapolis, MN. Spent a year building barbie dolls in Orlando, FL. Spent the better part of the 90's writing about Slinkies for fun and profit. Have a strong interest in writing about xylophones in Suffolk, NY. Spent two years writing about bassoons in Washington, DC.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF2.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Terry',
        last_name: 'Crews',
        email: 'terry@crews.crews',
        password: 'terry',
        bio: "Was quite successful at lecturing about rocking horses on Wall Street. Spent high school summers managing pogo sticks in Bethesda, MD. Enthusiastic about getting my feet wet with xylophones worldwide. Spent 2001-2007 getting to know rocks in Hanford, CA. Spent a weekend lecturing about rocking horses in Nigeria. Spent college summers consulting about rubik's cubes in Prescott, AZ.",
        gym_id: 1,
        profile_pic: 'http://bernhardtdesign.com/wp-content/uploads/2017/08/DesignerHeadshot_TerryCrews.jpg'
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
        first_name: 'Ellen',
        last_name: 'Tarly',
        email: 'ellen@ellen.ellen',
        password: 'ellen',
        bio: "Was quite successful at lecturing about rocking horses on Wall Street. Spent high school summers managing pogo sticks in Bethesda, MD. Enthusiastic about getting my feet wet with xylophones worldwide. Spent 2001-2007 getting to know saliva in Hanford, CA. Spent a weekend lecturing about rocking horses in Nigeria. Spent college summers consulting about rubik's cubes in Prescott, AZ.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF27.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Yuna',
        last_name: 'Lee',
        email: 'yuna@lee.lee',
        password: 'yuna',
        bio: "Spent 2001-2004 getting my feet wet with fatback for the underprivileged. Was quite successful at buying and selling wooden horses in Bethesda, MD. Had moderate success getting to know jigsaw puzzles in Cuba. Have a strong interest in merchandising the elderly in Ohio. Spent 2001-2008 managing Yugos for fun and profit. Once had a dream of creating marketing channels for trumpets in Phoenix, AZ.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF31.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Rachel',
        last_name: 'Nash',
        email: 'rachel@rachel.rachel',
        password: 'rachel',
        bio: "Crossed the country building Magic 8-Balls on Wall Street. Had a brief career working with toy soldiers in New York, NY. Spent 2001-2005 building carnival rides in the financial sector. Spent 2002-2009 lecturing about fried chicken in Suffolk, NY. Set new standards for getting to know tinker toys in West Palm Beach, FL. Spent 2001-2008 training dogmas in the financial sector.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF41.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Robert',
        last_name: 'Field',
        email: 'robert@field.field',
        password: 'robert',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex nec velit dignissim semper. Duis iaculis odio ac massa tincidunt dictum. Nullam ornare sapien et tortor gravida, ut tincidunt mi volutpat. Vivamus id ex orci. Sed urna felis, convallis a porta quis, elementum eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque gravida, libero et lacinia rutrum, turpis nisl dictum libero, vitae vulputate purus turpis et augue. Donec tempus nisi justo, at dapibus lorem hendrerit sit amet.',
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM47.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Sally',
        last_name: 'Jones',
        email: 'sally@sally.sally',
        password: 'sally',
        bio: "Spent 2001-2004 working with puppets in New York, NY. Once had a dream of lecturing about bassoons in Minneapolis, MN. Spent a weekend investing in barbie dolls for fun and profit. Spent high school summers building human hair in the aftermarket. Once had a dream of analyzing gravy in Washington, DC. A real dynamo when it comes to merchandising barbie dolls for farmers.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF45.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Jessie',
        last_name: 'Chase',
        email: 'jessie@jessie.jessie',
        password: 'jessie',
        bio: "Spent the better part of the 90's analyzing etch-a-sketches in Washington, DC. Won several awards for creating marketing channels for easy-bake-ovens for fun and profit. Spent high school summers buying and selling shaving cream in Ocean City, NJ. Spoke at an international conference about supervising the production of basketballs in Hanford, CA. Once had a dream of building human brains in the UK. In 2008 I was developing bagpipes in Africa.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageF21.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Jacob',
        last_name: 'Red',
        email: 'jacob@jacob.jacob',
        password: 'jacob',
        bio: "Crossed the country promoting dogmas in Deltona, FL. Spent 2002-2009 donating methane in West Palm Beach, FL. Garnered an industry award while building tattoos in Tampa, FL. Spent 2001-2007 working with puppets in Fort Lauderdale, FL. Had a brief career buying and selling bassoons for fun and profit. Spent childhood lecturing about trumpets in the financial sector.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM17.jpg'
      });
    })
    .then(() => {
      return knex('users').insert({
        first_name: 'Daniel',
        last_name: 'Blue',
        email: 'daniel@daniel.daniel',
        password: 'daniel',
        bio: "Spent 2001-2008 supervising the production of dust in Miami, FL. Spent college summers building g.i. joes in Miami, FL. Spent 2002-2010 creating marketing channels for wool in Suffolk, NY. In 2009 I was testing the market for Slinkies in Tampa, FL. Uniquely-equipped for promoting bassoons in Hanford, CA. Won several awards for working on clip-on ties in Gainesville, FL.",
        gym_id: 1,
        profile_pic: 'https://www.designskilz.com/random-users/images/imageM37.jpg'
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
        goal: "Complete a marathon by June"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 1,
        goal: "Do a hike a week"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 1,
        goal: "Do a sub-thirty grind"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 1,
        goal: "Up my bench to 315 lbs"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Run a 5-minute mile"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Prepare for my race in July"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Up my freestyle 100m dash speed"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 2,
        goal: "Increase finger dexterity and core strength"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Increase core strength"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Join a weekly running group"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Increase my flexibility"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Increase finger strength"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 3,
        goal: "Complete a yellow climbing route"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 4,
        goal: "Complete a blue climbing route"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 4,
        goal: "Run a 5 minute mile"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 4,
        goal: "Up my vertical jump"
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
        goal: "Educate and teach others about fitness"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 5,
        goal: "Join a running group"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 5,
        goal: "Do my first Iron-man"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 5,
        goal: "Swim the English channel"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 6,
        goal: "Complete a marathon by June"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 6,
        goal: "Be able to cycle the tour-de-France, if I have to"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 6,
        goal: "Double my Beep-Test score"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 7,
        goal: "Trying out for the soccer team - need to up my cardio!"
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
        goal: "Join the varsity basketball team - need to up my vertical too!"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 8,
        goal: "Just generally be stronger in general"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 8,
        goal: "Want to be able to complete my daily crossfit challenges without breaking a sweat!"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 9,
        goal: "My ultimate frisbee team needs a cherry picker"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 9,
        goal: "Also working on my vertical for the same reason"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 10,
        goal: "Want to get my deadlifts up to 405 by mid-October"
      });
    })
    .then(() => {
      return knex('goals').insert({
        user_id: 10,
        goal: "Master stretching before and after a workout"
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
        description: 'All my friends keep telling me I have bad form, so I am looking to improve that. Got any good pointers? If so, join me!',
        public: true,
        time_begin: '20180908 1100',
        time_end: '20180908 1500'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 1,
        tag: "Shoulders"
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
        description: 'I want to become a long distance runner, but the treadmill can be so demotivating to do alone. Come with!',
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
        tag: "Stretching"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Looking for a spotting partner who loves dad jokes as much as I do.',
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
        user_id: 4,
        gym_id: 1,
        description: 'Need someone to hold me accountable for going to the gym. Need that motivation!',
        public: true,
        time_begin: '20180911 1400',
        time_end: '20180911 1500'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 4,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'Trying to get my reps up, while keeping the overall vibe chill. Meatheads need not apply.',
        public: true,
        time_begin: '20180912 1930',
        time_end: '20180912 2030'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 5,
        tag: "Shoulders"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 5,
        tag: "Biceps"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Not ready to slow down yet even though beach season is ending.',
        public: false,
        time_begin: '20180907 1300',
        time_end: '20180907 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 6,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 6,
        tag: "Back"
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
        tag: "Barre"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 6,
        gym_id: 1,
        description: 'Looking to find a new running partner. Gotta keep pace, I am going for a sub-five minute mile.',
        public: true,
        time_begin: '20180908 1300',
        time_end: '20180908 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 8,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 8,
        tag: "HIIT"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 6,
        gym_id: 1,
        description: 'Mindfulness is key!',
        public: true,
        time_begin: '20180908 1300',
        time_end: '20180908 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 9,
        tag: "Yoga"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 9,
        tag: "Stretching"
      });
    })
    .then(() => {
      return knex('messages').insert({
        creator_id: 1,
        receiver_id: 2,
        content: 'So we are all set for the workout?',
        created_at: '2018-08-29T12:00:00+00:00'
      });
    })
    .then(() => {
      return knex('messages').insert({
        creator_id: 2,
        receiver_id: 1,
        content: 'Yeah, I can not wait!',
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
    .then(() => {
      return knex('events').insert({
        user_id: 5,
        gym_id: 1,
        description: 'Looking for friendly and helpful motivation, but do not go too easy on me.',
        public: false,
        time_begin: '20180907 1300',
        time_end: '20180907 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Want a partner to workout with who is not too intense.',
        public: false,
        time_begin: '20180908 1300',
        time_end: '20180908 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 7,
        gym_id: 1,
        description: 'Looking for a new nutrition plan, let me know if you have any good recipes.',
        public: false,
        time_begin: '20180909 1300',
        time_end: '20180909 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 8,
        gym_id: 1,
        description: 'Just trying to get my reps up, anyone who is naturally super motivating would be a huge help!',
        public: false,
        time_begin: '20180910 1300',
        time_end: '20180910 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'I want to become a long distance runner, so I need someone who is okay with chatting during their workout.',
        public: false,
        time_begin: '20180911 1300',
        time_end: '20180911 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'I am new at this. If you are intense, you are better off looking elsewhere. Want to workout with people who can keep the gym fun!',
        public: false,
        time_begin: '20180916 1300',
        time_end: '20180916 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 10,
        tag: "Triceps"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 10,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 11,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 11,
        tag: "Calisthenics"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 12,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 13,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 14,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 4,
        gym_id: 1,
        description: 'Apply only if you are committed and focus. I want an intense workout with little distraction.',
        public: false,
        time_begin: '20180913 1300',
        time_end: '20180913 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 5,
        gym_id: 1,
        description: 'Looking for a workout partner who loves dad jokes as much as I do.',
        public: false,
        time_begin: '20180914 1300',
        time_end: '20180914 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Looking for a workout partner who loves bad jokes as much as I do.',
        public: false,
        time_begin: '20180915 1300',
        time_end: '20180915 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 4,
        gym_id: 1,
        description: 'Looking for a workout partner who also hates leg day as much as I do.',
        public: false,
        time_begin: '20180916 1300',
        time_end: '20180916 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'Does anyone actually like leg day? My sources say no. I do not want to suffer alone haha.',
        public: false,
        time_begin: '20180917 1300',
        time_end: '20180917 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 8,
        gym_id: 1,
        description: 'Trying to work on my Grouse Grind time.',
        public: false,
        time_begin: '20180918 1300',
        time_end: '20180918 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 1,
        gym_id: 1,
        description: 'Trying to work on my endurance.',
        public: false,
        time_begin: '20180919 1300',
        time_end: '20180919 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 2,
        gym_id: 1,
        description: 'Trying to work on my Grouse Grind time.',
        public: false,
        time_begin: '20180920 1300',
        time_end: '20180920 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 3,
        gym_id: 1,
        description: 'Trying to work on my distance.',
        public: false,
        time_begin: '20180921 1300',
        time_end: '20180921 1430'
      });
    })
    .then(() => {
      return knex('events').insert({
        user_id: 7,
        gym_id: 1,
        description: 'I honestly can not even touch my toes. It is embarassing.',
        public: false,
        time_begin: '20180922 1300',
        time_end: '20180922 1430'
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 15,
        tag: "Back"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 16,
        tag: "Biceps"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 17,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 18,
        tag: "Chest"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 19,
        tag: "Yoga"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 20,
        tag: "Legs"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 21,
        tag: "Triceps"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 22,
        tag: "Traps"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 23,
        tag: "Shoulders"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 24,
        tag: "Cardio"
      });
    })
    .then(() => {
      return knex('tags').insert({
        event_id: 25,
        tag: "Stretching"
      });
    })
};
