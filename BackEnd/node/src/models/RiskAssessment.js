const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RiskAssessmentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  risk: Number,
  assessedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RiskAssessment', RiskAssessmentSchema);
