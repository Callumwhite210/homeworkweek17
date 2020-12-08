const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const db = require("../server.js")

let path = require("path")
let router = express.Router()

//routing 

router.get("/", (req, res) => {
    res.sendFile(path.join("/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join("/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join("/stats.html"));
});

module.exports = router;
