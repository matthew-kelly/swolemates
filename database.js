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

    //Returns user data for Events list
    getEventsList: (id) => {
      return knex.select('*')
      .from('events')
      .join('users', 'user_id', '=', 'users.id')
      .where({
        user_id: id
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

    // Return list of all events for a gym
    allGymEvents: (gym_id) => {
      return knex.select('*')
        .from('events')
        .where({
          gym_id: gym_id
        })
    },

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
        .returning('id')
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

    // Get user's pending event requests
    getPendingEventRequests: (user_id) => {
      return knex.select('*')
        .from('event_requests')
        .join('events', 'event_id', '=', 'events.id')
        .join('users', 'users.id', '=', 'requester_id')
        .where({
          user_id: user_id
        })
    },

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
        // .then((res) => {
        //   knex('friends')
        //     .insert({
        //       user_id: user_id,
        //       friend_id: friend_id
        //     }, {
        //       user_id: friend_id,
        //       friend_id: user_id
        //     })
        // })
    },

    deleteRequest: (request_id) => {
      return knex.select('*')
        .from('event_requests')
        .where({
          id: request_id
        })
        .del()
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