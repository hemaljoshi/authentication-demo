import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login, googleSignIn } = useUserAuth();

  const onSignInHandler = async () => {
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item lg={4}>
            <Paper elevation={24} sx={{ padding: 2 }}>
              <Box sx={{ display: 'grid', justifyContent: 'center' }}>
                {error && <Alert severity='error'>{error}</Alert>}
                <TextField
                  type={'email'}
                  label='Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  sx={{ margin: 1 }}
                />
                <TextField
                  type={'password'}
                  label='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  sx={{ margin: 1 }}
                />
                <Button
                  variant='contained'
                  sx={{ margin: 1 }}
                  onClick={onSignInHandler}
                >
                  Sign in
                </Button>
                <hr />
                <GoogleButton
                  className='google-button'
                  type='dark'
                  onClick={handleGoogleSignIn}
                  label='Sign in with Google'
                />
                <Typography variant='body2' component='h3' sx={{ margin: 1 }}>
                  Don't have an account? <Link to='/signup'>Sign Up</Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
