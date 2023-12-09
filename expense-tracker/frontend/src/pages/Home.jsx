import React, { useState } from 'react';

//components
import Dashboard from '../components/Dashboard';
import Expenses from '../components/Expenses';
import Transactions from '../components/Transactions';
import Incomes from '../components/Incomes';

import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';



const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

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
        return null;
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
          >
            <Button onClick={() => setActiveComponent(1)}>
              Dashboard
            </Button>
            <Button onClick={() => setActiveComponent(2)}>
              View Transactions
            </Button>
            <Button onClick={() => setActiveComponent(3)}>
              Incomes
            </Button>
            <Button onClick={() => setActiveComponent(4)}>
              Expenses
            </Button>
          </Box>
        </Grid>
        <Grid item xs={10} height="78vh" sx={{backgroundColor: "lightgrey"}}>
          {activeComponent && renderComponent(activeComponent)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;