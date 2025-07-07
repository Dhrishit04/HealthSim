// node/src/routes/riskRoutes.js

const express = require('express');
const router = express.Router();
const riskController = require('../controllers/riskController');

// controller functions 
router.get('/api/risk', riskController.assessRisk);
router.get('/api/vitals', riskController.getVitalSigns);

module.exports = router;