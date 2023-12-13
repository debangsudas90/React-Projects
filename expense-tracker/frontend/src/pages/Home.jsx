import React, { useEffect, useState } from 'react';

//components
import Dashboard from '../components/Dashboard';
import Expenses from '../components/Expenses';
import Transactions from '../components/Transactions';
import Incomes from '../components/Incomes';

import Typography from '@mui/material/Typography';
import { Box, Button, Divider, Grid } from '@mui/material';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import CreditCardOffRoundedIcon from '@mui/icons-material/CreditCardOffRounded';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  
  const renderComponent = (componentNumber) => {
    switch (componentNumber) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard/>;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 , margin: "30px"}}>
      <Typography variant="h3" fontWeight="bold" sx={{marginBottom: "50px"}}>
        Budget Buddy
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box 
            display="flex" 
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            height="100%"
            sx={{borderRadius: "15px", padding: "5px"}}
          > 
            <div style={{ display: 'flex', alignItems: 'center' }}>
              
              <EqualizerRoundedIcon />
              <Button onClick={() => setActiveComponent(1)}>
                Dashboard
              </Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceRoundedIcon/>
              <Button onClick={() => setActiveComponent(2)}>
                View Transactions
              </Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AddCardRoundedIcon/>
              <Button onClick={() => setActiveComponent(3)}>
                Incomes
              </Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CreditCardOffRoundedIcon/>
              <Button onClick={() => setActiveComponent(4)}>
                Expenses
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={10} height="78vh" 
          sx={{backgroundColor: "lightgrey", borderRadius: "15px", padding: "5px"}}
        >
          {activeComponent && renderComponent(activeComponent)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;