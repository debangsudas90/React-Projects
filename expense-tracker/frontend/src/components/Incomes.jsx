import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IncomeDetails from './IncomeDetails'
import IncomeForm from './IncomeForm'

const Incomes = () => {

  const [incomes, setIncomes] = useState(null)
  const [totalIncome, setTotalIncome] = useState(0)

  useEffect(() => {
    
    const fetchIncomes = async() => {
      const response = await fetch("http://localhost:4000/api/transac/getIncomes")
      const json = await response.json()

      if(response.ok) {
        setIncomes(json)
      }
    }
    //grab the first 4 incomes/expenses
    fetchIncomes()
    
  }, [])
  
  useEffect(() => {
    // Check if incomes array has been set and is not empty
    if (incomes) {
      addIncome();
    }
  }, [incomes]);

  const addIncome = () => {
    let totIncome = 0
    incomes.map((income) => {
      totIncome += income.amount
    })
    setTotalIncome(totIncome);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{marginBottom: "12px"}}>
        Incomes
      </Typography>
      <Box>
        {/* total income display */}
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{backgroundColor: `rgba(255, 255, 255, 0.5)`, padding: "15px",marginBottom: '12px', marginRight: "12px", borderRadius: "12px"}}
      >
        <Typography variant="h5" fontWeight="bold">
          Total Income : ₹ {totalIncome}
        </Typography>
        {/* Other content goes here */}
      </Box>

        <Grid container>
          <Grid item xs={4}>
            {/* form */}
            <IncomeForm/>
          </Grid>
          <Grid item xs={8}>
            {/* details */}
            {incomes && incomes.slice(0,4).map((income) => (
              <IncomeDetails key={income._id} income={income}/>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Incomes