const mongoose = require('mongoose');

const vitalSignSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
  oxygenSaturation: Number,
  recordedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('VitalSign', vitalSignSchema);
