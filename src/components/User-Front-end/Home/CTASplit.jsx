import React from 'react';
import { Box, Grid, Typography, Button, Container, Divider } from '@mui/material';

const CTASplit = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff',width:"100%"}}>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderLeft: '1px solid transparent', position: 'relative' }}
        >
          {/* Vertical Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              borderColor: '#1F3A63',
              borderWidth: 1,
              display: { xs: 'none', md: 'block' },
            }}
          />

          {/* Left Box */}
          <Grid xs={12} md={6}>
            <Box sx={{ pr: { md: 5 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                       fontFamily: "Waylimo",
                                fontWeight:400,
                  color: '#1F3A63',
                  mb: 2,
                  fontSize:"48px"
                }}
              >
                Ready to make your <br/> attendees' lives easier?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#44577c',
                  mb: 3,
                  maxWidth: 400,
                  mx: { xs: 'auto', md: 'unset' }
                }}
              >
                Join our platform and easily share your event’s images with your attendees
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1F3A63',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#163055',
                  },
                }}
              >
                Sign Up Now!
              </Button>
            </Box>
          </Grid>

          {/* Right Box */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 5 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h5"
                sx={{
                       fontFamily: "Waylimo",
                  fontWeight: 400,
                  color: '#1F3A63',
                  mb: 2,
                   fontSize:"48px"
                }}
              >
                Ready to find your <br/> photos?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#44577c',
                  mb: 3,
                  maxWidth: 400,
                  mx: { xs: 'auto', md: 'unset' }
                }}
              >
                Join our platform and easily discover the images that hold your cherished memories
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1F3A63',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#163055',
                  },
                }}
              >
                Download the app
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CTASplit;
