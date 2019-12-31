const users = require("./auth/model.js");
const cats = require("./categories/model.js");
const prods = require("./products/model.js");
const marks = require("./markets/model.js");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const restrict = require("../middleware/restrict.js");
const register = require("../middleware/register.js");
const newproduct = require("../middleware/newprod.js");

//Auth Routes
router.get("/users", restrict, async (req, res) => {
  try {
    const allUsers = await users.find();
    allUsers
      ? res.status(200).json(allUsers)
      : res.status(400).json({ message: "No users found." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.get("/user/:id", restrict, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await users.findBy(id);
    user
      ? res.status(200).json(user)
      : res.status(400).json({ message: "No user with this id exists." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const User = await users.findBy({ username });
    if (User && bcrypt.compareSync(password, User.password)) {
      const token = genToken(User);
      res.status(200).json({ message: `Welcome, ${username}`, token: token });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/register", register, async (req, res) => {
  try {
    const addUser = await users.add(req.body);
    if (addUser) {
      const token = genToken({ id: addUser, username: req.body.username });
      res.status(201).json({
        message: `Your business has been added to our database!`,
        token
      });
    }
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

//Category Routes
router.get("/categories", restrict, async (req, res) => {
  try {
    const categories = await cats.find();
    if (categories) res.status(200).json(categories);
    else res.status(400).json({ message: "No categories retrieved." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.get("/category/:id", restrict, async (req, res) => {
  try {
    const category = await cats.findById(req.params.id);
    if (category) res.status(200).json(category);
    else res.status(400).json({ message: "This category does not exist." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

//Product Routes
router.get("/products", restrict, async (req, res) => {
  try {
    const products = await prods.find();
    if (products) res.status(200).json(products);
    else res.status(400).json({ message: "No products retrieved." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.get("/product/:id", restrict, async (req, res) => {
  try {
    const product = await prods.findBy(req.params.id);
    if (product) res.status(200).json(product);
    else res.status(400).json({ message: "This product does not exist." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/products", restrict, newproduct, async (req, res) => {
  try {
    const product = await prods.add(req.body);
    product
      ? res.status(200).json(product)
      : res
          .status(400)
          .json({ message: "There was a problem adding this product." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/product/:id", restrict, async (req, res) => {
  try {
    const changes = req.body;
    const product = await prods.update(req.params.id, changes);
    product
      ? res.status(200).json(product)
      : res.status(400).json({ message: "Could not update product." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/product-del/:id", restrict, async (req, res) => {
  try {
    const product = await prods.remove(req.params.id);
    product
      ? res.status(200)
      : res
          .status(400)
          .json({ message: "There was an error deleting this product." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

//Market Routes
router.get("/markets", restrict, async (req, res) => {
  try {
    const markets = await marks.find();
    markets
      ? res.status(200).json(markets)
      : res.status(400).json({ message: "Could not retrieve markets." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.get("/market/:id", restrict, async (req, res) => {
  try {
    const market = await marks.findById(req.params.id);
    market
      ? res.status(200).json(market)
      : res.status(400).json({ message: "This market does not exist." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

//Token Generation
function genToken(User) {
  const payload = { subject: User.id, username: User.username };
  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
