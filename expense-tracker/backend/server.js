require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const transactionsRoutes = require('./routes/transactions')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//routes
app.use(cors())
app.use('/api/transac', transactionsRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to requests
        app.listen(4000, () => {
            console.log("connected to db and listening on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })