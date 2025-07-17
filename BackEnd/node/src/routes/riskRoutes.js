// node/src/routes/riskRoutes.js

const express = require('express');
const router = express.Router();
const riskController = require('../controllers/riskController');

// controller functions 
router.get('/vitals', riskController.getVitalSigns);
router.get('/assess', riskController.assessRisk);

module.exports = router;