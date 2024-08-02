const express = require('express')
const router = express.Router() 
const Workout = require('../models/workoutModel')
const {getWorkouts, getWorkout , createWorkout} = require('../controllers/Workoutcontroller')

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)
//DELETE a workout
router.delete('/:id', (req,res) =>{
    res.json({msg: 'DELETE a  workout'})
})

//UPDATE a workout
router.patch('/', (req,res) =>{
    res.json({msg: 'UPDATE a  workout'})
})




module.exports  = router