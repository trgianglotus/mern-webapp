import express from "express";

import config from "./config";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello");
});

server.get("/about.html", (req, res) => {
  res.send("about the page");
});

server.listen(config.port, () => {
  console.info("Express listening on port", config.port);
});
