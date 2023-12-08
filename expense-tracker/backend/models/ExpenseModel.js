const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String, 
        required: true,
        default: "income",
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', expenseSchema)