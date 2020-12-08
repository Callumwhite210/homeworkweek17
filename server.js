const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path")
const app = express()

const router = require("./controller/routes.js")

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
