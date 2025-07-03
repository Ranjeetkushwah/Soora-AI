import { Box, Typography, Grid, Paper } from "@mui/material";
import Allimages from '../../../assets'

const features = [
  {
    iconPath: `${Allimages.AIPoweredFace}`,
    title: "AI-Powered Face Recognition",
    description: "Accurate identification for a seamless search experience",
  },
  {
    iconPath: `${Allimages.EventBasedCollection}`,
    title: "Event Based Collections",
    description: "Easily browse through photos from various events",
  },
  {
    iconPath: `${Allimages.PrivacyProtection}`,
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
        <Grid spacing={4} sx={{ maxWidth: 800, pr: 20 }}>
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

      </Box>
      {/* Side Shapes */}
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
  );
};

export default FeaturesSection;
