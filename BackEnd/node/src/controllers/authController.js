const authService = require('../services/authService');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await authService.register(userData);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};
