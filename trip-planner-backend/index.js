const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());  // To handle JSON data

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Your MySQL username
  password: 'sujal3105',  // Your MySQL password
  database: 'trip_planner_db'  // Name of your database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

// Register route (without password hashing)
// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in the database
  const query = 'SELECT * FROM trip_planner_db.login WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'An error occurred during login' });
    }

    if (result.length > 0) {
      // If user exists
      res.status(200).json({ message: 'Login successful!' });
    } else {
      // If user doesn't exist or credentials are wrong
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
