const express = require("express");
const mongoose = require("mongoose");
const db = require("../models")

const router = express.Router();

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });


//routing
router.get("/api/workouts", function(req, res){
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        });
    });

      
module.exports = router;
