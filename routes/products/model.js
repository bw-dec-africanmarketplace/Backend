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
  return db("products")
    .insert(product)
    .then(prod => findBy(prod[0]));
}

function remove(id) {
  return db("products")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("products")
    .where({ id })
    .update(changes)
    .then(_ => findBy(id));
}

module.exports = { find, findBy, add, remove, update };
