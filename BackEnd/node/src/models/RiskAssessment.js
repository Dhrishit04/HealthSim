const mongoose = require('mongoose');

const RiskAssessmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  riskScore: { type: Number, required: true },
  details: { type: Object },
  assessedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RiskAssessment', RiskAssessmentSchema);
