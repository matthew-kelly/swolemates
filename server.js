require('dotenv').config()
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const port = process.env.PORT || 5000;
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require('body-parser');

app.use(cookieSession({
  name: 'session',
  keys: ['secret']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// --------------------------------------------------------------
//                         API REQUESTS
// --------------------------------------------------------------

// Login
app.post('/api/login', (req, res) => {
  database.authenticateLogin(req.body.email, req.body.password)
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.send();
      }
    })
    .catch((e) => {
      console.error(e);
    })
})

// Specific User data
app.get('/api/users/:id', (req, res) => {
  database.getUser(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Goals data for specific user
app.get('/api/users/:id/goals', (req, res) => {
  database.getGoals(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Get a specific gyms data
app.get('/api/gyms/:id', (req, res) => {
  database.getGym(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Friends list
app.get('/api/users/:id/friends', (req, res) => {
  database.getFriendsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Add a new friend
app.post('/api/users/:id/friends/new', (req, res) => {
  database.addFriend(req.params.id, req.body.friend_id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Get all confirmed events for a user
app.get('/api/users/:id/events/confirmed', (req, res) => {
  database.getConfirmedEvents(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Get all events for a user
app.get('/api/users/:id/events', (req, res) => {
  database.getEventsList(req.params.id)
  .then((result) => {
    res.send(result);
  })
  .catch((e) => {
    console.error(e);
  })
});


// Connections list
app.get('/api/users/:id/connections', (req, res) => {
  database.getConnectionsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Messages list
app.get('/api/users/:id/messages', (req, res) => {
  database.getMessagesList(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// All users
app.get('/api/users', (req, res) => {
  database.allUsers()
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Get all events for a gym
app.get('/api/gyms/:id/events', (req, res) => {
  database.allGymEvents(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Create new event
app.post('/api/events', (req, res) => {
  database.createNewEvent(req.body.user_id, req.body.gym_id, req.body.description, req.body.public, req.body.time_begin, req.body.time_end)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Get all tags from event
app.get('/api/events/:id/tags', (req, res) => {
  database.getEventTags(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

// Add tag to event
app.post('/api/events/:id/tags', (req, res) => {
  database.addEventTag(req.params.id, req.body.tag)
  .then((result) => {
    res.send(result);
  })
  .catch((e) => {
    console.error(e);
  })
});

// Get all requests for event
app.get('/api/events/:id/request', (req, res) => {
  database.getEventRequests(req.params.id)
  .then((result) => {
    res.send(result);
  })
  .catch((e) => {
    console.error(e);
  })
});

// Create new event request
app.post('/api/events/:id/request', (req, res) => {
  database.addEventRequest(req.body.event_id, req.body.requester_id)
  .then((result) => {
    res.send(result);
  })
  .catch((e) => {
    console.error(e);
  })
});

app.get('/api/notifications/:id/requests', (req, res) => {
  database.getPendingEventRequests(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});
  
// Create new message
app.post('/api/messages', (req, res) => {
  database.createNewMessage(req.body.creator_id, req.body.receiver_id, req.body.content)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});

app.post('/api/requests/:request_id/accept', (req, res) => {
  database.acceptRequest(req.params.request_id, req.body.accepted)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((e) => {
      console.error(e);
    })
});

app.post('/api/requests/:request_id/delete', (req, res) => {
  database.deleteRequest(req.params.request_id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((e) => {
      console.error(e);
    })
});

app.get('/api/requests/:event_id/requester/:requester_id', (req, res) => {
  database.getRequestRow(req.params.event_id, req.params.requester_id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
    })
});


// Delete friends
app.post('/api/friends/delete', (req, res) => {
  database.deleteFriend(req.body.user_id, req.body.friend_id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));