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
      console.error(e)
    })
})

// Specific User data
app.get('/api/users/:id', (req, res) => {
  database.getUser(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Goals data for specific user
app.get('/api/users/:id/goals', (req, res) => {
  database.getGoals(req.params.id)
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
      console.error(e)
    })
});

// Get all events for a user
app.get('/api/users/:id/events', (req, res) => {
  database.getEventsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Connections list
app.get('/api/users/:id/connections', (req, res) => {
  database.getConnectionsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// All users
app.get('/api/users', (req, res) => {
  database.allUsers()
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Get all events for a gym
app.get('/api/gyms/:id/events', (req, res) => {
  database.allGymEvents(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Create new event
app.post('/api/events', (req, res) => {
  database.createNewEvent(req.body.user_id, req.body.gym_id, req.body.description, req.body.public, req.body.time_begin, req.body.time_end)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Get all tags from event
app.get('/api/events/:id/tags', (req, res) => {
  database.getEventTags(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e)
    })
});

// Add tag to event
app.post('/api/events/:id/tags', (req, res) => {
  database.addEventTag(req.params.id, req.body.tag)
  .then((result) => {
    res.send(result);
  })
  .catch((e) => {
    console.error(e)
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));