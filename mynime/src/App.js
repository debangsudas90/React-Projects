import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { Feed, VideoDetails, AnimeDetails, SearchFeed, Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id" exact element={<VideoDetails/>}/>
          <Route path="/anime/:id" exact element={<AnimeDetails/>}/>
          <Route path="/search/:searchTerm" exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

