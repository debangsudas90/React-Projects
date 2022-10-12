import { Link } from "react-router-dom"
import { Card, CardMedia, CardContent, Typography, Tooltip } from "@mui/material"

const VideoCard = ({ video }) => {
  // console.log(video)

  return (
    <Card sx={{backgroundColor: '#000'}}>

      <Link to = {video.episodeId ? 
        `/vidcdn/watch/${video.episodeId}` : 
        `/anime-details/${video.animeId}`
      }>
        <CardMedia 
          image = {video?.animeImg}
          alt = {video?.animeTitle}
          sx = {{ width: 200, height: 300 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 'auto'}}>

        <Link to={`/anime-details/${video?.animeId}`}>
          <Tooltip title={video?.animeTitle}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {video?.animeTitle.length > 16 ? video?.animeTitle.slice(0,17)+"..." :
              video?.animeTitle}
            </Typography>
          </Tooltip>
        </Link>

        {video.episodeId ? 
          <Link to = {`/vidcdn/watch/${video?.episodeId}`}>           
            <Typography noWrap variant="subtitle2" fontWeight="bold" color="gray">
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