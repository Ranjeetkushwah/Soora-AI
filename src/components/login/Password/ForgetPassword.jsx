import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import Allimages from '../../../assets';


export default function ForgotPassword() {
    const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    console.log("Reset email sent to:", email);
    navigate('/changepassword')
    // You can add actual logic here to send reset email
  };

  return (
    <Grid container minHeight="100vh">
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          width: "49%",
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          color: "#fff",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, fontFamily: "Waylimo, sans-serif", fontSize: "32px" }}
        >
         Password reset has never been this easy!
        </Typography>

        <Box
          component="img"
          src={Allimages.LaptopScreen}
          alt="Laptop View"
          sx={{ width: "100%", maxWidth: 500, my: 4 }}
        />

        <Typography
          variant="body1"
          sx={{ maxWidth: 500, fontSize: "18px", fontFamily: "Poppins" }}
        >
          Don’t worry, you’re just a step away from accessing your events. Enter your email to receive a link and create a new password. We'll help you regain access to your media management in no   time.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid

        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 8 },
          marginLeft: "200px",
          position: "relative",

        }}
      >
         <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={2}
      position="relative"

    >
      {/* Back Button */}
          <Box width="100%" display="flex" alignItems="center" mb={4} sx={{ position: 'absolute', top: 0, left: "-231px" }}>
        <IconButton color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="body2" color="primary" ml={0.5}>
          Back
        </Typography>
      </Box>

      {/* Icon */}
          <Box sx={{ textAlign: "center", mb: 4, marginTop: -20 }}>
                  <img
              src={Allimages.SooraIconDarkBlue}
                    alt="Soora"
                    width={150}
                    height={70}
                  />
                </Box>

      {/* Title */}
      <Typography variant="h5" fontWeight={600} sx={{color:'#1F3A63'}} gutterBottom>
        Forgot Password
      </Typography>
      <Typography variant="body2" color="#1F3A63" mb={4}>
        We will send you reset instructions on your E-mail ID
      </Typography>

      {/* Email Input */}
      <TextField
        fullWidth
        placeholder="Enter your registered E-mail ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 400, mb: 4 ,color:'#1F3A63'}}
     
      />

      {/* Reset Password Button */}
      <Button
        variant="contained"
        size="large"

        onClick={handleReset}
        sx={{
          backgroundColor: '#1b3a65',
          borderRadius: '8px',
          px: 4,
          py: 1.5,
          textTransform: 'none',
          fontWeight: 500,
          width: '100%',
          maxWidth: 400,
        }}
      >
        Reset Password
      </Button>

      {/* Footer */}
      <Typography variant="body2" mt={4} color="textSecondary">
        Don’t have an account?{' '}
            <Link onClick={() => navigate("/signup")} underline="hover" fontWeight={500}>
          Sign Up
        </Link>
      </Typography>
    </Box>
      </Grid>
    </Grid>
  );
};






