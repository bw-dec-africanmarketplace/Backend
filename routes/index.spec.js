const request = require("supertest");
const server = require("../server");
const bcrypt = require("bcryptjs");

describe("endpoint testing", () => {
  describe("login endpoint testing", () => {
    it("should return a status of 404 if the user is not found", done => {
      request(server)
        .post("/api/login")
        .send({ username: "cassius", password: "clayborne3" })
        .expect(404, done);
    });

    it("should return a status of 200 OK for properly registered user", done => {
      request(server)
        .post("/api/login")
        .send({ username: "admin", password: "gr33ng0bl1n" })
        .expect(200, done);
    });
  });

  describe("user endpoint testing", () => {
    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/users")
        .set("Accept", "application/json")
        .expect(401, done);
    });
  });

  describe("category endpoint testing", () => {
    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/categories")
        .set("Accept", "application/json")
        .expect(401, done);
    });

    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/category/1")
        .set("Accept", "application/json")
        .expect(401, done);
    });
  });

  describe("market endpoint testing", () => {
    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/markets")
        .set("Accept", "application/json")
        .expect(401, done);
    });

    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/market/1")
        .set("Accept", "application/json")
        .expect(401, done);
    });
  });

  describe("product endpoint testing", () => {
    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/products")
        .set("Accept", "application/json")
        .expect(401, done);
    });

    it("returns a status of 401 if user is not logged in", done => {
      request(server)
        .get("/api/product/1")
        .set("Accept", "application/json")
        .expect(401, done);
    });
  });
});
