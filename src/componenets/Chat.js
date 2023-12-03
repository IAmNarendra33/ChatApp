import React, {  useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  FormControl,
  TextField,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {ChatMessageDto} from './ChatMessageDto'

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

const sendMessage =()=>{
  new ChatMessageDto(setChatMessages 
    ) 
   console.log('sent')
}

const listChatMessages = chatMessages.map((chatMessageDto, index) => (
  <ListItem key={index}>
    <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}`} />
  </ListItem>
 ));

return (
    <>
      <Container>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Chat
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} style={{ height: "20rem" }}>
                <List style={{ height: '18rem', overflow: 'auto' }}>
                  {listChatMessages}
                </List>
              </Grid>
              <Grid item xs={5} paddingY={2}>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleUserChange}
                    value={user}
                    label="Nickname"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleMessageChange}
                    value={message}
                    label="Type your message ..."
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={sendMessage}
                value
                aria-label="Send" color="primary">
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Chat;
