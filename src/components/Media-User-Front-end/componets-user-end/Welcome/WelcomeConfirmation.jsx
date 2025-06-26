import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhotoIcon from '@mui/icons-material/Photo';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { useNavigate } from "react-router-dom";

const WelcomeConfirmation = () => {
    const navigate = useNavigate();
  return (
    <Grid container minHeight="100vh">
      {/* Left Side - Message */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
             width: "49%",
          backgroundImage: "url('/src/assets/Background-Image 2.jpg')",
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
            sx={{ fontFamily: 'Waylimo, sans-serif', fontWeight: 400,fontSize:"48px" }}
          >
            Thank you for joining Soora! <br />
            Explore and make the most <br />
            of your new plan’s features.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Confirmation */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft:"150px"
        }}
      >
        {/* Top Icon + Message */}
        <Box textAlign="center" mb={4}>
          <Box sx={{ textAlign: "center" }}>
                            <img
                              src="/src/assets/soora-icon-dark-blue.svg"
                              alt="Soora"
                              width={150}
                              height={70}
                            />
                          </Box>
          <Typography variant="h6" mt={2} fontWeight="bold">
            Congratulations!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your subscription plan is ready to serve you.
          </Typography>
        </Box>

        {/* Info Box */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#FFF3E0',
            p: 3,
            borderRadius: 2,
            maxWidth: 400,
            mb: 4,
          }}
        >
          <Typography variant="body1" mb={1}>
            You are now subscribed to the <strong>Standard Plan</strong>.
          </Typography>
          <Typography variant="body2" mb={2}>
            You can now:
          </Typography>
          <List dense>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemIcon>
                <PhotoIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Upload 2500 Photo"
                secondary="Start uploading your event photos and let our AI work its magic."
              />
            </ListItem>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemIcon>
                <SupportAgentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Contact our Support Team 24/7"
                secondary="Our Support Team is here around the clock to assist you with any questions."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PrecisionManufacturingIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Distribute with AI"
                secondary="Our platform will identify & distribute photos using face recognition."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            maxWidth: "384px",
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: '#1F3A63',
          }}
            onClick={() => {
              navigate("/media-dashboard");}}
        >
          Go to Dashboard
        </Button>
      </Grid>
    </Grid>
  );
};

export default WelcomeConfirmation;
