require('dotenv').config()
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Test Request
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// Specific User data
app.get('/api/users/:id', (req, res) => {
  database.getUser(req.params.id)
    .then((result) => {
      res.send(result);
    })
});

// Goals data for specific user
app.get('/api/users/:id/goals', (req, res) => {
  database.getGoals(req.params.id)
    .then((result) => {
      res.send(result);
    })
});

// Friends list
app.get('/api/users/:id/friends', (req, res) => {
  database.getFriendsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
});

// Connections list
app.get('/api/users/:id/connections', (req, res) => {
  database.getConnectionsList(req.params.id)
    .then((result) => {
      res.send(result);
    })
});

// All users
app.get('/api/users', (req, res) => {
  database.allUsers()
    .then((result) => {
      res.send(result);
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));