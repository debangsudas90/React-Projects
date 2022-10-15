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
  
  // function handleCount() {
  //   setPageCount(pageCount+1)
  //   console.log(pageCount)
  // }

  return (
    <Box minHeight='95vh' sx={{backgroundColor: "#0e0e0e"}}>
      
      <Topbar/>

      {/* recent episodes */}
      <Stack p={2} mt={6} sx={{ overflowY: 'auto' }}>
        <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
          Recent <span style={{ color: '#F31503' }}>Episodes</span>
        </Typography>

        <Videos pageCount={pageCount} changeVideos={setPageCount} videos={videos}/>


        {/* load more recent ep */}
        
        {/* <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}
        onClick = {handleCount}
        >
          More...
        </Typography> */}
        
      </Stack>
    
    </Box>
  )
}

export default Feed


