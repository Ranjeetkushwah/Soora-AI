import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
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
        py: 8,
        px: { xs: 3, md: 8 },

      }}

    >

      <Grid container spacing={60}>
        {/* Left Side - Form */}
        <Grid item xs={12} md={6} pl={18}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontFamily: "Waylimo",
              fontWeight: 400,
              fontSize: "48px"
            }}
          >
            Get in touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Have questions or need assistance? <br />
            Reach out to us anytime.
          </Typography>

          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: "200%" }}
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
                alignSelf: 'flex-start',
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
        {/* Right Side - Contact Info & Social */}
        <Grid item xs={12} md={6}>
          <Box bgcolor={'red'} >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', md: 'block' }, mb: 3 }}
            />
          </Box>


          <Box sx={{ pl: { md: 4 }, pt: { xs: 4, md: 0 } }}>
            {/* Contact Info */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              Contact Us:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Link
                href="mailto:contactus@soora.com"
                underline="hover"
                color="inherit"
              >
                contactus@soora.com
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography>+91 00000 00000</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography>+91 00000 00000</Typography>
            </Box>

            {/* Social Links */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', mb: 1, mt: 9 }}
            >
              Follow Us :
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
