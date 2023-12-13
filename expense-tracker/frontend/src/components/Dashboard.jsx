import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <Box sx={{padding: "5px"}}>
      <Typography variant="h5" fontWeight="bold" sx={{marginBottom: "12px"}}>
        All Transactions
      </Typography>
      <Grid container>
        {/* for graph and total transacntion count */}
        <Grid item xs={8}>
          <Box>
            hello
          </Box>
        </Grid>
        {/* for recent transactions */}
        <Grid item xs={4}>
          <Box>
            hi
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard