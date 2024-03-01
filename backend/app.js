const express = require('express');
const cors = require('cors');
const pool = require('./Client');  // Importing the PostgreSQL client
const submissionRoutes = require('./routes/submissionRoutes');
const userRoutes = require("./routes/userRoutes")
const dotenv = require('dotenv');
dotenv.config();
const pg = require('pg');
const app = express();

// Verify database connection
pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL')
  })
  .catch(err => console.error('Connection error', err));

// Middleware
app.use(cors()); // Configure CORS as needed
app.use(express.json()); // for parsing application/json

const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

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
