const mongoose = require('mongoose');

const VitalSignSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  heartRate: { type: Number, required: true },
  bloodPressure: { type: String, required: true },
  temperature: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VitalSign', VitalSignSchema);
