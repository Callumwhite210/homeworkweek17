const express = require("express");
const app = express()

const router = require("./controller/routes.js")

const PORT = process.env.PORT || 3000;

app.use(express.static ('/public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
