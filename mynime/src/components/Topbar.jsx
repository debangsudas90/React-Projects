import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button, Box } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { fetchFromApi } from '../utils/fetchFromApi';

const Topbar = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const [topAiring, setTopAiring] = useState([])

    useEffect(() => {
        fetchFromApi(`top-airing?page=1`)
            .then((data) => setTopAiring(data.slice(0,7)))
    },[])

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = topAiring.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (

    // material-ui-carousel
    
    <Box sx={{flexGrow: 1}}>
    <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        containerStyle={{
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
        }}
        onChangeIndex={handleStepChange}
        interval = {6000}
        enableMouseEvents
    >
        {topAiring.map((list, index) => (
        <div key={list.animeId}>
            {Math.abs(activeStep - index) <= 2 ? (
            <Stack direction="row" justifyContent = "space-evenly" width="100%">
                <Stack direction = "column" gap={3} justifyContent = "center" sx={{color: "#fff", width: '70vw'}}>
                    {/* title */}

                    <Typography variant="h4">
                        {list.animeTitle}
                    </Typography>
                    {/* genre */}
                    <Stack direction="row" gap={2}>
                        {list.genres.map((genre,idx) => (
                            <Button                        variant="outlined"
                                key={idx}
                            >
                            {genre}
                            </Button>
                        ))}
                    </Stack>
                    <Link to = {list.animeId ? `/anime-details/${list.animeId}` : null}>
                        <Button size="large" color="error" variant="contained"
                        sx = {{display: 'flex', justifyContent: "center", width: '70vw'}}>
                        Play
                        <PlayArrowIcon sx={{ fontSize:20, color: 'white', ml:'5px'}}/>
                        </Button>
                    </Link>
                </Stack>
                <img src={list.animeImg} alt={list.animeTitle} height="360" style={{borderRadius:10}}/>
            </Stack>
            ): null}
        </div>
        ))}
    </AutoPlaySwipeableViews>
    <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{backgroundColor: '#000'}}
        nextButton={
        <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
        >
            {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
            ) : (
            <KeyboardArrowRight />
            )}
        </Button>
        }
        backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
            ) : (
            <KeyboardArrowLeft />
            )}
        </Button>
        }
    />
    </Box>
  )
}



export default Topbar