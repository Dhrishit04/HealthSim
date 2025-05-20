//BackEnd\node\src\routes\riskRoutes.js
const express = require('express');
const router = express.Router();
const riskController = require('../controllers/riskController');
const authMiddleware = require('../middleware/authMiddleware');

// Endpoints to assess risk and retrieve vital sign data
router.get('/assess', authMiddleware, riskController.assessRisk);
router.get('/vitals', authMiddleware, riskController.getVitalSigns);

module.exports = router;
