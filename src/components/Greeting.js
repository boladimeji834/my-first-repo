import  { React } from 'react';
import { Stack } from '@mui/material';


const Greeting = () => {
    return (
        <div>
            <Stack direction='row' alignContent='center'  spacing={2} justifyContent='center' >
                <div>
                    <h1>
                        HELLO EVERYONE
                    </h1>
                </div>

                <div>
                    <h1>
                        Stop there
                    </h1>
                </div>

            </Stack>

        </div>
    )
}
export default Greeting;