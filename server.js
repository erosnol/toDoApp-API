const express = require("express");
require('dotenv').config() // init dotenv

const mongoConfig = require('./config/mongoConfig');
const router = require("./routes/todosRouter");
const todosRouter = require('./routes/todosRouter')
const usersRouter = require('./routes/usersRouters')

const app = express()
const PORT = 4000

//* ==== middleware
app.use(express.json())

//* === Routers
app.use('/todos', todosRouter)
app.use('/user', usersRouter)

//* ==== Root Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome'
    })
})



//* ==== Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})