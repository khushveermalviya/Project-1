const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'laxmi'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Default route

// New route to fetch data from MySQL
// New route to fetch data from MySQL
app.post('/addUser', (req, res) => {
    const user = req.body;
    const sql = 'INSERT INTO users SET ?';

    db.query(sql, user, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(user);
    });
});


// Start server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});