import { React } from 'react'
import './Achievements.css'
import {Typography, Grid, Box, Stack, Container, Button} from "@mui/material";
import Icon1 from '../assets/acheivement-icon1.svg'
import Icon2 from '../assets/acheivement-icon2.svg'
import Icon3 from '../assets/acheivement-icon3.svg'
import Icon4 from '../assets/acheivement-icon4.svg'
import Icon7 from '../assets/achievement7.svg'
import Icon8 from '../assets/achievement8.svg'
import Icon9 from '../assets/achievement9.svg'
import Icon10 from '../assets/achievement10.svg'
import Icon12 from '../assets/achievement12.svg'
import achieveImg9 from '../assets/image 9.png'
import Illustration from "../assets/Illustration (1).svg";






const Achievements = () => {
    return (
        <div className='Achievements'>
            <div className='body'>
                <Container className='' component='div'>
                    <Grid container justifyContent='center' alignContent='center' spacing={4}>
                        <Grid item>
                            <Box padding='auto'>
                                <Typography className='Achievements-text' variant='h5'>
                                    Helping a local
                                </Typography>

                                <Typography className='Achievements-text green' variant='h5' sx>
                                    business reinvent itself
                                </Typography>
                                <Typography className='Achievements-text' variant='h6'>
                                    We reached here with our hard work and dedication
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                                    <Box>
                                        <Stack direction='row' alignContent='center' justifyContent='center' spacing={3}>
                                            <Box>
                                                <img src={Icon1} alt='an icon should be here' width='40px' height='40px'/>
                                            </Box>
                                            <Box justifyContent='center' alignContent='center'>
                                                <Typography className='achievement-icon-text1'>
                                                    2,245,341
                                                </Typography>
                                                <Typography className='achievement-icon-text2'>
                                                    Members
                                                </Typography>
                                            </Box>

                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Box>
                                        <Stack direction='row' alignContent='center' justifyContent='center' spacing={3}>
                                            <Box>
                                                <img src={Icon2} alt='an icon should be here' width='40px' height='40px'/>
                                            </Box>
                                            <Box justifyContent='center' alignContent='center'>
                                                <Typography className='achievement-icon-text1'>
                                                    2,245,341
                                                </Typography>
                                                <Typography className='achievement-icon-text2'>
                                                    Members
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Box>
                                        <Stack direction='row' alignContent='center' justifyContent='center' spacing={3}>
                                            <Box>
                                                <img src={Icon3} alt='an icon should be here' width='40px' height='40px'/>
                                            </Box>
                                            <Box justifyContent='center' alignContent='center'>
                                                <Typography className='achievement-icon-text1'>
                                                    2,245,341
                                                </Typography>
                                                <Typography className='achievement-icon-text2'>
                                                    Members
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Box>
                                        <Stack direction='row' alignContent='center' justifyContent='center' spacing={3}>
                                            <Box>
                                                <img src={Icon4} alt='an icon should be here' width='40px' height='40px'/>
                                            </Box>
                                            <Box justifyContent='center' alignContent='center'>
                                                <Typography className='achievement-icon-text1'>
                                                    2,245,341
                                                </Typography>
                                                <Typography className='achievement-icon-text2'>
                                                    Our Members
                                                </Typography>
                                            </Box>

                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
        </div>

        <div className='Achievements2'>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={Illustration} width='300px' alt='in image should be here'/>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} width='200px'>
                        <Typography className='achievement2-text' variant='h5' >
                            How to design your site footer like we did
                        </Typography>
                        <Box width='400px' component='div' className='text-box'>
                            <Typography className='achievement2-text' variant='p' >
                                Donec a eros justo. Fusce egestas tristique ultrices.
                                Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                                at scelerisque elit erat a magna. Donec quis erat at libero ultrices
                                mollis. In hac
                                habitasse platea dictumst. Vivamus vehicula leo dui,
                                at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                                non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                                faucibus efficitur quis massa. Praesent felis
                                est, finibus et nisi ac, hendrerit venenatis libero.
                                Donec consectetur faucibus ipsum id gravida.
                            </Typography>

                            <button className='green-btn' variant='contained'>
                                Learn more
                            </button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>


        <div className='Achievements3'>
        <Grid container justifyContent='center' alignContent='center' spacing={1}>
            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={achieveImg9} width='200px'/>
            </Grid>

            <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box alignContent='center' className='column'
                      paddingTop='30px' flexDirection='column'>
                    <Typography textAlign='start'>
                        British Dragon Boat Racing Association
                    </Typography>
                    <Typography textAlign='start' sx={{color: '#4CAF4F'}}>
                        Tim Smith
                    </Typography>
                    <Typography textAlign='start'>
                        British Dragon Boat Racing Association
                    </Typography>
                    <Stack alignSelf='start' justifySelf='center' className='gap' direction='row' spacing={2}>
                        <img src={Icon7} alt='an image should be here' width='50px'/>
                        <img src={Icon8} alt='an image should be here' width='50px'/>
                        <img src={Icon9} alt='an image should be here' width='50px'/>
                        <img src={Icon10} alt='an image should be here' width='50px'/>
                        <img src={Icon7} alt='an image should be here' width='50px'/>
                        <img src={Icon9} alt='an image should be here' width='50px'/>


                    </Stack>
                </Box>
            </Grid>
        </Grid>
        </div>
        </div>


    )
}
export default Achievements