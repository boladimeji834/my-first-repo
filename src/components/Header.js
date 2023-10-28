import { Reactt } from 'react'
import './Header.css'
import {Container, Typography, Grid, Card, Stack, Button, Box} from "@mui/material";
import Logo  from '../assets/Logo.svg'
import Logo1 from '../assets/Logo (1).svg'
import Logo2 from '../assets/Logo (2).svg'
import Logo3 from '../assets/Logo (3).svg'
import Logo4 from '../assets/Logo (4).svg'
import Logo5 from '../assets/Logo (5).svg'
import Icon from '../assets/Icon.svg'
import Icon1 from '../assets/Icon (1).svg'
import Icon2 from '../assets/Icon (2).svg'
import Frame from '../assets/Frame 35.svg'



const Header = () => {
    return(
        <Container component='div' className='Header'>
            <Typography className='client-text1' sx={{fontfamily: 'Inter',
                color: "#4D4D4D",
                textAlign: 'center',
                fontsize: "12.019px",
                fontstyle: 'normal',
                fontweight: 600,
                lineheight: "14.69px",/* 122.222% */
            }}>
                Our clients
            </Typography>
            <Typography className='client-text2'>
                We have been working with some Fortune 500+ clients
            </Typography>
            <Grid container spacing={10} justifyContent='center' alignContent='center' padding={4}>
               <Grid item justifyContent='center' alignContent='center'>
                   <img style={{minWidth: '50px'}} src={Logo}/>
               </Grid>
                <Grid item>
                    <img style={{minWidth: '50px'}} src={Logo1}/>
                </Grid>
                <Grid item>
                    <img style={{minWidth: '50px'}} src={Logo2}/>
                </Grid>
                <Grid item>
                    <img style={{minWidth: '50px'}} src={Logo3}/>
                </Grid>
                <Grid item>
                    <img style={{minWidth: '50px'}} src={Logo4}/>
                </Grid>
                <Grid item>
                    <img style={{minWidth: '50px'}} src={Logo5}/>
                </Grid>
            </Grid>
            <Typography variant='h4' className='client-text3'>
                Manage your entire community in a single system
            </Typography>
            <Typography className='client-text4'>
                Who is Nextcent suitable for?
            </Typography>
            <br/>

            <Grid container justifyContent='center' alignContent='center' spacing={5}>
                <Grid item width='350px'>
                    <Card>
                        <img src={Icon} alt='an image should be here' width='100px'/>
                        <Typography className='icon-heading' variant='h5'>
                            Membership Organisations
                        </Typography>
                        <br/>
                        <Typography className='icon-content'>
                            Our membership management software provides full automation of membership renewals and payments
                        </Typography>
                    </Card>
                </Grid>
                <Grid item width='350px'>
                    <Card>
                        <img src={Icon1} alt='an image should be here' width='100px'/>
                        <Typography className='icon-heading' variant='h5'>
                            National Associations
                        </Typography>
                        <br/>
                        <Typography className='icon-content'>
                            Our membership management software provides full automation of membership renewals and payments
                        </Typography>
                    </Card>
                </Grid>
                <Grid item width='350px'>
                    <Card>
                        <img src={Icon2} alt='an image should be here' width='100px'/>
                        <Typography className='icon-heading' variant='h5'>
                            Clubs And Groups
                        </Typography>
                        <br/>
                        <Typography className='icon-content' display='flex' flexWrap='wrap'>
                            Our membership management software provides full automation of membership renewals and payments
                        </Typography>
                    </Card>

                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item >
                    <img src={Frame} alt='an image should be here' width='500px'/>
                </Grid>

                <Grid item className ='frame-text' alignContent='center' justifyContent='center' sx={{
                    alignItems:'center',
                    justifyContent: 'center',
                    width: '400px',
                    height: '500px'
                }
                }>
                    <Stack component='div' direction='column' sx={{
                        padding: '100px 0px',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }
                    }>
                        <Box component='div' justifyContent='center' alignContent='center'>
                            <Typography className='frame-heading' variant='h5' textAlign='start'>
                                The unseen of spending three years at Pixelgrade
                            </Typography>
                        </Box>
                        <br/>

                        <Box component='div'>
                            <Typography className='frame-content-text'  textAlign='start'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                                amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat
                                vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                                Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                            </Typography>
                        </Box>
                        <br/>
                        <button  className='button' >
                            Register
                        </button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Header