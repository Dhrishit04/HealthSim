const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VitalSignSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
  recordedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VitalSign', VitalSignSchema);
