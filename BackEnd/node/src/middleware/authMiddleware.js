const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Assume token is sent in the Authorization header as "Bearer <token>"
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = decoded; // Attach decoded token (user info) to req
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
