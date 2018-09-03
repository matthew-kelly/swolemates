module.exports = function knexData(knex) {
  return {
    // Return user data for Friends list
    getFriendsList: (id) => {
      return knex.select('*')
      .from('friends')
      .join('users', 'friend_id', '=', 'users.id')
      .where({
        user_id: id
      })
    },

    // Returns user data for Events list
    getEventsList: (id) => {
      return knex.select(knex.raw('events.id AS id'), knex.raw('events.gym_id AS gym_id'), 'user_id', 'public', 'description', 'time_begin', 'time_end', 'first_name', 'last_name')
      .from('events')
      .join('users', 'user_id', '=', 'users.id')
      .where({
        user_id: id
      })
    },

    //get new Event
    getNewEvent: (id) => {
      return knex.select('*')
      .from('events')
      .where({
        id: id
      })
    },

    // Return user data for Connections list
    getConnectionsList: (id) => {
      return result = knex.select('*')
      .from('connections')
      .join('users', 'connection_id', '=', 'users.id')
      .where({
        user_id: id
      })
    },

    // Return user data for Messages list
    getMessagesList: (id) => {
      return result = knex.select('*')
      .from('messages')
      .where({
        creator_id: id
      })
      .orWhere({
        receiver_id: id
      })
    },

    // Authenticate login
    authenticateLogin: (email, password) => {
      const result = knex.select('id', 'first_name', 'last_name', 'bio', 'gym_id', 'profile_pic')
      .from('users')
      .where({
        email,
        password
      })
      if (result) {
        return result;
      }
    },

    // Return user and goals data for one user
    getUser: (id) => {
      return knex.select('*')
      .from('users')
      .where({
        id: id
      })
    },

    // Return all goals for one user
    getGoals: (id) => {
      return knex.select('*')
      .from('goals')
      .where({
        user_id: id
      })
    },

    // Return Gym information for a user
    getGym: (id) => {
      return knex.select('*')
      .from('gyms')
      .where({
        id: id
      })
    },

    // Return list of all users
    allUsers: () => {
      return knex.select('*')
        .from('users')
    },

    // Return list of all events
    allEvents: () => {
      return knex.select('*')
        .from('events')
    },

    // Return list of all events for a gym // ORIGINAL
    allGymEvents: (gym_id) => {
      return knex.select(knex.raw('events.id AS id'), knex.raw('events.gym_id AS gym_id'), 'user_id', 'public', 'time_begin', 'time_end', 'first_name', 'last_name', 'description')
        .from('events')
        .join('users', 'user_id', '=', 'users.id')
        .whereRaw('events.gym_id = ?', [gym_id])
    },

    // // Return list of all events for a gym
    // allGymEvents: (gym_id) => {
    //   return knex.select(knex.raw('events.id AS id'), knex.raw('events.gym_id AS gym_id'), knex.raw('tags.id AS tag_id'), 'user_id', 'public', 'time_begin', 'time_end', 'tag')
    //     .from('events')
    //     .join('users', 'user_id', '=', 'users.id')
    //     .join('tags', 'event_id', '=', 'events.id')
    //     .whereRaw('events.gym_id = ?' ,[gym_id])
    // },

    // Create a new event
    createNewEvent: (user_id, gym_id, description, public, time_begin, time_end) => {
      return knex('events')
        .insert({
          user_id: user_id,
          gym_id: gym_id,
          description: description,
          public: public,
          time_begin: time_begin,
          time_end: time_end
        })
        .returning('id')
    },

    getConfirmedEvents: (user) => {
      return knex.select(knex.raw('events.id AS event_id'), knex.raw('event_requests.id AS request_id'), 'time_begin', 'time_end', 'first_name', 'last_name', 'requester_id')
        .from('events')
        .join('event_requests', 'event_id', '=', 'events.id')
        .join('users', 'requester_id', '=', 'users.id')
        .where({
          user_id: user,
          accepted: true
        })
    },

    //Create new message
    createNewMessage: (creator_id, receiver_id, content) =>{
      return knex('messages')
        .insert({
          creator_id: creator_id,
          receiver_id: receiver_id,
          content: content
        })
        .returning(['creator_id','receiver_id','content','created_at'])
    },

    //Create new User
    createNewUser: (first_name, last_name, email, password, bio, gym_id, profile_pic) => {
      return knex('users')
        .insert({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          bio: bio,
          gym_id: gym_id,
          profile_pic: profile_pic
        })
    },

    // Get all tags for event
    getEventTags: (event_id) => {
      return knex('*')
        .from('tags')
        .where({
          event_id: event_id
        })
    },

    // Add tag to event
    addEventTag: (event_id, tag) => {
      return knex('tags')
        .insert({
          event_id: event_id,
          tag: tag
        })
        .returning('tag')
    },

    deleteFriend: (user_id, friend_id) => {
      return knex('friends')
        .where({
          user_id: user_id,
          friend_id: friend_id
        })
        .andWhere({
          user_id: friend_id,
          friend_id: user_id
        })
        .del()
    },

    // Create new event request
    getEventRequests: (event_id) => {
      return knex('*')
        .from('event_requests')
        .where({
          event_id: event_id
        })
    },

    // Create new event request
    addEventRequest: (event_id, requester_id) => {
      return knex('event_requests')
        .insert({
          event_id: event_id,
          requester_id: requester_id
        })
        .returning('id')
    },

// // Get user's pending event requests
//     getPendingEventRequests: (user_id) => {
//       return knex.select(knex.raw('event_requests.id AS request_id'), knex.raw('events.id AS event_id'), 'requester_id', 'first_name', 'last_name', 'time_begin', 'time_end', 'profile_pic')
//         .from('event_requests')
//         .join('events', 'event_id', '=', 'events.id')
//         .join('users', 'requester_id', '=', 'users.id')
//         .where({
//           user_id: user_id
//         })
//     },

        // Get user's pending event requests OLD
    getPendingEventRequests: (user_id) => {
      return knex.select(knex.raw('event_requests.id AS request_id'), knex.raw('users.id AS id'), knex.raw('users.gym_id AS gym_id'), knex.raw('events.id AS event_id'), 'requester_id', 'first_name', 'last_name', 'bio', 'time_begin', 'time_end', 'profile_pic', 'accepted')
        .from('event_requests')
        .join('events', 'event_id', '=', 'events.id')
        .join('users', 'users.id', '=', 'requester_id')
        .where({
          user_id: user_id
        })
    },

    // // Get request row
    // getRequestRow: (event_id, requester_id) => {
    //   return knex.select(knex.raw('event_requests.id AS id'), 'requester_id', 'event_id', 'accepted', 'first_name', 'last_name')
    //     .from('event_requests')
    //     .join('users', 'users.id', '=', 'requester_id')
    //     .where({
    //       event_id: event_id,
    //       requester_id: requester_id
    //     })
    // },

    // Get request row
    getRequestRow: (event_id, requester_id) => {
      return knex.select('*')
        .from('event_requests')
        .where({
          event_id: event_id,
          requester_id: requester_id
        })
    },

    acceptRequest: (request_id, accepted) => {
      return knex.select('*')
        .from('event_requests')
        .where({
          id: request_id
        })
        .update({
          accepted: accepted
        })
    },

    deleteRequest: (request_id) => {
      return knex.select('*')
        .from('event_requests')
        .where({
          id: request_id
        })
        .del()
    },

    updateUserBio: (user_id, user_bio) => {
      return knex.select('*')
        .from('users')
        .where({
          id: user_id
        })
        .update({
          bio: user_bio
        })
    },

    updateUserProfilePic: (user_id, user_profile_pic) => {
      return knex.select('*')
        .from('users')
        .where({
          id: user_id
        })
        .update({
          profile_pic: user_profile_pic
        })
    },

     // Add a new friend
     addFriend: (user, friend) => {
      return knex('friends')
        .insert([{
          user_id: user,
          friend_id: friend
        }, {
          user_id: friend,
          friend_id: user
        }])
    },
  }
}