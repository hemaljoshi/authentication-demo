import React from 'react';
import { Container, Grid, Button, Paper, Box, Typography } from '@mui/material';
import { useUserAuth } from '../Context/UserAuthContext';

const Home = () => {
  const { user, logout } = useUserAuth();
  const onSignOutHandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
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
                <Typography variant='h6' component='h3'>
                  Hello Welcome {user && user.displayName}
                </Typography>
                <Typography variant='h6' component='h3'>
                  Your Email is {user && user.email}
                </Typography>
                <Button
                  variant='contained'
                  sx={{ margin: 1 }}
                  color='error'
                  onClick={onSignOutHandler}
                >
                  Sign out
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
