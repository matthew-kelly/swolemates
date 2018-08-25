const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const knex = require("knex");
const database = require("./database")(knex);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));