import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { ScanLine, Folder, Shield } from "lucide-react";

const features = [
  {
    iconPath: "./src/assets/feature icons/AI-Powered Face Recoginition.svg",
    title: "AI-Powered Face Recognition",
    description: "Accurate identification for a seamless search experience",
  },
  {
    iconPath: "./src/assets/feature icons/Event based Collections.svg",
    title: "Event Based Collections",
    description: "Easily browse through photos from various events",
  },
  {
    iconPath: "./src/assets/feature icons/Privacy Protection.svg",
    title: "Privacy Protection",
    description: "Your data is secure; we prioritize your privacy",
  },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "white",
        px: 15,
        py: { xs: 8, md: 10 },
        height: "fit-content",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 6, maxWidth: 800 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Waylimo",
            fontWeight: 400,
            fontSize: "40px",
            color: "#1F3A63",
            mb: 2,
          }}
        >
          Features You'll Love
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.6 }}
        >
          Our platform is equipped with powerful features to enhance your
          photo-finding experience.
        </Typography>
      </Box>

      {/* Feature List */}
      <Grid container spacing={4} sx={{ maxWidth: 800 }}>
        {features.map((feature, index) => (
          <Grid item xs={10} key={index}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                }}
              >
                <img
                  src={feature.iconPath}
                  alt={feature.title}
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1F3A63",
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Side Shapes */}
      <Box
        sx={{
          position: "absolute",
          width: "355px",
          height: "627px",
          bgcolor: "#1F3A63",
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
          top: 0,
          right: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "479px",
          right: 0,
          borderTop: "155px solid transparent",
          borderRight: "75px solid #FAE6D7",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default FeaturesSection;
