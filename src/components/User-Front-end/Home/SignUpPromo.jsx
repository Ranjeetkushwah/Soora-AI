import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
} from '@mui/material';

const SignUpPromo = () => {
  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  return (
    <Box sx={{ backgroundColor: '#FAE6D7', py: 6, display: "flex", justifyContent: "flex-start" }}>
      <Box sx={{ width: "inherit", paddingLeft: "190px", paddingTop: "80px" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          gap={20}
        >
          {/* Screenshot Section */}
          <Box xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
                minHeight: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: 3,
                py: 5,
                width: "486px"
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  color: '#1F3A63',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Screenshot of Media <br />
                Manager's Dashboard <br />
                showing photo credits
              </Typography>
            </Paper>
          </Box>

          {/* Text Section */}
          <Box xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.4rem' },
                fontFamily: "Waylimo",
                fontWeight: 400,
                color: '#1F3A63',
                mb: 2,
              }}
            >
              Join now & unlock 100 <br /> photo credits <span style={{ fontWeight: 400 }}>FREE!</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: '#1F3A63',
                fontFamily: 'Poppins, sans-serif',
                mb: 2,
              }}
            >
              Create your account now and instantly receive 100 <br /> Photo Credits to explore.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: '#1F3A63',
                fontFamily: 'Poppins, sans-serif',
                mb: 3,
              }}
            >
              Use them to access all our premium features and start <br />finding your event photos with ease—completely free!
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1F3A63',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 3,
                py: 1.2,
                borderRadius: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                '&:hover': {
                  backgroundColor: '#172f50',
                },
              }}
              onClick={handleSignUp}
            >
              Sign Up Now!
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpPromo;
