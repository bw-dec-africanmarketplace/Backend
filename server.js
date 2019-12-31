const express = require("express");
const helmet = require("helmet");
const server = express();
const apiRouter = require("./routes/index.js");

server.use(helmet());
server.use(express.json());
server.use("/api", apiRouter);

module.exports = server;
