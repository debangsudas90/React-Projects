import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Stack, Typography, Button, Tooltip } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ReactPlayer from 'react-player'

import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetails = () => {

  const [animeVid, setAnimeVid] = useState([])
  const [animeDetails, setAnimeDetails] = useState([])
  
  const { animeId } = useParams()
  
  const [episodeNum, setEpisodeNum] = useState(parseInt(animeId.split("-episode-").pop()))
  
  const animeDetailId = animeId.substring(0, animeId.indexOf("-episode"))

  useEffect(() => {
      fetchFromApi(`vidcdn/watch/${animeId}`)
        .then((data) => {
          setAnimeVid(data)
        })
        
      fetchFromApi(`anime-details/${animeDetailId}`)
        .then((data) => {
          setAnimeDetails(data)
        })

    }, [animeId])

    function handlePrevEpisode() {
      setEpisodeNum(episodeNum-1)
    }

    function handleNextEpisode() {
      setEpisodeNum(episodeNum+1)
    }
    
    return (
      <Box minHeight = "95vh">

        {/* video player */}
        <Stack direction = "row" justifyContent="space-evenly">
          
          <Button 
            onClick={handlePrevEpisode}
            disabled={episodeNum === 1 ? true : false}
          >
            <Link to = {`/vidcdn/watch/${animeDetailId}-episode-${episodeNum-1}`}>
              <Tooltip title="Previous Episode">
                <ArrowBackIosNewIcon className = "episode-switch-icon"/>
              </Tooltip>
            </Link>
          </Button>

          <ReactPlayer 
            url={`${animeVid?.sources?.[0]?.file}`} 
            className="react-player" 
            controls
          />

          <Button 
            onClick={handleNextEpisode}
            disabled={episodeNum === parseInt(animeDetails?.totalEpisodes) ? true : false}
          >
            <Link to = {`/vidcdn/watch/${animeDetailId}-episode-${episodeNum+1}`}>
              <Tooltip title="Next Episode">
                <ArrowForwardIosIcon className = "episode-switch-icon"/>
              </Tooltip>
            </Link>
          </Button>

        </Stack>


        {/* video-anime details */}
        <Stack direction = "row" justifyContent = "space-evenly" width="100%" mt = "25px">
          <Link to={`/anime-details/${animeDetailId}`}>
          <img src={animeDetails.animeImg} alt={animeDetails.animeTitle} height="150" style={{borderRadius:10}} />
          </Link>

          <Stack direction = "column" gap={1} justifyContent = "center" sx={{color: "#fff", width: '70vw'}}>
            {/* title */}

            <Typography variant="h5">
              <span style={{ color: '#e6211c' }}>{animeDetails.animeTitle}</span> - {episodeNum}
            </Typography>

            <Typography variant="subtitle1">
              Episodes - {animeDetails.totalEpisodes}
            </Typography>
            <Typography variant="subtitle1">
            {animeDetails.type}
            </Typography>

        </Stack>
      </Stack>
    </Box>
  )
}

export default VideoDetails