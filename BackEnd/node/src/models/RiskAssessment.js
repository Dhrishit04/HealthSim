const mongoose = require('mongoose');

const riskAssessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Low', 'Moderate', 'High'],
    required: true
  },
  generatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RiskAssessment', riskAssessmentSchema);
