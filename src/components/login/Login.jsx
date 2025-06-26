import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Section */}
      <Box
        sx={{
          width: '50%',
          backgroundImage: "url('/src/assets/Background-Image 2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 4,
        }}
      >
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontFamily: 'Waylimo', fontWeight: 400 }}>
            Admin Portal Access
          </Typography>

          <Box mt={10}>
            <img src="/src/assets/laptop-screen.svg" alt="Laptop" width="590" height="330" />
          </Box>

          <Typography sx={{ fontWeight: 300, mt: 4 }}>
            Log in to manage, monitor, and maintain platform activities. <br />
            Secure access to all your admin tools in one place.
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 6,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src="/src/assets/soora-icon-dark-blue.svg" alt="Soora" width={150} height={70} />
        </Box>

        <Typography variant="h4" align="center" sx={{color:'#1F3A63'}} gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="h6" align="center" sx={{color:'#1F3A63'}} gutterBottom>
          Login to your account
        </Typography>

        <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
          <TextField
            label="E-mail ID"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
          />

          <TextField
            label="Enter Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
            }}
          >
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            <Link href="/forgot-password" sx={{ color: "#305791" }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1F3A63",
              height: 54,
              mt: 5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: "#163059"
              }
            }}
            onClick={() => {
              navigate("/dashboard");
              setLogin(true);
            }}
          >
            Login
          </Button>
        </Box>

        <Typography variant="body2" align="center" color="textSecondary" mt={3} >
          Don't have an account?{' '}
          <span  onClick={()=>{  navigate("/signup");}} style={{ color: '#1F3A63' }}>
            SignUP
          </span>
        </Typography>
      </Box>
    </Box>
  );
}














