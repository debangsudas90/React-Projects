import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button, Box, Paper } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { fetchFromApi } from '../utils/fetchFromApi'
import { categories } from '../utils/constants'

const Topbar = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const [topAiring, setTopAiring] = useState([])

    useEffect(() => {
        fetchFromApi(`top-airing?page=1`)
            .then((data) => setTopAiring(data.slice(0,9)))
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
    <Box sx={{flexGrow: 1, pl: 3, pr: 3}}>
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
            <Paper 
                sx={{
                    minHeight: {
                        sm: "45vh",
                        xs: "45vh"
                    },
                    backgroundImage: {
                        sm: `url(${list.animeImg})`,
                        xs: `url(${list.animeImg})`,
                        md: `none`,
                        lg: "none"
                    },
                    backgroundSize: {
                        sm: "800px"
                    },
                    backgroundRepeat: {
                        sm: "no-repeat"
                    },
                    background: "rgb(30,30,30)"
                }}
            >
            <Stack 
                direction="row" 
                justifyContent = "space-between"
                alignItems = "center"
                gap={3}
                sx={{
                    mt: 2, pl: 3, overflow: 'hidden',
                    background: {
                        xs: "",
                        sm: "",
                        md: "linear-gradient(115deg, rgb(0, 0, 0) 25.8%, rgb(178, 14, 14) 112.6%)",
                        lg: "linear-gradient(115deg, rgb(0, 0, 0) 25.8%, rgb(178, 14, 14) 112.6%)",
                    }
                }}
            >
                <Stack 
                    direction = "column" 
                    gap={3} 
                    justifyContent = "center" 
                    sx={{
                        color: "#fff", width: '70vw',
                        borderRadius: "15px",
                        mt: {
                            sm: "80px",
                            xs: "80px",
                            md: "inherit",
                            lg: "inherit"
                        },
                        backdropFilter: "blur(15px)"
                    }}
                >
                    {/* title */}
                    <Typography fontWeight = "bold" sx={{
                        typography: { 
                            sm: 'h5',
                            xs: 'h6',
                            md: 'h4',
                            lg: 'h4'
                        },
                        p: {
                            sm: 2,
                            xs: 2,
                            md: "inherit",
                            lg: "inherit"
                        },
                        pb: {
                            sm: 0,
                            xs: 0
                        }
                    }}>
                        {list.animeTitle}
                    </Typography>

                    {/* genre */}
                    <Stack direction="row"  flexWrap="wrap" gap={2} 
                    sx={{display: {xs: 'none', sm: 'none', md: 'inherit', lg: 'inherit'}}}
                    >
                        {list.genres.map((genre,idx) => (
                            <div>
                            {categories.some(category => category.name === genre) ?
                            <Link to = {`/genre/${genre.toLowerCase()}`}>
                              <Button key = {genre} variant="contained" size = "medium"
                              >
                              {genre}
                              </Button>
                            </Link>
                            :
                            <Button key = {genre} variant="contained" size = "medium"
                            >
                            {genre}
                            </Button>}
                          </div>
                        ))}
                    </Stack>

                    <Link to = {list.animeId ? `/anime-details/${list.animeId}` : null}>
                        <Button size="medium" color="error" variant="contained"
                        sx = {{display: 'flex', justifyContent: "center", width: '70vw'}}>
                        Watch Now
                        <PlayArrowIcon sx={{ fontSize:20, color: 'white', ml:'5px'}}/>
                        </Button>
                    </Link>
                </Stack>
                <Box sx={{
                    display: {
                        lg: "inherit",
                        md: "inherit",
                        sm: "none",
                        xs: "none"
                    }
                }}>
                    <img src={list.animeImg} alt={list.animeTitle} height="360"
                    style={{borderRadius:10}}/>
                </Box>
            </Stack>
            </Paper>
            ): null}
        </div>
        ))}
    </AutoPlaySwipeableViews>
    <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{backgroundColor: '#0e0e0e'}}
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