import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer,Box, Typography, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import * as React from 'react';

import { categories } from '../utils/constants'

export default function BasicMenu() {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div>
      <IconButton 
        size='large' 
        edge='start'  
        aria-label='logo'
        sx = {{color: 'white'}}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer 
        anchor='top' 
        open={isDrawerOpen}
        PaperProps={{
          sx: {
            backgroundColor: "#000",
            color: "#fff",
          }
        }} 
        onClick={() => setIsDrawerOpen(false)}
      >
        <Box 
          p={2}
          textAlign='center'
        >
          <Typography sx={{
            color: '#d32f2f',
            typography: { 
              sm: 'h5',
              xs: 'h5',
              md: 'h4',
              lg: 'h4'
            },
            fontWeight: {
              xs: "500",
              sm: "500",
              md: "bold",
              lg: "bold"
            }
          }}>
            Genres
          </Typography>

          <Stack direction = "row" flexWrap = "wrap" justifyContent = "center" sx={{maxHeight: '50vh'}}>
            
            {categories.map((category, index) => (
              <Link to={`/genre/${category?.name.toLocaleLowerCase()}`}>
                <button 
                  className='category-btn'
                  key={category?.name}
                  style={{
                    color:'white'
                  }}
                >
                  <span>{category.name}</span>
                </button>
              </Link>
            ))}
          </Stack>

        </Box>
      </Drawer>
    </div>
  );
}
