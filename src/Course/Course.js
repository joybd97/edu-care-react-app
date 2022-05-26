import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Course = (props) => {
    const {Title,Price,img,desc}= props.course;
    
    return (
        <Card sx={{ width: '100%',height: '100%' ,display: 'flex', padding: '20px'}}>
      <CardMedia
        component="img"
        height="140"
        image={require(`../pictures/${img}`)} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <h3>{Price}$</h3>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Buy Now!</Button>
      </CardActions>
    </Card>
    );
};

export default Course;