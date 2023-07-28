import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import AppLogo from '../Assets/download (2).jpg'
import IconImage from '../Assets/upload.png'
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bg from '../Assets/img.png'
import bg1 from '../Assets/img1.png'
import bg2 from '../Assets/img2.png'
import bg3 from '../Assets/img3.png'
import bg4 from '../Assets/screenshot4-2x.png'


export default function Login() {
    return (
        <div className='loginWrapper'>
           <div className='center'>
            <div className='imgcar' style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
    <div className='car'>
    <CarouselProvider
       visibleSlides={1}
        naturalSlideWidth={238}
        naturalSlideHeight={504}
        totalSlides={4}
        hasMasterSpinner
        isPlaying={true}
        infinite={true}
        dragEnabled={false}
        touchEnabled={false}
      >
        <Slider>
          <Slide index={0}><Image src={bg1} /></Slide>
          <Slide index={1}><Image src={bg2} /></Slide>
          <Slide index={2}><Image src={bg3} /></Slide>
          <Slide index={3}><Image src={bg4} /></Slide>
        </Slider>
      </CarouselProvider>
    </div>
            </div>
        </div> 
        <div className='logincenter'>
            <Card className='signpWrapper loginCard1' sx={{ maxWidth: 500 }}>
                <div className='imgLogo'>
                    <img width='130px' src={AppLogo}></img>
                </div>
                <CardContent>
                    {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                    <div>
                    <TextField
                            id="outlined-basic"
                            label="Email"
                            variant='outlined'
                            fullWidth={true}
                            margin='dense'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant='outlined'
                            fullWidth={true}
                            margin='dense'
                        />
                    <Link className='linkcenter' to="/login">Forget Password?</Link>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" fullWidth={true} variant='contained'>LOG IN</Button>
                </CardActions>
            </Card>
            <Card className='signpWrapper' sx={{ width: 500 }}>
                <CardContent>
                    <Typography className='textClass' variant="subtitle1">
                        Don't have an Account? <Link to="/signup">Sign up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </div>
        

    );
}