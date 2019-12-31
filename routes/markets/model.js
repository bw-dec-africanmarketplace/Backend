const db = require("../../data");

function find() {
  return db("markets");
}

function findById(id) {
  return db("markets")
    .where({ id })
    .first();
}

module.exports = { find, findById };
