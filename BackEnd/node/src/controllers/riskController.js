const riskService = require('../services/riskService');

exports.assessRisk = async (req, res, next) => {
  try {
    // Use query parameters (or body data) as needed for risk calculation
    const riskResult = await riskService.calculateRisk(req.query);
    res.json({ risk: riskResult });
  } catch (error) {
    next(error);
  }
};

exports.getVitalSigns = async (req, res, next) => {
  try {
    const vitalData = await riskService.getVitalSigns(req.query);
    res.json({ vitals: vitalData });
  } catch (error) {
    next(error);
  }
};
