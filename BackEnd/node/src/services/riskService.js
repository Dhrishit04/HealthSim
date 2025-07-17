// BackEnd/node/src/services/riskService.js

const axios = require('axios');
const VitalSign = require('../models/VitalSign');
const RiskAssessment = require('../models/RiskAssessment');

exports.getVitalSigns = async (params) => {
  try {
    const response = await axios.get('http://localhost:5000/vitals', { params });
    const vitals = response.data.vitals;

    const records = vitals.heartRate.map((hr, i) => ({
      userId: params.userId || null,
      heartRate: hr,
      bloodPressureSystolic: parseInt(vitals.bloodPressure[i].split('/')[0]),
      bloodPressureDiastolic: parseInt(vitals.bloodPressure[i].split('/')[1]),
      temperature: vitals.temperature[i]
    }));

    await VitalSign.insertMany(records);

    return { vitals };
  } catch (error) {
    throw new Error(`Error fetching or storing vitals: ${error.message}`);
  }
};

exports.calculateRisk = async (params) => {
  try {
    const response = await axios.get('http://localhost:5000/assess', { params });
    const riskData = response.data;

    const riskRecord = new RiskAssessment({
      userId: params.userId,
      vitalSignId: params.vitalSignId,
      ...riskData
    });

    await riskRecord.save();

    return riskData;
  } catch (error) {
    throw new Error(`Error calculating or saving risk: ${error.message}`);
  }
};
