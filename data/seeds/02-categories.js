exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { name: "Dairy" },
        { name: "Fish" },
        { name: "Meat" },
        { name: "Poultry" },
        { name: "Beans" },
        { name: "Grains" },
        { name: "Fruits" },
        { name: "Drinks" },
        { name: "Tobacco" },
        { name: "Peas" },
        { name: "Roots & Tubers" },
        { name: "Seeds & Nuts" },
        { name: "Vegetables" }
      ]);
    });
};
