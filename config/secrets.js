const bcrypt = require("bcryptjs");

module.exports = {
  jwtSecret: process.env.JWT_SECRET || bcrypt.hashSync("BananaFannaFoFanna", 16)
};
