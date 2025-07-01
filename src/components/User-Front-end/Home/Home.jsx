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
import AppFeature from "./AppFeature.jsx";
import Allimages from "../../../assets";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          py: { xs: 3, sm: 4, md: 5 },
          px: { xs: 1, sm: 3, md: 8 },
          zIndex: 1,
          overflow: "hidden",
          minHeight: { xs: "100vh", md: "81vh" },
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", // optional for text
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
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          sx={{
            position: "relative",
            zIndex: 1,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 1 },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: { xs: "100%", md: 500 } }}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={600}
                gutterBottom
                sx={{
                  fontFamily: "Waylimo",
                  fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                  fontWeight: 400,
                  mb: { xs: 2, md: 3 }
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
                    fontWeight: 400,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                  }}
                >
                  Instantly recognized by AI
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color="grey.300"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  mb: { xs: 3, md: 4 },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: { xs: "100%", md: "90%" }
                }}
              >
                Our platform uses advanced facial recognition technology to help
                you effortlessly discover images where you appear, all from
                events you attended.
              </Typography>

              {/* Features */}
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                sx={{
                  alignItems: { xs: "center", md: "flex-start" },
                  mb: { xs: 3, md: 0 }
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      bgcolor: "success.main",
                      width: { xs: 28, md: 32 },
                      height: { xs: 28, md: 32 }
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                  </Avatar>
                  <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    99.1% Accuracy
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      bgcolor: "info.main",
                      width: { xs: 28, md: 32 },
                      height: { xs: 28, md: 32 }
                    }}
                  >
                    <ShieldIcon fontSize="small" />
                  </Avatar>
                  <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    100% Secured
                  </Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Box mt={{ xs: 3, md: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#0f172a",
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.2, md: 1.5 },
                    fontSize: { xs: "0.9rem", md: "1rem" },
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 1 },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: -4 },
            }}
          >
            <Box
              position="relative"
              sx={{
                ml: { xs: 0, md: 4 },
                width: "100%",
                maxWidth: { xs: "300px", sm: "400px", md: "602px" },
              }}
            >
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
                src={Allimages.PhoneInHand}
                alt="Phone in hand"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "300px", sm: "400px", md: "692px" },
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  marginBottom: { xs: "-20px", md: "-45px" },
                }}
              />

              {/* Soora Icon Overlay */}
              <Box
                sx={{
                  width: { xs: 48, sm: 56, md: 64 },
                  height: { xs: 48, sm: 56, md: 64 },
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 99,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img
                    src={Allimages.SooraIconDarkBlue}
                    alt="Soora"
                    width={{ xs: 80, sm: 120, md: 150 }}
                    height={{ xs: 40, sm: 55, md: 70 }}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "150px",
                      maxHeight: "70px",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: "8px", sm: "14px", md: "16px" },
                    width: { xs: "120px", sm: "160px", md: "190px" },
                    textAlign: "center",
                  }}
                  color="#1F3A63"
                >
                  Screenshot of Soora
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "8px", sm: "14px", md: "16px" },
                    width: { xs: "130px", sm: "170px", md: "200px" },
                    textAlign: "center",
                    color: "#1F3A63",
                  }}
                >
                  App Homescreen
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* How to Work */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box
            mb={{ xs: 6, md: 8 }}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              fontWeight={700}
              gutterBottom
              sx={{
                color: "#1F3A63",
                fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                fontFamily: "Waylimo",
                fontWeight: 400,
                mb: { xs: 2, md: 3 },
              }}
            >
              How it works
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#1F3A63",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                maxWidth: { xs: "100%", md: "600px" },
              }}
            >
              Discovering your photos has never been easier.
              <br />
              Follow these five simple steps:
            </Typography>
          </Box>

          {/* Video Section */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: { xs: 2, md: 4 },
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
                  px: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.grey[600],
                    mt: 2,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  Video of Soora Application plays here.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Other components */}
      <AppFeature />
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
