const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const apiRouter = require("./routes/index.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "up and running...better go catch it!" });
});

module.exports = server;
