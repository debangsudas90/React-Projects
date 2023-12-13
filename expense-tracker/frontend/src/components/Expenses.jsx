import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpenseDetails from './ExpenseDetails'
import ExpenseForm from './ExpenseForm'
import { useExpensesContext } from '../hooks/useExpensesContext'

const Expenses = () => {

  const { expenses, dispatch } = useExpensesContext()
  const [totalExpense, setTotalExpense] = useState(0)
  
  useEffect(() => {

    const fetchExpenses = async() => {
      const response = await fetch("http://localhost:4000/api/transac/getExpenses")
      const json = await response.json()
  
      if(response.ok) {
        dispatch({ type: 'SET_EXPENSES', payload: json })
      }
    }

    fetchExpenses()
    
  }, [])
  
  //total expense
  useEffect(() => {
    if (expenses) {
      addExpense();
    }
  }, [expenses]);

  const addExpense = () => {
    let totExpense = 0
    expenses.map((expense) => {
      totExpense += expense.amount
    })
    setTotalExpense(totExpense);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{marginBottom: "12px"}}>
        Expenses
      </Typography>
      <Box>
        {/* total expense display */}
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{backgroundColor: `rgba(255, 255, 255, 0.5)`, padding: "15px",marginBottom: '12px', marginRight: "12px", borderRadius: "12px"}}
      >
        <Typography variant="h5" fontWeight="bold">
          Total expense : ₹ {totalExpense}
        </Typography>
        {/* Other content goes here */}
      </Box>

        <Grid container>
          <Grid item xs={4}>
            {/* form */}
            <ExpenseForm setForceRefresh={setForceRefresh}/>
          </Grid>
          <Grid item xs={8}>
            {/* details */}
            {expenses && expenses.slice(0,4).map((expense) => (
              <ExpenseDetails key={expense._id} expense={expense} setForceRefresh = {setForceRefresh}/>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Expenses