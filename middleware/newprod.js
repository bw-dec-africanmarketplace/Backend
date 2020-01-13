module.exports = (req, res, next) => {
  try {
    const {
      user_id,
      category_id,
      market_id,
      name,
      description,
      price
    } = req.body;

    if (
      !user_id ||
      !category_id ||
      !market_id ||
      !name ||
      !description ||
      !price
    ) {
      res.status(400).json({
        message:
          "Please enter all new product information (i.e., user_id, category_id, market_id, name, description and price)."
      });
    } else next();
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
};
