import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
  Alert,
} from '@mui/material';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signUp } = useUserAuth();

  const onSignUpHandler = async () => {
    setError('');
    try {
      await signUp(email, password);
      navigate('/login');
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
                  onClick={onSignUpHandler}
                >
                  Sign Up
                </Button>
                <hr />
                <Typography variant='body2' component='h3' sx={{ margin: 1 }}>
                  Already have an account? <Link to='/login'>Sign In</Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
