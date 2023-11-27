const express = require("express")

// const Workout = require('../models/workoutModel')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//get app routes using express
const router = express.Router()

//get all workouts
router.get("/", getWorkouts)

//get one workouts
router.get("/:id", getWorkout)

//post a workouts
router.post("/", createWorkout)

//delete a workouts
router.delete("/:id",deleteWorkout)

//update a workout
router.patch("/:id", updateWorkout)

module.exports = router