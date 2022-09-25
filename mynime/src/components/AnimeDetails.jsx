import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack, Typography, Button, List, ListItem, ListItemText } from '@mui/material'
import ReactPlayer from 'react-player'

import { fetchFromApi } from '../utils/fetchFromApi'

const AnimeDetails = () => {

  const [anime, setAnime] = useState([])
  const [animeVid, setAnimeVid] = useState([])
  const [epiId, setEpiId] = useState("")
  const [isActive, setIsActive] = useState(false)

  const { id } = useParams()
  let { animeId } = useParams()

  const loadEpisode = (episodeNum) => {
    console.log(episodeNum)
    setEpiId(episodeNum)
  }

  const handleActive = event => {
    console.log(isActive)
    setIsActive(current => !current)
  }
  
  useEffect(() => {
    fetchFromApi(`anime-details/${id}`)
      .then((data) => {
        setAnime(data)
      }) 
  }, [id])

  useEffect(() => {
    fetchFromApi(`vidcdn/watch/${epiId}`)
      .then((data) => {
        setAnimeVid(data)
        console.log(data)
      }) 
  }, [epiId])

  return (
    <Box minHeight="95vh">
      <Box>

        {/* animedetails */}
      <div style={{
        background: 'linear-gradient(166deg, rgba(77,0,1,1) 55%, rgba(220,6,14,1) 100%)',
        height: '270px'
      }}
        />
        <Stack direction="row" justifyContent = "space-evenly" width="100%" mt = "25px">
            <img src={anime.animeImg} alt={anime.animeTitle} height="340" style={{borderRadius:10}} />

            <Stack direction = "column" gap={2} justifyContent = "center" sx={{color: "#fff", width: '70vw'}}>
                {/* title */}

                <Typography variant="h4">
                    {anime.animeTitle}
                </Typography>

                {/* genre */}
                <Stack direction="row" gap={2}>
                    {anime?.genres?.map((genre) => (
                        <Button key = {genre}variant="contained">
                        {genre}
                        </Button>
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


        {/* episode list and watch */}

        <Stack p={9} sx={{ overflowY: 'auto' }}>
          <Typography variant='h4' fontWeight='bold' mb={2}  sx={{color:'white'}}>
            <span style={{ color: '#F31503' }}>Episodes</span> List
          </Typography>

          <Stack direction="row">
            <Box sx={{color: '#fff', backgroundColor: '#212121', borderRadius:"10px"}}>
              <List sx={{maxHeight: 545, width: 100, overflow: 'auto'}}>
                {anime?.episodesList?.slice(0).reverse().map(episode => (
                <ListItem
                  button
                  key = {episode?.episodeId}
                  className = {isActive ? 'active' : ""}
                  onClick = {handleActive}
                >
                  <ListItemText primary = {`EP - ${episode?.episodeNum}`} onClick = {() => loadEpisode(episode?.episodeId)}/>
                </ListItem>
                ))}
              </List>
            </Box>
            <ReactPlayer url={`${animeVid?.sources?.[0]?.file}`} className="react-player" controls/>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default AnimeDetails