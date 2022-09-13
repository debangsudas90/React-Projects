import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { Videos } from './'
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
  const arr = ["action", "adventure"]

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`recent-release?type=1&page=1`)
      .then((data) => setVideos(data))
  }, [])
  

  return (
    <Box minHeight='95vh'>
      {/* top bar */}
      <Stack direction="row" justifyContent = "space-around" width="100%">
        <Stack direction = "column" gap={3} justifyContent = "center" sx={{color: "#fff"}}>
          {/* title */}
          <Typography variant="h4">
            Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV) 2nd Season
          </Typography>
          {/* genre */}
          <Stack direction="row" gap={2}>
            {arr.map((genre) => (
              <Button variant="outlined">
                {genre}
              </Button>
            ))}
          </Stack>
          <Button size="large" color="error" variant="contained">
            Play
          <PlayArrowIcon sx={{ fontSize:20, color: 'white', ml:'5px' }}/>
          </Button>
        </Stack>
        <img src="https://gogocdn.net/cover/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-2nd-season.png" alt="ypoukoso" height="360" style={{borderRadius:10}}/>
      </Stack>




      {/* recent episodes */}
      <Stack direction="row" mt = {6} justifyContent = "space-between">
        <Box p={2} sx={{ overflowY: 'auto', flex: 2 }}>
          <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
            Recent <span style={{ color: '#F31503' }}>Episodes</span>
          </Typography>

          <Videos videos={videos}/>

          {/* fucken remember this shit */}

          {/* <ReactPlayer url="https://wwwx17.gogocdn.stream/videos/hls/e7qIiO51ci_SV35PLJamMw/1663113940/190856/ca09dc1ce88568467994ea8e756c4493/ep.8.1661270369.m3u8" className="react-player" controls/> */}
        </Box>
            


        {/* popular anime   */}
        <Box px={2} py={1} justifyContent="center" alignItems="center">
          <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
              Most <span style={{ color: '#F31503' }}>Popular</span>
          </Typography>
          {/* change it */}
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  )
}

export default Feed