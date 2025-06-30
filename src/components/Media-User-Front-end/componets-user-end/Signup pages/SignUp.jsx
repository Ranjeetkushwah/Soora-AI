import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Email, Phone, Business, Lock } from "@mui/icons-material";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SmartphoneTwoToneIcon from "@mui/icons-material/SmartphoneTwoTone";
import { useNavigate } from "react-router-dom";
import Allimages from "../../../../assets";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <Grid container sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Left Side */}
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
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Waylimo", fontWeight: 400, textAlign: "center" }}
            gutterBottom
          >
            The simplest way to manage and upload
            <br />
            event photos effortlessly.
          </Typography>
          <Box mt={10}>
            <img
              src={Allimages.LaptopScreen}
              alt="Laptop"
              width="590px"
              height="330px"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              textAlign: "center",
              fontSize: "25px",
            }}
            mt={4}
          >
            Join our platform and streamline your photo management <br />{" "}
            process. Upload, organize, and share event photos with just a <br />{" "}
            few clicks, all in one place.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: 6,
          display: "flex",
          alignItems: "center",
          color: "#1F3A63",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 500, ml: "110px" }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img
              src={Allimages.SooraIconDarkBlue}
              alt="Soora"
              width={150}
              height={70}
            />
          </Box>

          <Typography variant="h5" align="center" gutterBottom>
            Sign up
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#305791"
            gutterBottom
          >
            Fill your details to create a new account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="fullName"
              label="Full Name"
              variant="outlined"
              margin="normal"
              value={formData.fullName}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person2SharpIcon />
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              required
            />

            <Box display="flex" gap={1}>
              <Select
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    countryCode: e.target.value,
                  }))
                }
                sx={{ width: 100 }}
              >
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
              </Select>
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>

            <TextField
              fullWidth
              name="company"
              label="Company"
              variant="outlined"
              margin="normal"
              value={formData.company}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Business />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              helperText="Password must be at least 8 characters and include letters, numbers, and symbols."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, bgcolor: "#1F3A63", borderRadius: "8px" }}
              onClick={() => {
                navigate("/verification");
              }}
            >
              Verify
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
                style={{ color: "#1e293b", fontWeight: 500 }}
              >
                Log In
              </span>
            </Typography>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
