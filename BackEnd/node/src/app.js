
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const errorMiddleware = require('./middleware/errorMiddleware');

// Import API routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const riskRoutes = require('./routes/riskRoutes');

// Load environment variables (using config file or dotenv)
require('dotenv').config({ path: '../../.env' });

// Initialize Express app
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/risk', riskRoutes);

// Global error handler
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
