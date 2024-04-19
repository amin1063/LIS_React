import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const AddData = () => {
    return (
        <>
            <Card sx={{ width: '30%' }}>
                <Box sx={{ width: '100%',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
                    <Typography variant='h5' fontWeight={'600'}>Add Data</Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        placeholder='Enter your name'
                        style={{ margin: '16px' }}
                    />
                    <TextField
                        placeholder='Enter your age'
                        label="Age"
                        variant="outlined"
                        style={{ margin: '16px' }}
                    />
                    <Stack  direction={'row'} gap={1} sx={{justifyContent:'center',padding:'10px'}}>
                        <Button sx={{width:'100%'}} variant='contained' color='success' >Add</Button>
                        <Button sx={{width:'100%'}}  variant='contained' color='error'>Cancel</Button>
                    </Stack>
                </Box>

            </Card>
        </>
    )
}

export default AddData