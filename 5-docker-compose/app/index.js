const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

app.get('/db', (req, res) => {
  db.connect(err => {
    if (err) {
        res.status(500).send('Oops!');
    }
    res.status(200).send('mysql connected...');
  });
});

app.get('/', (req, res) => {
  res.send('Hi~~ Everyone.');
});

const port = 3000;
app.listen(port, () => {
  console.log('server running on port =>', port);
});
