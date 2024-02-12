const express = require('express');
const cors = require('cors');
const pool = require('./Client');  // Importing the PostgreSQL client
const seed = require('./database/seed');
const submissionRoutes = require('./routes/submissionRoutes');
const dotenv = require('dotenv');
dotenv.config();
const pg = require('pg');
const app = express();

// Verify database connection
pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL')
    seed();
  })
  .catch(err => console.error('Connection error', err));

// Middleware
app.use(cors()); // Configure CORS as needed
app.use(express.json()); // for parsing application/json

// const customerRouter = require('./routes/customerRoutes');
// app.use('/customers', customerRouter);

const reservationRouter = require('./routes/reservationRoutes');
app.use('/reservation', reservationRouter);

const adminRouter = require('./routes/adminRoutes');
app.use('/admin', adminRouter);


// Error handling
app.use((err, req, res, next) => {
  res.status(500).send({
    status: 'error',
    name: err.name,
    message: err.message
  });
});

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
