const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const errorMiddleware = require('./middleware/errorMiddleware');

// Import API routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const riskRoutes = require('./routes/riskRoutes');

// Load env variables (via our env.js or directly using dotenv)
require('dotenv').config();

const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/risk', riskRoutes);

// error handler
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
