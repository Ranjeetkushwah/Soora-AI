import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate();
  return (
    <Grid container minHeight="100vh">
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          width: "49%",
          backgroundImage: "url('/src/assets/Background-Image 2.jpg')",
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
          All the events in one place.
        </Typography>

        <Box
          component="img"
          src="/src/assets/laptop-screen.svg"
          alt="Laptop View"
          sx={{ width: "100%", maxWidth: 500, my: 4 }}
        />

        <Typography
          variant="body1"
          sx={{ maxWidth: 500, fontSize: "18px", fontFamily: "normal" }}
        >
          You're almost there! Get instant access to all your events, where{" "}
          <br /> you can easily browse, upload, and manage photos in one
          <br /> convenient place.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 4, md: 8 },
          marginLeft: "200px",
          position: "relative",
     
        }}
      >
        <Box maxWidth={400} mx="auto" >
          <IconButton
            size="small"
            sx={{ color: "white", bgcolor: "#1F3A63",position:"absolute", top: "30px",left: "-162px" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Box textAlign="center" mt={2} >
            <Box sx={{ textAlign: "center" }}>
              <img
                src="/src/assets/soora-icon-dark-blue.svg"
                alt="Soora"
                width={150}
                height={70}
              />
            </Box>
            <Typography variant="h6" mt={1} fontWeight="bold" color="#1F3A63">
              Verification
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              fontSize={"16px"}
              color="#305791"
            >
              We have sent a code to{" "}
              <Box component="span" fontWeight="bold">
                Name@mail.com
              </Box>
            </Typography>
          </Box>

          {/* OTP Input */}
          <Box mt={4} display="flex" justifyContent="space-between" gap={1}>
            {[...Array(6)].map((_, idx) => (
              <TextField
                key={idx}
                variant="outlined"
                sx={{ width: "48px", borderRadius: "8px", height: "48px" }}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", fontSize: 20 },
                }}
              />
            ))}
          </Box>

          {/* Timer */}
          <Typography textAlign="center" mt={2} color="text.secondary">
            02:30
          </Typography>

          {/* Resend Link */}
          <Typography
            textAlign="center"
            mt={2}
            fontSize={14}
            color="text.secondary"
          >
            Didn't receive a code?{" "}
            <Link href="#" underline="hover">
              Resend OTP
            </Link>
          </Typography>

          {/* Verify Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#1F3A63",
              borderRadius: 2,
              textTransform: "none",
            }}
            onClick={() => {
              navigate("/welcomescreen");
            }}
          >
            Verify
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VerificationPage;
