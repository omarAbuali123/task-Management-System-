const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DB1',
  password: 'WwEeRr1234567',
  port: 5432,
});

pool.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Query result:', res.rows);
  }
  // pool.end(); 
});




// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'DB1',
//   password: 'WwEeRr1234567',
//   port: 5432,
// });

// pool.connect();

// module.exports = pool;
