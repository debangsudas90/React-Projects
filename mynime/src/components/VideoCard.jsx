import { Link } from "react-router-dom"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

const VideoCard = ({ video }) => {
  // console.log(video)

  return (
    <Card sx={{backgroundColor: '#000'}}>
      {/* chnage */}
      <Link to = {`/vidcdn/watch/${video.episodeId}`}>
        <CardMedia 
          image = {video?.animeImg}
          alt = {video?.animeTitle}
          sx = {{ width: 200, height: 300 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '40px'}}>
        {/* change */}
        <Link to={video?.animeId ? `/anime-details/${video.animeId}` : null}>
          <Typography noWrap variant="subtitle1" fontWeight="bold" color="#fff">
            {video?.animeTitle.length > 15 ? video?.animeTitle.slice(0,15)+"..." :
            video?.animeTitle}
          </Typography>
        </Link>
        <Link to = {`/vidcdn/watch/${video.episodeId}`}>
          <Typography noWrap variant="subtitle2" fontWeight="bold" color="gray">
            Episode {video?.episodeNum}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard