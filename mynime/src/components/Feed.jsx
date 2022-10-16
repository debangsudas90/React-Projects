import { useState, useEffect } from 'react'
import { Box, Stack, Typography, LinearProgress } from '@mui/material'
import { Videos,Topbar } from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {

  const [videos, setVideos] = useState([])
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    fetchFromApi(`recent-release?type=1&page=${pageCount}`)
      .then((data) => setVideos(data))
  }, [pageCount])

  return (
    <Box minHeight='95vh' sx={{backgroundColor: "#0e0e0e"}}>
      
      <Topbar/>

      {/* recent episodes */}
      <Stack p={2} mt={6} sx={{ overflowY: 'auto' }}>
        <Typography mb={2}  sx={{
          color:'white',
          typography: { 
            sm: 'h5',
            xs: 'h5',
            md: 'h4',
            lg: 'h4'
          },
          fontWeight: {
            xs: "medium",
            sm: "500",
            md: "bold",
            lg: "bold"
          }
        }}>
          Recent <span style={{ color: '#F31503' }}>Episodes</span>
        </Typography>

        <Videos pageCount={pageCount} changeVideos={setPageCount} videos={videos}/>
        
      </Stack>
    
    </Box>
  )
}

export default Feed


