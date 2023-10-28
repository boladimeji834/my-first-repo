import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import Next from '../assets/Nexcent (1).svg';
import NextLogo from '../assets/icona.svg';
import Container from '@mui/material/Container';


export default function ButtonAppBar() {
    return (

        <>
            <Container>
                <Stack component='nav'  sx={{background: '#fff',
                    // position: "static",
                    position: '',
                    display: "flex",
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <Stack direction='row' component='div' className='' sx={{
                        flexGrow: 1

                    }}>
                        <img src={NextLogo} width='50px'/>
                        <img src={Next} width='50px' sx={{color: '#fff'}}/>
                    </Stack>

                    <Stack component='div' direction='row' sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }
                    }>
                        <Stack component='div' direction='row' spacing={2}>
                            <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '15px'
                            }}>
                                <li style={{
                                    textDecoration: 'none',
                                    fontFamily: 'sans-serif',
                                    fontWeight: '18px'
                                }}>
                                    <Typography>
                                        Home
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Contact
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Facts
                                    </Typography>
                                </li>
                            </ul>
                            <Button variant='contained' sx={{height: '30px', background: '#4CAF4F'}} color='success'>
                                <Typography>
                                    LOGIN
                                </Typography>
                            </Button>
                        </Stack>

                    </Stack>

                </Stack>
            </Container>
        </>
    )
}
