const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, secrets.jwtSecret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid token." });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login." });
  }
};
