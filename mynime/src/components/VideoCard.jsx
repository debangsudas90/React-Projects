import { Link } from "react-router-dom"
import { Card, CardMedia, CardContent, Typography, Tooltip } from "@mui/material"

const VideoCard = ({ video }) => {

  return (
    <Card sx={{backgroundColor: '#000', borderRadius: "10px"}}>

      <Link to = {video.episodeId ? 
        `/vidcdn/watch/${video.episodeId}` : 
        `/anime-details/${video.animeId}`
      }>
        <CardMedia
          component = "img" 
          image = {video?.animeImg}
          alt = {video?.animeTitle}
          sx = {{ 
            width: {
              xs: 150,
              sm: 150,
              md: 200,
              lg: 200
            }, 
            height: {
              xs: 200,
              sm: 150,
              md: 300,
              lg: 300
            } 
          }}
        />
      </Link>

      <CardContent sx={{ 
        backgroundColor: '#1e1e1e', height: 'auto', '&:last-child': { pb: 2.5 },
        width: {
          xs: 120,
          sm: 120,
          md: 169,
          lg: 169
        }
      }}>

        <Link to={`/anime-details/${video?.animeId}`}>
          <Tooltip title={video?.animeTitle}>
            <Typography variant="subtitle1" color="#fff"
            sx={{
              typography: { 
                sm: 'subtitle2',
                xs: 'subtitle2',
                md: 'subtitle1',
                lg: 'subtitle1'
              },
              fontWeight: {
                xs: "medium",
                sm: "500",
                md: "bold",
                lg: "bold"
              }
            }}
            >
              {video?.animeTitle.length > 15 ? video?.animeTitle.slice(0,14)+"..." :
              video?.animeTitle}
            </Typography>
          </Tooltip>
        </Link>

        {video.episodeId ? 
          <Link to = {`/vidcdn/watch/${video?.episodeId}`}>           
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              Episode {video?.episodeNum}
            </Typography>
          </Link>
          :
          null}
      </CardContent>
    </Card>
  )
}

export default VideoCard