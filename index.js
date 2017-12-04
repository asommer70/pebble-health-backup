const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/files', express.static('files/'), serveIndex('/files', {'icons': true}))

app.post('/', (req, res) => {
  console.log('POST req.body:', req.body);
  fs.appendFile('./files/pebble_health.csv', req.body.health + "\n", function (err) {
    if (err) throw err;
  });
});

app.get('/', (req, res) => {
  res.json({message: 'Hello, welcome to Pebble Health Backup...'});
});

app.listen(4005, () => {
  console.log(`Listening on port 4005...`);
});
