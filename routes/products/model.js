const db = require("../../data");

function find() {
  return db("products");
}

function findBy(id) {
  return db("products")
    .where({ id })
    .first();
}

function add(product) {
  return db("products").insert(product, ["*"]);
}

function remove(id) {
  return db("products")
    .where({ id })
    .del()
    .then(_ => db("products").count("id"));
}

function update(id, changes) {
  return db("products")
    .where({ id })
    .update(changes)
    .then(_ => findBy(id));
}

module.exports = { find, findBy, add, remove, update };
