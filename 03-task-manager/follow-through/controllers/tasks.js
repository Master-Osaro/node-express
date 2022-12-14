const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const getAllTasks = asyncWrapper ( async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks, amount:tasks.length})
        // res.status(500).json({msg: error})
})
const createTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})
const getTask = asyncWrapper( async (req, res) => {
        //some destructuring below
        const {id:taskID} =req.params;
        const task = await Task.findOne({_id:taskID})
        // res.status(200).json({id:req.params.id})
        if(!task){
            return res.status(404).json({msg: `No task wit id : ${taskID}`})
        }
        res.status(200).json({task})
    
})
const deleteTask =  asyncWrapper ( async (req, res) => {
        //some destructuring below
        const {id:taskID} =req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        // res.status(200).json({id:req.params.id})
        if(!task){
            return res.status(404).json({msg: `No task wit id : ${taskID}`})
        }
        res.status(200).json({task})
}) 

const updateTask =  asyncWrapper ( async (req, res) => {

        const {id:taskID} = req.params
        // res.status(200).json({id:taskID, data:req.body})
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg: `No task wit id : ${taskID}`})
        }
        res.status(200).json({task})
})
module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}