import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './index.css'

import { Feed, VideoDetails, AnimeDetails, SearchFeed, Navbar, GenreFeed } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/vidcdn/watch/:animeId" exact element={<VideoDetails/>}/>
          <Route path="/anime-details/:id" exact element={<AnimeDetails/>}/>
          <Route path="/search/:searchTerm" exact element={<SearchFeed/>}/>
          <Route path="/genre/:category" exact element={<GenreFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

