// BackEnd\node\src\app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const errorMiddleware = require('./middleware/errorMiddleware');

// Load env variables 
require('dotenv').config({ path: '.env' });
// console.log("Environment Variables:", process.env); // to confirm that .env is loaded correctly

// importing database
const connectDB = require('./config/db');
connectDB();

// Import API routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const riskRoutes = require('./routes/riskRoutes');


const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', riskRoutes);

// error handler
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
