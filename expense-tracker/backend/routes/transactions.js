const express = require('express')
const Income = require('../models/IncomeModel')
const Expense = require('../models/ExpenseModel')

const {
    getIncomes,
    createIncome
} = require('../controller/incomeController')

const router = express.Router()

//Income -->

//get all incomes
router.get('/getIncomes', getIncomes)

//add income
router.post('/addIncome', createIncome)

//delete income
router.delete('/deleteIncome/:id', (req, res) => {
    res.json({mssg: "deleted a income"})
})

router.patch('/updateIncome/:id', (req,res) => {
    res.json({mssg: "updated a income"})
})


//Expense -->

//get all expenses
router.get('/getExpenses', (req, res) => {
    res.json({mssg: "get all expenses"})
})

//add expense
router.post('/addExpense', (req, res) => {
    res.json({mssg: "add a new expense"})
})

//get all incomes
router.delete('/deleteExpense/:id', (req, res) => {
    res.json({mssg: "deleted a expense"})
})

router.patch('/updateExpense/:id', (req,res) => {
    res.json({mssg: "updated a expense"})
})


module.exports = router

/**
 * all incomes - /api/transac/getIncomes
 * add income - /api/transac/addIncome
 * delete income - /api/transac/deleteIncome/:id
 * update income - /api/transac/updateIncome/:id
 * all expense - /api/transac/getExpenses
 * add expense - /api/transac/addExpense
 * delete expense - /api/transac/deleteExpense/:id
 * update expense - /api/transac/updateExpense/:id
 */
