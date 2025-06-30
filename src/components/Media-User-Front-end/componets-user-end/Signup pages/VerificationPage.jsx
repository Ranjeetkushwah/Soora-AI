import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Allimages from "../../../../assets";

const VerificationPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // only accept single char (letters/digits)
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Left Section - Hero */}
      <Box
        sx={{
          width: '50%',
          backgroundImage: `url(${Allimages.BackgroundImage})`,
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
        <Typography
          variant={isSmall ? "h6" : "h5"}
          sx={{
            mb: { xs: 2, md: 2 },
            fontFamily: "Waylimo, sans-serif",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            lineHeight: 1.3,
            px: { xs: 2, md: 0 }
          }}
        >
          All the events in one place.
        </Typography>

        <Box mt={10}>
          <img
            src={Allimages.LaptopScreen}
            alt="Laptop"
            style={{
              width: "100%",
              maxWidth: "590px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: "100%", md: 500 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
            fontFamily: "normal",
            lineHeight: { xs: 1.4, md: 1.5 },
            px: { xs: 2, md: 0 }
          }}
        >
          You're almost there! Get instant access to all your events, where{" "}
          {!isSmall && <br />} you can easily browse, upload, and manage photos in one{" "}
          {!isSmall && <br />} convenient place.
        </Typography>
      </Box>

      {/* Right Section - Form */}
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 6,
        }}
      >
        <Box
          maxWidth={400}
          mx="auto"
          sx={{
            width: "100%",
            px: { xs: 1, sm: 2, md: 0 }
          }}
        >
          {/* Back Button */}
          <IconButton
            size="small"
            sx={{
              color: "white",
              bgcolor: "#1F3A63",
              position: "absolute",
              top: { xs: 20, md: 30 },
              left: { xs: 20, md: 30 },
              zIndex: 10,
              "&:hover": {
                bgcolor: "#2a4a73",
              }
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Logo and Header */}
          <Box textAlign="center" mt={{ xs: 4, md: 2, }}>
            <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3 } }}>
              <img
                src={Allimages.SooraIconDarkBlue}
                alt="Soora"
                style={{
                  width: isSmall ? "48px" : "78px",
                  height: "auto",
                }}
              />
            </Box>

            <Typography
              variant={isSmall ? "h6" : "h6"}
              fontWeight="bold"
              color="#1F3A63"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                mb: 1
              }}
            >
              Verification
            </Typography>

            <Typography
              variant="body2"
              color="#305791"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.4,
                px: { xs: 1, md: 0 }
              }}
            >
              We have sent a code to{" "}
              <Box component="span" fontWeight="bold">
                Name@mail.com
              </Box>
            </Typography>
          </Box>

          {/* OTP Input */}
          <Box
            mt={{ xs: 3, md: 4 }}
            display="flex"
            justifyContent="space-between"
            gap={{ xs: 0.5, sm: 1 }}
            sx={{
              flexWrap: { xs: "wrap", sm: "nowrap" },
              "& > *": {
                flex: { xs: "0 0 calc(16.666% - 4px)", sm: "1" }
              }
            }}
          >
            {otp.map((val, idx) => (
              <TextField
                key={idx}
                value={val}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                inputRef={(el) => (inputsRef.current[idx] = el)}
                variant="outlined"
                size="small"
                sx={{
                  width: { xs: "40px", sm: "48px" },
                  minWidth: { xs: "40px", sm: "48px" },
                }}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: isSmall ? 16 : 20,
                    height: isSmall ? "40px" : "48px",
                    padding: 0,
                  },
                }}
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    height: { xs: "40px", sm: "48px" },
                    padding: 0,
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#1F3A63",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1F3A63",
                    },
                  },
                }}
              />
            ))}
          </Box>

          {/* Timer */}
          <Typography
            textAlign="center"
            mt={{ xs: 2, md: 2 }}
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              fontWeight: "medium"
            }}
          >
            02:30
          </Typography>

          {/* Resend Link */}
          <Typography
            textAlign="center"
            mt={{ xs: 1.5, md: 2 }}
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.875rem", md: "0.875rem" },
              px: { xs: 1, md: 0 }
            }}
          >
            Didn't receive a code?{" "}
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "#1F3A63",
                fontWeight: "medium",
                "&:hover": {
                  color: "#2a4a73"
                }
              }}
            >
              Resend OTP
            </Link>
          </Typography>

          {/* Verify Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: { xs: 3, md: 3 },
              backgroundColor: "#1F3A63",
              borderRadius: 2,
              textTransform: "none",
              py: { xs: 1.5, md: 1.5 },
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "medium",
              "&:hover": {
                backgroundColor: "#2a4a73",
              },
            }}
            onClick={() => {
              navigate("/welcomescreen");
            }}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationPage;