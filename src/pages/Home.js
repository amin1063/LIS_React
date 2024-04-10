import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HomeImg from '../images/Home-lab-bg.jpg'

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeImg})`,
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    
      }}

    >
      <Box
        sx={{
          backgroundColor: 'rgb(47, 48, 47,0.3)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          width: '70%',
          textAlign: 'left',
          padding: '25px'
        }}>
          <Typography variant='h2' color={'white'}>Award Winning Laboratory Center </Typography>
          <Typography variant='h6' color={'white'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
          <Button sx={{ mt: 2, width: '60%' }} variant='contained'>Explore More</Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Home