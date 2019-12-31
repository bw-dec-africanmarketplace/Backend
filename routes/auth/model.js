const db = require("../../data");

function find() {
  return db("users");
}

function findBy(param) {
  return db("users")
    .where(param)
    .first();
}

function add(user) {
  return db("users")
    .insert(user)
    .then(user => findBy({ id: user[0] }));
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = { find, findBy, add, remove };
