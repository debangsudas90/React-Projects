const { default: mongoose } = require("mongoose")
const Income = require("../models/IncomeModel")

// all incomes - /api/transac/getIncomes
const getIncomes = async (req, res) => {
    const incomes = await Income.find({}).sort({createdAt: -1})

    res.status(200).json(incomes)
}

// add income - /api/transac/addIncome
const createIncome = async(req, res) => {
    const {title, amount, category, description} = req.body

    try {
        if(!title || !amount || !category) {
            res.status(400).json({message: "All fields are required!"})
            return
        }
        if(amount <=0 || !amount === 'number') {
            res.status(400).json({message: "Amount must be positive"})
            return
        }
        const income = await Income.create({title, amount, category, description})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

// delete income - /api/transac/deleteIncome/:id
const deleteIncome = async (req, res)  => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({message: "No such income"})
        return
    }

    const income = await Income.findOneAndDelete({_id: id})

    if(!income) {
        res.status(400).json({message: "No such income"})
    }

    res.status(200).json(income)
}

// update income - /api/transac/updateIncome/:id
//future update :)


module.exports = {
    getIncomes,
    createIncome,
    deleteIncome
}