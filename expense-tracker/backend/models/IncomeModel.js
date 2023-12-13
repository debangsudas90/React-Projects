const mongoose = require('mongoose')

const Schema = mongoose.Schema

const incomeSchema = new Schema({
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
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String, 
        default: "income"
    }
}, {timestamps: true})

module.exports = mongoose.model('Income', incomeSchema)