import { Stack, Box, Button, Typography } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { VideoCard } from './'


const Videos = ({ pageCount, changeVideos, videos }) => {
  return (
    
    <Stack direction="row" flexWrap="wrap" justifyContent= "start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
              <VideoCard video={item}/>
              
          </Box>
        ))}
        <Box sx={{minWidth: 200, display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Button
            disabled = {pageCount === 1 ? true : false}
            onClick={() => changeVideos(pageCount-1)}
            sx={{color: "#F31503"}} 
          >
            <ArrowCircleLeftRoundedIcon/>
          </Button>
          <Button
            disabled = {videos.length < 20 ? true : false}
            onClick={() => changeVideos(pageCount+1)}
            sx={{color: "#F31503"}}
          >
            <ArrowCircleRightRoundedIcon/>
          </Button>
        </Box> 
        
    </Stack>
  )
}

export default Videos