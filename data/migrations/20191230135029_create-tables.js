exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string("username", 128).notNullable();
      tbl.string("password", 128).notNullable();
      tbl.string("owner_firstname", 128).notNullable();
      tbl.string("owner_lastname", 128).notNullable();
      tbl.string("business_name").notNullable();
    })
    .createTable("categories", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("markets", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("country", 128).notNullable();
    })
    .createTable("products", tbl => {
      tbl.increments();
      tbl
        .integer("user_id", 11)
        .references("users.id")
        .notNullable();
      tbl
        .integer("category_id", 11)
        .references("categories.id")
        .notNullable();
      tbl
        .integer("market_id", 11)
        .references("markets.id")
        .notNullable();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128).notNullable();
      tbl.string("price", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("markets")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
};
