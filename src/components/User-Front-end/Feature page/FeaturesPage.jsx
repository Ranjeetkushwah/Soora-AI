import { Box, Grid, Typography, Paper } from "@mui/material";
import KeyFeaturesSection from './KeyFeaturesSection'
import  SignUpPromo from '../Home/SignUpPromo'
import CTASplit from '../Home/CTASplit'
import GetInTouch from '../Home/GetInTouch'
import HomeFooter from '../Home/HomeFooter'
import Allimages from '../../../assets'

export default function FeaturesPage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#1F3A63", // fallback color
          py: { xs: 6, sm: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 5 },
          minHeight: "65vh",

          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1489px",
          },
          width: "100%",
          mx: "auto",
          zIndex: 1,
        }}
      >
        <Box sx={{ flexDirection: "row" }}>
          <Grid container spacing={40} alignItems="center">
            {/* Text Section */}
            <Grid>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontFamily: "Waylimo",
                  fontWeight: 400,
                  fontSize: "48px",
                  lineHeight: 1.4,
                }}
              >
                Discover what makes
                <br />
                us UNIQUE!
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 400,
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  lineHeight: 1.4,
                }}
              >
                At Soora, we leverage advanced technology to enhance your photo{" "}
                <br /> discovery experience. <br />
                Explore our key features designed to help you reconnect with
                your <br /> cherished memories effortlessly
              </Typography>
            </Grid>

            {/* Image or Screenshot Placeholder */}
            <Grid xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  bgcolor: "white",
                  borderRadius: 2,
                  textAlign: "center",
                  width: { xs: "100%", sm: "350px", md: "486px" },
                  height: { xs: "auto", md: "198px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    color: "#1F3A63",
                    fontFamily: "Poppins",
                    pt: { xs: 2, md: 5 },
                    lineHeight: 1.5,
                  }}
                >
                  Screenshot of Soora
                  <br />
                  Media Manager's
                  <br />
                  Dashboard &<br />
                  Application Homepage
                </Typography>
              </Paper>

            </Grid>
          </Grid>
        </Box>
      </Box>

      <KeyFeaturesSection/>
      <SignUpPromo/>
        <CTASplit/>
      <GetInTouch/>
      <HomeFooter/>
    </>
  );
}
