const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String } // In production, passwords should be hashed.
});

module.exports = mongoose.model('User', UserSchema);
