// BackEnd/node/scripts/seedDatabase.js

require('dotenv').config();
const mongoose = require('mongoose');

// paths
const User = require('../src/models/User');
const VitalSign = require('../src/models/VitalSign');
const RiskAssessment = require('../src/models/RiskAssessment');

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('✅ Connected to MongoDB');

  // Clear existing data
  await User.deleteMany({});
  await VitalSign.deleteMany({});
  await RiskAssessment.deleteMany({});

  // Insert test user
  const user = new User({
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    role: 'user'
  });
  await user.save();

  // Insert test vital sign
  const vital = new VitalSign({
    userId: user._id,
    heartRate: 75,
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 80,
    temperature: 36.8
  });
  await vital.save();

  // Insert test risk assessment
  const risk = new RiskAssessment({
    userId: user._id,
    vitalSignId: vital._id,
    riskScore: 0.1,
    category: 'Low',
    reason: 'All vitals within normal range'
  });
  await risk.save();

  console.log('🌱 Database seeded!');
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error('❌ Seeding failed:', err.message);
  process.exit(1);
});