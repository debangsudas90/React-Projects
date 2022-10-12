import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos,Topbar } from './'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const GenreFeed = () => {

  const [videos, setVideos] = useState([])
  const [pageCount, setPageCount] = useState(1)

  const { category } = useParams()
  console.log(category)

  useEffect(() => {
    fetchFromApi(`genre/${category}?page=${pageCount}`)
      .then((data) => setVideos(data))
  }, [category, pageCount])
  
  // function handleCount() {
  //   setPageCount(pageCount+1)
  //   console.log(pageCount)
  // }

  return (
    <Box minHeight='95vh'>
      
      {/* search results */}
      <Stack p={2} mt={3} sx={{ overflowY: 'auto' }}>
        <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
          Search Results for <span style={{ color: '#F31503' }}>{category}</span> anime
        </Typography>

        <Videos videos={videos}/>


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

export default GenreFeed