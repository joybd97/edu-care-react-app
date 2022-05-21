import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import img from '../../pictures/appointment.png'
import { Button, Container, TextField, Typography } from '@mui/material';
const connectBg = {
    background: `url(${img})`,
    marginTop:50,
    backgroundColor: 'rgba(45,58,74,.7)',
    backgroundBlendMode: 'darken, luminosity'
}
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Container style={connectBg}>
            <Typography variant="h6" style={{color: '#5CE7ED', paddingTop:'40px'}} >Contact US</Typography>
            <Typography variant="h5" style={{color: 'white'}}>Always Connect With us</Typography>
            <form>
              <TextField placeholder="Email Address" style={{backgroundColor: 'white', width: '60%', MarginTop:'20px'}}></TextField>
              <TextField placeholder="Subject" style={{backgroundColor: 'white', width: '60%', margin:'10px'}}></TextField> <br />
              <TextField
                multiline
                rows={4}
                placeholder="Text Message"
                style={{backgroundColor: 'white', width: '60%'}}
                 />
                    <br />
                 <Button type="submit" variant="contained" style={{backgroundColor: '#5CE7ED', color: 'white', margin:'20px'}}>Submit</Button>
            </form>        
        </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;