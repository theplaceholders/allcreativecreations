const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// PostgreSQL client configuration
const pool = new Pool({
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGDATABASE: process.env.PGDATABASE,
  PGPORT: process.env.PGPORT,

  // ssl: {
  //   rejectUnauthorized: false
  // }
  
  
});

module.exports = pool;
