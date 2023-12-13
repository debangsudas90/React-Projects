import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { useExpensesContext } from '../hooks/useExpensesContext'

const ExpenseDetails = ({ expense } ) => {

  const { dispatch } = useExpensesContext()

  const handleClick = async() => {
    const response = await fetch("http://localhost:4000/api/transac/deleteExpense/" + expense._id, {
      method: 'DELETE'
    })

    const json = await response.json()
    if(response.ok) {
      console.log("deleted", json)
      dispatch({ type: 'DELETE_EXPENSE', payload: json })
    }

  }

  return (
    <Box display="flex" justifyContent = "space-between">
        <Box sx={{marginBottom: "20px", 
            width:"100%", 
            backgroundColor: `rgba(255, 255, 255, 0.2)`,
            padding: "10px", borderRadius: "12px" ,  
        }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
          <FiberManualRecordIcon />
          <Typography variant="h6" fontWeight="bold" style={{ marginLeft: '8px' }}>
            {expense.title}
          </Typography>
        </div>
        <Grid container gap={4}>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CurrencyRupeeIcon />
              <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                {expense.amount}
              </Typography>
            </div>
            </Grid>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <DateRangeOutlinedIcon />
                <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                  {(() => {
                    const date = new Date(expense.createdAt);
                    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                  })()}
                </Typography>
            </div>
            </Grid>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ChatBubbleOutlineIcon />
                  <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                    {expense.description}
                  </Typography>
            </div>
            </Grid>
        </Grid>
        </Box>
        <IconButton sx={{marginLeft: "20px", marginRight: "20px" }}onClick={handleClick}>
            <DeleteIcon />
        </IconButton>
    </Box>
  )
}

export default ExpenseDetails