const bcrypt = require("bcryptjs");

module.exports = (req, res, next) => {
  const {
    username,
    password,
    owner_firstname,
    owner_lastname,
    business_name
  } = req.body;

  req.body.password = bcrypt.hashSync(password, 12);

  try {
    if (
      !username ||
      !password ||
      !owner_firstname ||
      !owner_lastname ||
      !business_name
    )
      res.status(400).json({ message: "Please complete all fields" });
    else next();
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
};
