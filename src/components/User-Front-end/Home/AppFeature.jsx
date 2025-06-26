import React from "react";
import { Box, Typography, Grid, Avatar, useTheme } from "@mui/material";
import { Camera, QrCode, Search, Download, Share2 } from "lucide-react";

const AppFeature = () => {
  const theme = useTheme();

  const features = [
    {
      number: "1",
      title: "Add Your Selfie:",
      description:
        "Click a selfie on the Soora app, so that our AI can identify you in event photos",
      icon: Camera,
      color: theme.palette.primary.main,
    },
    {
      number: "2",
      title: "Scan the Event Code or Enter Link",
      description:
        "Use the app to scan the event's QR code or enter the link to access the photo collection",
      icon: QrCode,
      color: theme.palette.success.main,
    },
    {
      number: "3",
      title: "AI-Powered Photo Search:",
      description:
        "Our advanced AI scans the event's photos and finds all the images you appear in",
      icon: Search,
      color: theme.palette.secondary.main,
    },
    {
      number: "4",
      title: "Browse & Save:",
      description: "View your photos, or download them instantly",
      icon: Download,
      color: theme.palette.warning.main,
    },
    {
      number: "5",
      title: "Share Your Moments:",
      description:
        "Share your cherished memories with friends and family right from the app",
      icon: Share2,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        backgroundColor: "#1F3A63",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Left and Right Gradient Bars */}
        <Box position="relative" zIndex={2}>
          <Box
            sx={{
              position: "absolute",
              top: "58px",
              left: "60px",
              transform: "translateY(0%)",
              width: 60,
              height: 500,
              background: "linear-gradient(to right, #2C3E75, #8CA3C2)",
              backgroundColor: "red",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          {/* Phone Mockup */}
          <Grid ml={20} display="flex" justifyContent="center">
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 288,
                  height: 600,
                  backgroundColor: "#000",
                  borderRadius: "3rem",
                  p: 1,
                  boxShadow: 10,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "2.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Notch */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 128,
                      height: 24,
                      backgroundColor: "#000",
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  />

                  {/* Screen Content */}
                  <Box
                    sx={{
                      pt: 2,
                      px: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
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
                    <Typography variant="h6" color="text.primary" gutterBottom>
                      Screenshot of Soora
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      App Screens showing the steps plays here in Carousel
                    </Typography>

                    {/* Carousel Dots */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 32,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "primary.main",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "grey.400",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "grey.400",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "grey.400",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: " -99px",
              transform: "translateY(-50%)",
              width: 60,
              height: 500,
              background: "linear-gradient(to left, #2C3E75, #8CA3C2)",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
        </Box>

        {/* Features List */}
        <Grid>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {features.map((feature, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={3}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 80,
                    bgcolor: "transparent",
                    borderRadius: "none",

                    color: "#B0BEC5",
                    mr: "-20px",
                    mt: "-50px",
                    fontSize: "68px",
                    fontWeight: 900,
                  }}
                >
                  {feature.number}
                </Avatar>
                <Box>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: feature.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                      }}
                    >
                      <feature.icon size={16} color="#fff" />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#fff" }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "#DDEAF6" }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppFeature;
