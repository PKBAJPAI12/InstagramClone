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
import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div className='center'>
      <Card className='signpWrapper' sx={{ maxWidth: 500 }}>
        <div className='imgLogo'>
          <img width='130px' src={AppLogo}></img>
        </div>
        <CardContent>
          <Typography className='textClass' component="div">
            SignUp to see photos and videos from your friends
          </Typography>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <div>

            <TextField
              id="outlined-basic"
              label="Password"
              variant='outlined'
              fullWidth={true}
              margin='dense'
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant='outlined'
              fullWidth={true}
              margin='dense'
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant='outlined'
              fullWidth={true}
              margin='dense'
            />
            <Button size="small" color="secondary" fullWidth={true} variant='outlined' margin="dense"  component="label">
              <img className='imgcss' width='50px'  src={IconImage}></img>
              <p>Upload Profile Image</p>
              <input type='file' accept='image/*' hidden/>
              </Button>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" fullWidth={true} variant='contained'>Share</Button>
        </CardActions>
        <CardContent>
          <Typography className='textClass' variant="subtitle1">
            By Signing up, you agree to our term, condition and cookies policy.
          </Typography>
        </CardContent>
      </Card>
      <Card variant='outlined' sx={{ width: 500 }}>
      <CardContent>
          <Typography className='textClass' variant="subtitle1">
            Having an Account ? <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>

  );
}