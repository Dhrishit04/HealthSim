// BackEnd/node/src/models/RiskAssessment.js

const mongoose = require('mongoose');
const riskAssessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  vitalSignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VitalSign'
  },
  riskScore: {
    type: Number,
    min: 0,
    max: 1
  },
  category: {
    type: String,
    enum: ['Low', 'Moderate', 'High'],
    required: true
  },
  reason: {
    type: String
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('RiskAssessment', riskAssessmentSchema);







