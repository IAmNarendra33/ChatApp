import React from 'react'
import { Box, Typography,AppBar,Toolbar } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'


const Bar = () => {
  return (
    <div>
      <Box mb={4} >
       <AppBar position='static'>
        <Toolbar>
        <Box mr={2}>
         <ChatIcon fontSize='large'/>
        </Box>
        <Typography variant='h6' align='center'>
            ChatApp
        </Typography>
        </Toolbar>
        </AppBar> 
      </Box>
    </div>
  )
}

export default Bar ;
