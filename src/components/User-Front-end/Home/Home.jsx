import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  Container,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldIcon from "@mui/icons-material/Security";
import FeaturesSection from "./FeaturesSection.jsx";
import SignUpPromo from "./SignUpPromo";
import TestimonialsSection from "./TestimonialsSection.jsx";
import FAQSection from "./FAQSection.jsx";
import CTASplit from "./CTASplit.jsx";
import GetInTouch from "./GetInTouch.jsx";
import HomeFooter from "./HomeFooter.jsx";
import AppFeature from './AppFeature.jsx';


const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('./src/assets/Background-Image 2.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          py: 5,
          px: 8,
          zIndex: 1,
          overflow: "hidden",
          minHeight: "81vh",
          color: "#fff",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 25% 25%, rgba(59,130,246,0.15) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(147,51,234,0.15) 0%, transparent 50%)`,
            zIndex: 0,
          }}
        />

        <Grid
          container
          spacing={8}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1, }}
        >
          {/* Left Content */}
          <Grid >
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={600}
                gutterBottom
                sx={{
                  fontFamily: "Waylimo",
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                  fontWeight:400
                }}
              >
                Find your memories,
                <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(to right, #60a5fa, #c084fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Waylimo",
                                fontWeight:400
                  }}
                >
                  Instantly recognized by AI
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color="grey.300"
                sx={{
                  fontSize: "1.125rem",
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Our platform uses advanced facial recognition technology to help
                you effortlessly discover images where you appear, all from
                events you attended.
              </Typography>

              {/* Features */}
              <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{ bgcolor: "success.main", width: 32, height: 32 }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </Avatar>
                  <Typography>99.1% Accuracy</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar sx={{ bgcolor: "info.main", width: 32, height: 32 }}>
                    <ShieldIcon fontSize="small" />
                  </Avatar>
                  <Typography>100% Secured</Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Box mt={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#0f172a",
                    px: 5,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: 2,
                    boxShadow: 4,
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                    },
                  }}
                >
                  Download App
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid display="flex" justifyContent="center">
            <Box position="relative" sx={{ ml: { xs: 0, md: 4 } }}>
              {/* Glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "2rem",
                  filter: "blur(40px)",
                  transform: "scale(1.05)",
                  zIndex: 0,
                }}
              />

              {/* Phone Mockup */}

              <Box
                position="relative"
                component="img"
                src="./src/assets/Phone_in_hand.svg"
                alt="Phone in hand"
                sx={{
                  width: { xs: "100%", md: "692px" },
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  marginBottom: "-45px"
                }}
              />

              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: 'column',
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  position: "absolute",
                  top: " 279px",
                  right: "313px",
                  zIndex: 99
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img
                    src="/src/assets/soora-icon-dark-blue.svg"
                    alt="Soora"
                    width={150}
                    height={70}
                  />
                </Box>

                <Typography sx={{fontSize:"16px",width:"190px", textAlign:"center"}} color="#1F3A63">
                  Screenshot of Soora
                </Typography>
                <Typography variant="body2" sx={{fontSize:"16px",width:"200px", textAlign:"center",color:"#1F3A63"}} >
                  App Homescreen
                </Typography>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* How to Work */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          {/* Header Section */}
          <Box mb={8}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight={700}
              gutterBottom
              sx={{
                color: "#1F3A63",
                fontSize: { xs: "2rem", md: "3rem" },
                    fontFamily: "Waylimo",
                                fontWeight:400
              }}
            >
              How it works
            </Typography>
            <Typography variant="h6" sx={{ color: "#1F3A63", lineHeight: 1.6 }}>
              Discovering your photos has never been easier.
              <br />
              Follow these five simple steps:
            </Typography>
          </Box>

          {/* Video Section */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.palette.grey[600], mt: 2 }}
                >
                  Video of Soora Application plays here.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

{/* other componets */}
<AppFeature/>
      <FeaturesSection />
      <SignUpPromo />
      <TestimonialsSection />
      <FAQSection />
      <CTASplit />
      <GetInTouch />
      <HomeFooter />
    </>
  );
};

export default Home;
