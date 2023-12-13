import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IncomeDetails from './IncomeDetails'
import IncomeForm from './IncomeForm'

import { useIncomesContext } from '../hooks/useIncomesContext'

const Incomes = () => {

  const { incomes, dispatch } = useIncomesContext()
  const [totalIncome, setTotalIncome] = useState(0)
  const [forceRefresh, setForceRefresh] = useState(true);

  // const fetchIncomes = async() => {
  //   const response = await fetch("http://localhost:4000/api/transac/getIncomes")
  //   const json = await response.json()

  //   if(response.ok) {
  //     setIncomes(json)
  //   }
  // }

  useEffect(() => {
    
    const fetchIncomes = async() => {
      const response = await fetch("http://localhost:4000/api/transac/getIncomes")
      const json = await response.json()
  
      if(response.ok) {
        dispatch({ type: 'SET_INCOMES', payload: json })
      }
    }

    fetchIncomes()

  }, [])
  

  // useEffect(() => {
  //   // Fetch data when forceRefresh is true
  //   if (forceRefresh) {
  //     fetchIncomes();
  //     // Reset forceRefresh to prevent infinite loop
  //     setForceRefresh(false);
  //   }
  // }, [forceRefresh]);
  
  //total income
  useEffect(() => {
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
            <IncomeForm setForceRefresh={setForceRefresh}/>
          </Grid>
          <Grid item xs={8}>
            {/* details */}
            {incomes && incomes.slice(0,4).map((income) => (
              <IncomeDetails key={income._id} income={income} setForceRefresh = {setForceRefresh}/>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Incomes