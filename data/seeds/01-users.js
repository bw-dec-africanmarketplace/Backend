const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          password: bcrypt.hashSync("gr33ng0bl1n", 12),
          owner_firstname: "Harry",
          owner_lastname: "Osborn",
          business_name: "Oscorp, Inc."
        },
        {
          username: "m34tl04f89",
          password: bcrypt.hashSync("1r0nm4n", 12),
          owner_firstname: "Tony",
          owner_lastname: "Stark",
          business_name: "Stark Industries, Inc."
        },
        {
          username: "rrf4life",
          password: bcrypt.hashSync("mrf4nt45t1c", 12),
          owner_firstname: "Reed",
          owner_lastname: "Richards",
          business_name: "Future Foundation, Inc."
        }
      ]);
    });
};
