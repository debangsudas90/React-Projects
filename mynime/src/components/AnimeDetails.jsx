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
    <div style={{overflowX: "hidden"}}>
    <div style={{
      background: 'linear-gradient(166deg, rgba(77,0,1,1) 55%, rgba(220,6,14,1) 100%)',
      height: '270px'
    }}
    />
    <Box minHeight="95vh" p={2}>
      {/* animedetails */}
        <Stack gap = {2} justifyContent = "space-evenly" alignItems = "center" mt = "20px" sx={{
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row"
          }
        }}>
            <img src={anime.animeImg} alt={anime.animeTitle} height="340" style={{
              borderRadius:10}}/>

            <Stack direction = "column" gap={2} justifyContent = "center" sx={{color: "#fff", width: '70vw'}}>
              {/* title */}

              <Typography variant="h4" 
                sx={{
                  typography: { 
                    sm: 'h5',
                    xs: 'h5',
                    md: 'h4',
                    lg: 'h4'
                  },
                  fontWeight: {
                    xs: "500",
                    sm: "500",
                    md: "medium",
                    lg: "bold"
                  }
                }}
              >
                  {anime.animeTitle}
              </Typography>

              {/* genre */}
              <Stack direction="row" gap={2} flexWrap="wrap">
                {anime?.genres?.map((genre) => (
                  <Link to={`/genre/${genre.toLowerCase()}`}>
                    <Button key = {genre} fullWidth variant="contained" size = "medium"
                    >
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
                <Button variant="outlined" size="small">
                  Status: {anime.status}
                </Button>
                <Button variant="outlined" size='small'>
                  Release Date: {anime.releasedDate}
                </Button>
              </Stack>
            </Stack>
          </Stack>


        {/* episode list */}

        <Stack p={6} sx={{ overflow: 'auto' }} >
          <Typography variant='h4' mb={2}  sx={{
            color:'white',
            typography: { 
              sm: 'h5',
              xs: 'h5',
              md: 'h4',
              lg: 'h4'
            },
            fontWeight: {
              xs: "medium",
              sm: "medium",
              md: "bold",
              lg: "bold"
            }
          }}>
            <span style={{ color: '#F31503' }}>Episodes</span> List
          </Typography>

          <Stack direction = "row" gap={2} flexWrap="wrap">
            {anime?.episodesList?.slice(0).reverse().map((episode,idx) => (
            <Link to={`/vidcdn/watch/${episode?.episodeId}`}>
              <Button
                size = "large"
                color = "error"
                variant = "contained"
                key = {idx}
                sx = {{
                  width: {
                    lg: '130px',
                    md: '130px',
                    sm: '110px',
                    xs: '110px',
                  }
                }}
              >
                {`EP - ${episode?.episodeNum}`}
              </Button>
            </Link>
            ))}
          </Stack>
        </Stack>
    </Box>
    </div>
  )
}

export default AnimeDetails