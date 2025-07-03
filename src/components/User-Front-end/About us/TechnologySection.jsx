import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Bot, ShieldCheck, RefreshCw } from "lucide-react";
import Allimages from '../../../assets'
const technologies = [
  {
    iconPath: `${Allimages.StateOfAiTechnology}`,
    title: "State of the art AI Technology",
  },
  {
    iconPath: `${Allimages.CommitmentToDataSecurity}`,
    title: "Commitment to Data Security",
  },
  {
    iconPath: `${Allimages.ContinuousUpdatesImprovements}`,
    title: "Continuous Updates & Improvements",
  },
];

const TechnologySection = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "white",
          px: 15,
          pt: "74px",
          pb: "35px",
          height: "fit-content",
          display: "flex",
          justifyContent: 'center',
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <Box>
        {/* Header */}
          <Box sx={{ mb: 6, maxWidth: 800, mr: 20 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Waylimo",
              fontWeight: "bold",
              fontSize: "40px",
              color: "#1F3A63",
              mb: 2,
            }}
          >
            Our Technology
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              fontSize: "20px",
              lineHeight: 1.6,
              fontFamily: "Poppins",
              fontWeight: 400,
            }}
          >
            We utilize advanced AI algorithms and facial recognition technology
            to provide you with an unparalleled photo-finding experience. Our
            systems are designed to be efficient, accurate, and user-friendly,
            ensuring that your privacy is always protected.
          </Typography>
        </Box>

        {/* Technology Features */}
          <Grid spacing={4} sx={{ maxWidth: 800, pr: 20 }}>
          {technologies.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "#EFF6FF",
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
                      src={item.iconPath}
                      alt={item.title}
                      title={item.title}
                      style={{
                        width: "100px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1F3A63",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily: "Poppins",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>

        {/* Side Accent Shape */}
        <Box>
          <Box
            sx={{
              position: "absolute",
              width: {
                xs: "40%",    // mobile
                sm: "30%",    // tablets
                md: "20%",    // desktops
                lg: "18%",    // large screens
                xl: "15%",    // extra large screens
              },
              height: "100%",
              bgcolor: "#1F3A63",
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
              top: 0,
              right: 0,
            }}
          />
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: {
                xs: '15vw solid transparent',
                sm: '10vw solid transparent',
                md: '7vw solid transparent',
                lg: '5vw solid transparent',
                xl: '4vw solid transparent',
              },
              borderBottom: {
                xs: '30vh solid #FFE9D8',
                sm: '25vh solid #FFE9D8',
                md: '20vh solid #FFE9D8',
                lg: '18vh solid #FFE9D8',
                xl: '15vh solid #FFE9D8',
              },
              position: 'absolute',
              bottom: 0,
              right: 0,

            }}
          />

        </Box>
      </Box>
    </>
  );
};

export default TechnologySection;
