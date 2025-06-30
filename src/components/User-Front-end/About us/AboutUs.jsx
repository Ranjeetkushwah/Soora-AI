import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import TechnologySection from './TechnologySection'
import SignUpPromo from '../Home/SignUpPromo'
import CTASplit from '../Home/CTASplit'
import GetInTouch from '../Home/GetInTouch'
import HomeFooter from '../Home/HomeFooter'
import Allimages from '../../../assets'

export default function AboutUs() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          backgroundSize: "cover", // optional: make it full
          backgroundRepeat: "no-repeat", // optional
          backgroundPosition: "center", // optional
          py: { xs: 8, md: 12 },
          px: { xs: 5, md: 5 },
          zIndex: 1,
          minHeight: "65vh",
        }}
      >
        <Box sx={{ flexDirection: "row" }}>
          <Grid container spacing={20} alignItems="center"  >
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  color: "white",

                  fontFamily: "Waylimo",
                  fontWeight: 400,
                  fontSize: "64px",

                  lineHeight: 1.4,
                }}
              >
                Welcome to Soora,
                <br />
                where technology meets
                <br />
                memories.
              </Typography>
            </Grid>

            {/* Image or Screenshot Placeholder */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 5,
                  bgcolor: "white",
                  borderRadius: 2,
                  textAlign: "center",
                  width: { xs: "100%", sm: "350px", md: "486px" },
                  height: { xs: "auto", md: "198px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#1F3A63",
                    fontFamily: "Poppins",
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



      {/* Mission */}

      <Box
        sx={{
          bgcolor: "#E6E6E6",
          py: { xs: 6, md: 12 }, // responsive vertical padding
        }}
      >
        <Grid container spacing={6} alignItems="center" justifyContent="space-evenly">
          {/* Mission */}
          <Grid item xs={12} md={6} textAlign="left">
            <Box>
              <img
                src={Allimages.Targeting}
                alt="targeting"
                width="120px"
                height="120px"
              />
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: "#1F3A63",
                fontFamily: "Waylimo",
                fontWeight: 400,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.4,
                mt: 2,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#1F3A63",
                fontFamily: "Poppins",
                fontWeight: 400,
                mt: 1,
              }}
            >
              We aim to provide an intuitive platform that leverages
              <br />
              advanced technology for effortless photo discovery.
            </Typography>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} md={6} textAlign="left">
            <Box>
              <img
                src={Allimages.Vision}
                alt="vision"
                width="120px"
                height="120px"
              />
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: "#1F3A63",
                fontFamily: "Waylimo",
                fontWeight: 400,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.4,
                mt: 2,
              }}
            >
              Our Vision
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#1F3A63",
                fontFamily: "Poppins",
                fontWeight: 400,
                mt: 1,
              }}
            >
              Our goal is to lead the way in using AI technology to make
              <br />
              photo retrieval seamless and enjoyable.
            </Typography>
          </Grid>
        </Grid>
      </Box>


      <TechnologySection />
      <SignUpPromo />
      <CTASplit />
      <GetInTouch />
      <HomeFooter />

    </>
  );
}
