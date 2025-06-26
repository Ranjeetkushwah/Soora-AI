import { Box, Grid, Typography, Paper } from "@mui/material";
import KeyFeaturesSection from './KeyFeaturesSection'
import  SignUpPromo from '../Home/SignUpPromo'
import CTASplit from '../Home/CTASplit'
import GetInTouch from '../Home/GetInTouch'
import HomeFooter from '../Home/HomeFooter'

export default function FeaturesPage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('./src/assets/Background-Image 2.svg')",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center",
          py: { xs: 10, md: 12 },
          px: { xs:10, md: 12 },
          zIndex: 1,
           minHeight: "65vh",
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
                  p: 5,
                  bgcolor: "white",
                  borderRadius: 1,
                  textAlign: "center",
                  width: "486px",
                  height: "198px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#1F3A63",
                    fontFamily: "inherit",
                    paddingTop: "50px",
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
