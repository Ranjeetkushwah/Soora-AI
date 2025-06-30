import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadIcon from '@mui/icons-material/CloudUpload';
import EventIcon from '@mui/icons-material/Event';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from "react-router-dom";
import Allimages from '../../../../assets';

const WelcomeScreen = () => {
        const navigate = useNavigate();
  return (
    <Grid container minHeight="100vh" backgroundColor={'#fff'}>
      {/* Left Side: Welcome Message */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
           width: "49%",
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: 'Waylimo, sans-serif', mb: 2,fontWeight:400,fontSize:"48px" }}
          >
            Welcome to Soora! <br />  Where AI Technology meets <br /> professional photography!
          </Typography>
        </Box>
      </Grid>

      {/* Right Side: Account Created Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{

          p: { xs: 4, md: 8 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
           marginLeft: "150px",
        }}
      >
        <Box maxWidth={420} width="100%">
          {/* Top Icon and Text */}
          <Box textAlign="center" sx={{color:"#1F3A63"}}>
           <Box sx={{ textAlign: "center" }}>
                       <img
                src={Allimages.SooraIconDarkBlue}
                         alt="Soora"
                         width={150}
                         height={70}
                       />
                     </Box>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Congratulations!
            </Typography>
            <Typography variant="body2" mt={1}>
              Your account is created.
            </Typography>
          </Box>

          {/* Feature List */}
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: 2,
              backgroundColor: '#FFEDDC',
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1" mb={2} fontWeight="bold">
              You can now:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <UploadIcon sx={{ color: '#1E3A8A' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Upload Event Images"
                  secondary="Start uploading your event photos and let our AI work its magic."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EventIcon sx={{ color: '#1E3A8A' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Your Events"
                  secondary="Organize and track your Events and its photos with ease."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesomeIcon sx={{ color: '#1E3A8A' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Distribute with AI"
                  secondary="Our platform will identify & distribute photos to participants using face recognition."
                />
              </ListItem>
            </List>

            <Typography variant="body2" mt={2}>
              You are now subscribed to the{' '}
              <Box component="span" fontWeight="bold">
                Free Plan
              </Box>
              , which includes{' '}
              <Box component="span" fontWeight="bold">
                100 photo credits
              </Box>{' '}
              to get started.
            </Typography>
          </Paper>

          {/* Action Buttons */}
          <Box mt={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#1F3A63', mb: 2, textTransform: 'none' }}
               onClick={() => {
              navigate("/media-dashboard")}}
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderColor: '#1F3A63', color: '#1E3A8A', textTransform: 'none' }}
               onClick={() => {
              navigate("/welcomeplan")}}
            >
              Subscribe to a Plan
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomeScreen;
