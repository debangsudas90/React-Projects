const express = require('express')
const Income = require('../models/IncomeModel')
const Expense = require('../models/ExpenseModel')

const {
    getIncomes,
    createIncome,
    deleteIncome
} = require('../controller/incomeController')

const {
    getExpenses,
    createExpense,
    deleteExpense
} = require('../controller/expenseController')

const router = express.Router()

//Income -->

//get all incomes
router.get('/getIncomes', getIncomes)

//add income
router.post('/addIncome', createIncome)

//delete income
router.delete('/deleteIncome/:id', deleteIncome)

router.patch('/updateIncome/:id', (req,res) => {
    res.json({mssg: "updated a income"})
})


//Expense -->

//get all expenses
router.get('/getExpenses', getExpenses)

//add expense
router.post('/addExpense', createExpense)

//get all incomes
router.delete('/deleteExpense/:id', deleteExpense)

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
