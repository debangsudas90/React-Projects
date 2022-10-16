import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos,Topbar } from './'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const [pageCount, setPageCount] = useState(1)

  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromApi(`search?keyw=${searchTerm}&page=${pageCount}`)
      .then((data) => setVideos(data))
  }, [searchTerm, pageCount])
  
  // function handleCount() {
  //   setPageCount(pageCount+1)
  //   console.log(pageCount)
  // }

  return (
    <Box minHeight='95vh'>
      
      {/* search results */}
      <Stack p={2} mt={3} sx={{ overflowY: 'auto' }}>
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
          Search Results for <span style={{ color: '#F31503' }}>{searchTerm}</span> anime
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

export default SearchFeed


