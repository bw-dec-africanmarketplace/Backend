const db = require("../../data");

function find() {
  return db("categories").orderBy("name");
}

function findById(id) {
  return db("categories")
    .where({ id })
    .first();
}

module.exports = { find, findById };
