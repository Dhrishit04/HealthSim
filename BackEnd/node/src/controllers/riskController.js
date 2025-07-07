// BackEnd\node\src\controllers\riskController.js
const riskService = require('../services/riskService');

exports.assessRisk = async (req, res, next) => {
  try {
    const params = req.query;
    const risk = await riskService.calculateRisk(params);
    res.json({ risk });
  } catch (error) {
    next(error);
  }
};

exports.getVitalSigns = async (req, res, next) => {
  try {
    const params = req.query;
    const vitals = await riskService.getVitalSigns(params);
    res.json({ vitals });
  } catch (error) {
    next(error);
  }
};
