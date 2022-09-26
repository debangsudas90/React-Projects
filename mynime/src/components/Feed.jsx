import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { Videos,Topbar } from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
  

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`recent-release?type=1&page=1`)
      .then((data) => setVideos(data))
  }, [])
  

  return (
    <Box minHeight='95vh'>
      
      <Topbar/>

      {/* recent episodes */}
      <Stack p={2} mt={6} sx={{ overflowY: 'auto' }}>
        <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
          Recent <span style={{ color: '#F31503' }}>Episodes</span>
        </Typography>

        <Videos videos={videos}/>
        
      </Stack>
    
    </Box>
  )
}

export default Feed


