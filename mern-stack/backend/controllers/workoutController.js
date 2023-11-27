const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async(req,res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workout)
}

//get one workouts
const getWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: "Workout not found"})
    }

    res.status(200).json(workout)
}

//post a workouts
const createWorkout = async(req, res) => {
    const {title, reps, sets} = req.body

    try {
        const workout = await Workout.create({title, reps, sets})
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a workouts
const deleteWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: "Workout not found"})
    }

    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: "Workout not found"})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}