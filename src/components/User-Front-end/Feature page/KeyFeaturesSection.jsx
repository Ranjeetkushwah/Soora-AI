import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { User, Star, Monitor, Shield } from "lucide-react";


const KeyFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "AI-Powered Face Recognition",
      description:
        "Our advanced AI algorithms utilize facial recognition technology to identify you in images, making it simple to locate your photos from any event",
      icon: <User size={32} color="#1976d2" />,
      illustration: (
        <Box
          sx={{
            width: 96,
            height: 96,
            bgcolor: "#e3f2fd",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "white",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#1976d2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
             <img src="./src/assets/feature icons/AI-Powered Face Recoginition.svg" alt="AI-Powered Face Recognition" width={'130px'} height={'180px'} color="#1976d2" />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 16,
              height: 16,
              bgcolor: "#4caf50",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: "white",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>
      ),
      align: "left",
    },
    {
      id: 2,
      title: "Event based Collections",
      description:
        "Browse through extensive collections of event photos. Our platform organizes images by event, ensuring you can easily find moments from specific occasions",
      icon: <Star size={32} color="#1976d2" />,
      illustration: (
        <Box
          sx={{
            width: 96,
            height: 96,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#1565c0",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                  <img src="./src/assets/feature icons/Event based Collections.svg" alt="AI-Powered Face Recognition" width={'130px'} height={'180px'} color="#1976d2" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: -8,
              right: -8,
              width: 32,
              height: 32,
              bgcolor: "#0d47a1",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>
      ),
      align: "right",
    },
    {
      id: 3,
      title: "User Friendly Interface",
      description:
        "Our platform features a clean and intuitive interface that makes searching for your photos a breeze. Whether you're tech-savvy or a beginner, you'll feel at home",
      icon: <Monitor size={32} color="#1976d2" />,
      illustration: (
        <Box
          sx={{
            width: 96,
            height: 96,
         
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 48,
           
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <img src="./src/assets/feature icons/User Friendly Interface.svg" alt="AI-Powered Face Recognition" width={'130px'} height={'180px'} color="#1976d2" />
          
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: -4,
              left: -4,
              width: 24,
              height: 24,
       
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>
      ),
      align: "left",
    },
    {
      id: 4,
      title: "Privacy Protection",
      description:
        "We take your privacy seriously. Our platform implements robust security measures to ensure your data is protected while using our services",
      icon: <Shield size={32} color="#1976d2" />,
      illustration: (
        <Box
          sx={{
            width: 96,
            height: 96,
            bgcolor: "#1976d2",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#1565c0",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                  <img src="./src/assets/feature icons/Privacy Protection.svg" alt="AI-Powered Face Recognition" width={'130px'} height={'180px'} color="#1976d2" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 24,
              height: 24,
            
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>
      ),
      align: "right",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fafafa", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "#1F3A63",
                     fontFamily: "Waylimo",
              fontWeight: 400,
              fontSize: "48px",
              mb: 2,
            }}
          >
            Key Features
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1F3A63",
              fontSize: "16px",
              maxWidth: "512px",
                         fontFamily: "Poppins",
                fontWeight: 400,
            }}
          >
            Our platform is equipped with powerful features to enhance your
            photo-finding experience
          </Typography>
        </Box>

        <Stack spacing={8}>
          {features.map((feature) => (
            <Box
              key={feature.id}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#1F3A63",
                gap: 4,
                flexDirection: {
                  xs: "column",
                  md: feature.align === "right" ? "row-reverse" : "row",
                },
                textAlign: {
                  xs: "center",
                  md: feature.align === "right" ? "right" : "left",
                },
              }}
            >
              {/* Illustration */}
              <Box sx={{ flexShrink: 0 }}>{feature.illustration}</Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    color: "#1F3A63",
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1F3A63",
                    fontSize: "1.125rem",
                    lineHeight: 1.6,
                    maxWidth: "448px",
                    ml: {
                      xs: "auto",
                      md: feature.align === "right" ? "0 0 0 auto" : "0",
                    },
                    marginRight: feature.align === "right" ? "0px" : "none",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default KeyFeaturesSection;
