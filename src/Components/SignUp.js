import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppLogo from '../Assets/download (2).jpg'

export default function Signup() {
  return (
    <div className='center'>
<Card className='signpWrapper' sx={{ maxWidth: 345 }}>
      <div className='imgLogo'>
        <img src={AppLogo}></img>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
  );
}