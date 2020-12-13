//Declerations
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

//Express + Port
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static ('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting to MongoDB Atlas
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
//Connecting Locally
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });

require("./routes/apiroutes.js")(app);

//HTML routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//App is listening
app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
