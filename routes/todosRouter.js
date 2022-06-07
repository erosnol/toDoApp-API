const express = require("express");
const { route } = require("express/lib/application");
const TodoModel = require('../Models/todoSchema')

//* ==== Create Router 
const router = express.Router()

//* ==== GET TODOS
router.get('/', async (req, res) => {
    try {
        const todos = await TodoModel.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({
        todos: [{
            task: 'Learn Express'
        }]
    })
})

//* ==== CREATE TODOS
router.post('/', async (req, res) => {
    const todoData = req.body

    try {
        const todo = await TodoModel.create(todoData) //create the todo in the DB
        //send back the response 
        res.status(201).json(todo)
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad request!!!:/!!')
    }
})

//* GET TODO BY ID
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const todo = await TodoModel.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        console.error(error)
    }
})

//* UPDATE TODO BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newTodoData = req.body
     try {
         //* find the todo by the id
         const todo = await TodoModel.findByIdAndUpdate(id, newTodoData, {new: true})
         res.status(202).json(todo)
     } catch (error) {
         console.log(error)
     }
})

//! ==== DELETE A TODO
router.delete('/:id', async (req, res) => {
    const id = req.params.id


    try {
        const todo = await TodoModel.findByIdAndDelete

        res.status(200).json('Todo was deleted!')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router