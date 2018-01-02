'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://localhost:5432/stocks';
const client = new pg.Client(conString);

client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.send('Route is working!');
});

app.post();

app.put();

app.delete();

client.query();

makeDB();

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

function makeDB(){
  client.query(`
    CREATE TABLE IF NOT EXISTS
    quotes (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL,
      ticker VARCHAR(255) NOT NULL,
      price DECIMAL(5,2) NOT NULL
    );`
  );
}