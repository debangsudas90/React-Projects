import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'

import { fetchFromApi } from '../utils/fetchFromApi'

const AnimeDetails = () => {

  const [anime, setAnime] = useState([])

  const { id } = useParams()
  
  useEffect(() => {
    fetchFromApi(`anime-details/${id}`)
      .then((data) => {
        setAnime(data)
      }) 
  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>

        {/* animedetails */}
      <div style={{
        background: 'linear-gradient(166deg, rgba(77,0,1,1) 55%, rgba(220,6,14,1) 100%)',
        height: '270px'
      }}
        />
        <Stack direction="row" gap = {2}justifyContent = "space-evenly" width="100%" mt = "25px">
            <img src={anime.animeImg} alt={anime.animeTitle} height="340" style={{borderRadius:10}} />

            <Stack direction = "column" gap={2} justifyContent = "center" sx={{color: "#fff", width: '70vw'}}>
                {/* title */}

                <Typography variant="h4">
                    {anime.animeTitle}
                </Typography>

                {/* genre */}
                <Stack direction="row" gap={2}>
                    {anime?.genres?.map((genre) => (
                        <Link to={`/genre/${genre.toLowerCase()}`}>
                          <Button key = {genre}variant="contained">
                          {genre}
                          </Button>
                        </Link>
                    ))}
                </Stack>
                {/* synopsis */}
                <Typography variant="subtitle1">
                    {anime.synopsis}
                </Typography>

                <Stack direction="row" gap={2}>
                  <Button variant="outlined">
                    Status: {anime.status}
                  </Button>
                  <Button variant="outlined">
                  Release Date: {anime.releasedDate}
                  </Button>
                </Stack>
            </Stack>
          </Stack>


        {/* episode list */}

        <Stack p={9} sx={{ overflowY: 'auto' }} >
          <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
            <span style={{ color: '#F31503' }}>Episodes</span> List
          </Typography>

          
            
          <Stack direction = "row" gap={2} flexWrap="wrap">
            {anime?.episodesList?.slice(0).reverse().map((episode,idx) => (
            <Link to={`/vidcdn/watch/${episode?.episodeId}`} key={idx}>
              <Button
                size = "large"
                color = "error"
                variant = "contained"
                key = {idx}
                sx = {{width: '130px'}}
              >
                {`EP - ${episode?.episodeNum}`}
              </Button>
            </Link>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default AnimeDetails