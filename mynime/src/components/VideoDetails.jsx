import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'
import ReactPlayer from 'react-player'

import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetails = () => {

  const [animeVid, setAnimeVid] = useState([])
  const [animeDetails, setAnimeDetails] = useState([])

  const { animeId } = useParams()
  const animeDetailId = animeId.substring(0, animeId.indexOf("-episode"))
  const episodeNum = animeId.split("-episode-").pop()

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
    
    return (
      <Box minHeight = "95vh">
        <Box>
          <ReactPlayer url={`${animeVid?.sources?.[0]?.file}`} className="react-player" controls/>
        </Box>

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