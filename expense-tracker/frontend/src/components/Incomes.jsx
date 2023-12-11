import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IncomeDetails from './IncomeDetails'
import IncomeForm from './IncomeForm'

const Incomes = () => {

  const [incomes, setIncomes] = useState(null)

  useEffect(() => {
    
    const fetchIncomes = async() => {
      const response = await fetch("http://localhost:4000/api/transac/getIncomes")
      const json = await response.json()

      if(response.ok) {
        setIncomes(json)
      }
    }

    fetchIncomes()

  }, [])
  

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{marginBottom: "20px"}}>
        Incomes
      </Typography>
      <Box>
        {/* total income display */}
        <Typography variant="h6" sx={{marginBottom: "20px"}}>
          {`Total Income : Rs. 40000`}
        </Typography>

        <Grid container>
          <Grid item xs={5}>
            {/* form */}
            <IncomeForm/>
          </Grid>
          <Grid item xs={6}>
            {/* details */}
            {incomes && incomes.map((income) => (
              <IncomeDetails key={income._id} income={income}/>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Incomes