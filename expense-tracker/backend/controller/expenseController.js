const { default: mongoose } = require("mongoose")
const Expense = require("../models/ExpenseModel")

// all expense - /api/transac/getExpenses
const getExpenses = async (req, res) => {
    const expenses = await Expense.find({}).sort({createdAt: -1})

    res.status(200).json(expenses)
}

// add expense - /api/transac/addExpense
const createExpense = async(req, res) => {
    const {title, amount, description} = req.body

    try {
        if(!title || !amount || !description) {
            res.status(400).json({message: "All fields are required!"})
            return
        }
        if(amount <=0 || !amount === 'number') {
            res.status(400).json({message: "Amount must be positive"})
            return
        }
        const expense = await Expense.create({title, amount, description})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// delete expense - /api/transac/deleteExpense/:id
const deleteExpense = async (req, res)  => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({message: "No such Expense"})
    }

    const expense = await Expense.findOneAndDelete({_id: id})

    if(!expense) {
        res.status(400).json({message: "No such Expense"})
    }

    res.status(200).json(expense)
}

// update expense - /api/transac/updateExpense/:id
//future update :)


module.exports = {
    getExpenses,
    createExpense,
    deleteExpense
}