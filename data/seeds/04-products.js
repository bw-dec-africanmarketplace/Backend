exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          user_id: 1,
          category_id: 1,
          market_id: 95,
          name: "Eggs",
          description: "Unfertilized chicken eggs.",
          price: "7511 Ugandan Shilling"
        },
        {
          user_id: 2,
          category_id: 1,
          market_id: 67,
          name: "Milk",
          description: "Cow or Goat Milk.",
          price: "2779 Tanzanian Shilling"
        },
        {
          user_id: 3,
          category_id: 3,
          market_id: 33,
          name: "Beef Round",
          description: "Raw bovine meat.",
          price: "575 Malawian Kwacha"
        },
        {
          user_id: 1,
          category_id: 4,
          market_id: 1,
          name: "Chicken Breast",
          description: "Local chicken breast.",
          price: "5000 Burundian Franc"
        },
        {
          user_id: 2,
          category_id: 5,
          market_id: 4,
          name: "Mixed beans",
          description: "A collection of mixed beans.",
          price: "2748 Congolese Franc"
        },
        {
          user_id: 3,
          category_id: 8,
          market_id: 11,
          name: "Coffee",
          description: "Cup of coffee.",
          price: "250 Kenyan Shilling"
        },
        {
          user_id: 1,
          category_id: 2,
          market_id: 65,
          name: "Tilapia",
          description: "Fresh caught fish.",
          price: "147 South Sudanese Pound"
        },
        {
          user_id: 2,
          category_id: 7,
          market_id: 59,
          name: "Avocado",
          description: "Ripe avocado.",
          price: "1814 Rwandan Franc"
        },
        {
          user_id: 3,
          category_id: 6,
          market_id: 12,
          name: "Bulrush Millet",
          description: "1 lb bulrush millet seed.",
          price: "94 Kenyan Shilling"
        },
        {
          user_id: 1,
          category_id: 10,
          market_id: 39,
          name: "Cow Peas",
          description: "Black eyed peas.",
          price: "988 Malawian Kwacha"
        },
        {
          user_id: 2,
          category_id: 11,
          market_id: 67,
          name: "Sun-dried Cassava",
          description: "Dried cassava paste.",
          price: "6594 Tanzanian Shilling"
        },
        {
          user_id: 3,
          category_id: 12,
          market_id: 3,
          name: "Sunflower Seed",
          description: "Dried seed harvested from sunflowers.",
          price: "1828 Burundian Franc"
        },
        {
          user_id: 1,
          category_id: 9,
          market_id: 8,
          name: "Tobacco",
          description: "Pack of cigarettes.",
          price: "9806 Congolese Franc"
        },
        {
          user_id: 2,
          category_id: 13,
          market_id: 66,
          name: "Spring Onions",
          description: "Bag of onions.",
          price: "395 South Sudanese Pound"
        }
      ]);
    });
};
