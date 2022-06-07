const express = require('express')
const UserModel = require('../Models/userSchema')

//* ======= Create A Router
const router = express.Router()

//* ====== CREATE A NEW USER
router.post('/', async (req, res) => {
    const userData = req.body

    try {
        const user = await UserModel.create(userData)
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad request homie')
    }
})

module.exports = router





