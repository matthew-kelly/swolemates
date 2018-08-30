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

    //Create new message
    createNewMessage: (creator_id, receiver_id, content) =>{
      return knex('messages')
        .insert({
          creator_id: creator_id,
          receiver_id: receiver_id,
          content: content
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
        .returning('id')
    },
  }
}