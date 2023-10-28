import { React } from 'react';
import {Grid, Stack, Box, Typography, Button} from "@mui/material";
import Container from '@mui/material/Container';
import illustration from '../assets/Illustration (1).svg'
import Ellipse from '../assets/Ellipse 7.svg'

function Illustration() {
    return (
        <Stack sx={{
            background: '#F5F7FA',
            minHeight: '300px',
            my: '10px'
        }
        }>
            <Container >
                <Stack py='68px'>
                    <Grid container columnSpacing={6} rowSpacing={3}>
                        <Grid item xs={12} sm={8} md={8}>
                            <Box sx={{
                                // background: 'white',
                                display: 'flex',
                                flexDirection: "column"
                            }} p={2}>
                                <Typography variant='h3' sx={{
                                    textAlign: 'start'
                                }}>
                                    Lessons and Insights

                                </Typography>
                                <Typography variant='h3' sx={{
                                    color: '#4CAF4F',
                                    textAlign: 'start'
                                }}>
                                    from 8 years
                                </Typography>
                                <br/>
                                <br/>
                                <Typography variant='h6' sx={{
                                    color: '#717171',
                                    textAlign: 'start'
                                }}>
                                    Where to grow your business as a photographer: site or social media?
                                </Typography>
                                <br/>
                                <br/>
                                <Button variant='contained' style={{
                                    alignSelf: 'start',
                                    justifySelf: 'start',
                                    background: '#4CAF4F'
                                }}>
                                    <Typography variant='h5'>
                                        Register
                                    </Typography>
                                </Button>
                            </Box>


                        </Grid>
                        <Grid item alignContent='flex-end' justifyContent='flex-end' display='flex'>
                            <Stack component='div' >
                                <img src={illustration} style={{
                                    height:'400px',
                                    width: '300px'
                                }}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} xl={12} className='ellipses-grid'>
                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img src={Ellipse} width='10px'/>
                                <img src={Ellipse} width='10px'/>
                                <img src={Ellipse} width='10px'/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
}
export default Illustration;