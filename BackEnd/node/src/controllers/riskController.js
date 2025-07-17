// BackEnd/node/src/controllers/riskController.js
const riskService = require('../services/riskService');

exports.getVitalSigns = async (req, res, next) => {
  const { num } = req.query;
  if (!num || isNaN(num) || num <= 0) {
    return res.status(400).json({ error: 'Valid "num" parameter is required' });
  }

  try {
    const vitals = await riskService.getVitalSigns({ num });
    res.json(vitals);
  } catch (error) {
    next(error);
  }
};

exports.assessRisk = async (req, res, next) => {
  const { heartRate } = req.query;
  if (!heartRate || isNaN(heartRate)) {
    return res.status(400).json({ error: 'Valid "heartRate" parameter is required' });
  }

  try {
    const risk = await riskService.calculateRisk({ heartRate });
    res.json(risk);
  } catch (error) {
    next(error);
  }
};