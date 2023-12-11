import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const IncomeDetails = ({ income }) => {
  return (
    <Box display="flex" justifyContent = "space-between">
        <Box sx={{marginBottom: "20px"}}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                  <FiberManualRecordIcon />
                  <Typography variant="h6" fontWeight="bold" style={{ marginLeft: '8px' }}>
                    {income.title}
                  </Typography>
        </div>
        <Grid container gap={4}>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CurrencyRupeeIcon />
                  <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                    {income.amount}
                  </Typography>
            </div>
            </Grid>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DateRangeOutlinedIcon />
                  <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                    {income.createdAt}
                  </Typography>
            </div>
            </Grid>
            <Grid item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ChatBubbleOutlineIcon />
                  <Typography variant="body1" gutterBottom style={{ marginLeft: '8px' }}>
                    {income.description}
                  </Typography>
            </div>
            </Grid>
        </Grid>
        </Box>
        <IconButton onClick={() => console.log("clciked")}>
            <DeleteIcon />
        </IconButton>
    </Box>
  )
}

export default IncomeDetails