const express = require('express');
const cors = require('cors');
const pool = require('./client');  // Importing the PostgreSQL client
const submissionRoutes = require('./routes/submissionRoutes');
const authMiddleware = require('./middleware/authentication');

const app = express();

// Verify database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));

// Middleware
app.use(cors()); // Configure CORS as needed
app.use(express.json()); // for parsing application/json
app.use('/api/submissions', authMiddleware, submissionRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).send('Something failed.');
});

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
