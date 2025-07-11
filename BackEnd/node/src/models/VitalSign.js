// BackEnd/node/src/models/VitalSign.js

const mongoose = require('mongoose');
const vitalSignSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  heartRate: {
    type: Number,
    min: 30,
    max: 200
  },
  bloodPressureSystolic: {
    type: Number,
    min: 80,
    max: 200
  },
  bloodPressureDiastolic: {
    type: Number,
    min: 40,
    max: 120
  },
  temperature: {
    type: Number,
    min: 34,
    max: 42
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('VitalSign', vitalSignSchema);