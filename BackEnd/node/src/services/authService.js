const jwt = require('jsonwebtoken');

// const User = require('../models/User');

exports.login = async (email, password) => {
  // Dummy implementation: Only accept a fixed email/password.
  if (email === "test@example.com" && password === "password") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", { expiresIn: '1h' });
    return token;
  } else {
    throw new Error("Invalid credentials");
  }
};

exports.register = async (userData) => {
  // Dummy implementation: Simply return userData with a dummy id.
  userData.id = "dummy-id";
  return userData;
};
