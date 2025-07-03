

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';

const GetInTouch = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1F3A63',
        color: 'white',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}

    >
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Side - Form */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontFamily: 'Waylimo',
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Get in touch
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '90%' },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Have questions or need assistance? <br />
            Reach out to us anytime.
          </Typography>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              width: '100%',
            }}
          >
            <TextField
              label="Full Name"
              variant="filled"
              fullWidth
              InputProps={{
                sx: { backgroundColor: 'white', borderRadius: 1 },
              }}
            />
            <TextField
              label="Email-ID"
              variant="filled"
              fullWidth
              InputProps={{
                sx: { backgroundColor: 'white', borderRadius: 1 },
              }}
            />
            <TextField
              label="Description"
              variant="filled"
              fullWidth
              multiline
              rows={4}
              InputProps={{
                sx: { backgroundColor: 'white', borderRadius: 1 },
              }}
            />
            <Button
              variant="contained"
              sx={{
                alignSelf: { xs: 'center', md: 'flex-start' },
                backgroundColor: 'white',
                color: '#1F3A63',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Sign Up Now!
            </Button>
          </Box>
        </Grid>

        {/* Divider */}
        <Grid
          item
          xs={12}
          md="auto"
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: 'white', height: '100%' }}
          />
        </Grid>

        {/* Right Side - Contact Info & Social */}
        <Grid item xs={12} md={5}>
          <Box sx={{ pt: { xs: 4, md: 0 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Contact Us:
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Email sx={{ mr: 1 }} />
              <Link
                href="mailto:contactus@soora.com"
                underline="hover"
                color="inherit"
              >
                contactus@soora.com
              </Link>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Phone sx={{ mr: 1 }} />
              <Typography>+91 00000 00000</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Phone sx={{ mr: 1 }} />
              <Typography>+91 00000 00000</Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                mt: 4,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Follow Us :
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Instagram sx={{ mr: 1 }} />
                <Typography>@instagramhandle</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LinkedIn sx={{ mr: 1 }} />
                <Typography>@linkedhandle</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Twitter sx={{ mr: 1 }} />
                <Typography>@twitterhandle</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <YouTube sx={{ mr: 1 }} />
                <Typography>@youtubehandle</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
