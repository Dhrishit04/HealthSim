exports.getProfile = async (req, res, next) => {
    try {
        // Assuming req.user is set by a middleware after authentication
      const userId = req.user ? req.user.id : "dummy-id";
      const userService = require('../services/userService');
      const user = await userService.getProfile(userId);
      res.json({ user });
    } catch (error) {
      next(error);
    }
  };
  
  exports.updateProfile = async (req, res, next) => {
    try {
      const userId = req.user ? req.user.id : "dummy-id";
      const updateData = req.body;
      const userService = require('../services/userService');
      const updatedUser = await userService.updateProfile(userId, updateData);
      res.json({ message: 'Profile updated', updatedUser });
    } catch (error) {
      next(error);
    }
  };
  