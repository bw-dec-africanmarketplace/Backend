const server = require("./server.js");
const request = require("supertest");

describe("server.js testing", () => {
  it("Returns a status of 200 OK", async () => {
    const serving = await request(server).get("/");
    expect(serving.status).toBe(200);
  });

  it("Returns the expected object", async () => {
    const serving = await request(server).get("/");
    expect(serving.body).toEqual({
      server: "up and running...better go catch it!"
    });
  });
});
