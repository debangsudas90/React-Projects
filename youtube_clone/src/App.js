import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { Navbar, Feed, VideoData, ChannelData, SearchFeed } from './components'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed/>} />
                <Route path="/video/:id" element={<VideoData/>}/>
                <Route path="/channel/:id" element={<ChannelData/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App