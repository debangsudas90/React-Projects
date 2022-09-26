import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'
import ReactPlayer from 'react-player'

import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetails = () => {

  const [animeVid, setAnimeVid] = useState([])
  const { animeId } = useParams()

  useEffect(() => {
      fetchFromApi(`vidcdn/watch/${animeId}`)
        .then((data) => {
          setAnimeVid(data)
          console.log(data)
        }) 
    }, [animeId])

  return (
    <Box minHeight = "95vh">
      <ReactPlayer url={`${animeVid?.sources?.[0]?.file}`} className="react-player" controls/>
    </Box>
  )
}

export default VideoDetails