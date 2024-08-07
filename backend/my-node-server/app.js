
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DB1',
  password: 'WwEeRr1234567',
  port: 5432,
});

pool.connect();

// تسجيل مستخدم جديد
app.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send('Username, email, and password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("error123");
    await pool.query(
      'INSERT INTO USERS (username, password, email) VALUES ($1, $2, $3)',
      [username, hashedPassword, email]
    );
    res.status(201).send('User created');
  } catch (err) {
    console.error('Error creating user:', err); // Log the error
    res.status(500).send('Error creating user');
  }
});
// تسجيل الدخول
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await pool.query('SELECT * FROM USERS WHERE username = $1', [username]);
      const user = result.rows[0];
      if (user && await bcrypt.compare(password, user.password)) {
        res.json({ success: true, email: user.email });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error logging in:', err);
      res.status(500).json({ success: false, message: 'Error logging in' });
    }
  });
// إضافة مهمة

// Endpoint to create a new task
app.post('/tasks', async (req, res) => {
    const { username, title, description } = req.body;
    try {
      await pool.query('INSERT INTO tasks (username, title, description) VALUES ($1, $2, $3)', [username, title, description]);
      res.status(201).send('Task created');
    } catch (err) {
      console.error('Error creating task:', err);
      res.status(500).send('Error creating task');
    }
  });
  
  // Endpoint to fetch all tasks (assuming you want to fetch tasks by username)
  app.get('/tasks', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tasks');
      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).send('Error fetching tasks');
    }
  });

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3001, () => {
  console.log('Server running on port 3001');
});















