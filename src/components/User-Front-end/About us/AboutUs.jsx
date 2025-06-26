import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import TechnologySection from './TechnologySection'
import SignUpPromo from '../Home/SignUpPromo'
import CTASplit from '../Home/CTASplit'
import GetInTouch from '../Home/GetInTouch'
import HomeFooter from '../Home/HomeFooter'

export default function AboutUs() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('./src/assets/Background-Image 2.svg')",
          backgroundSize: "cover", // optional: make it full
          backgroundRepeat: "no-repeat", // optional
          backgroundPosition: "center", // optional
          py: { xs: 8, md: 12 },
          zIndex: 1,
          minHeight: "65vh",
        }}
      >
        <Container maxWidth="lg">
          <Grid sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }} spacing={4}  >
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
        </Container>
      </Box>



      {/* Mission */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "#E6E6E6",
          padding: "100px",
        }}
      >
        <Box>
          <Box>
            <img
              src="./src/assets/icons/targeting (1) 1.svg"
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
            }}
          >
            We aim to provide an intuitive platform that leverages <br />
            advanced technology for effortless photo discovery.
          </Typography>
        </Box>
        <Box>
          <Box>
            <img
              src="./src/assets/icons/vision (1) 1.svg"
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
            }}
          >
            Our goal is to lead the way in using AI technology to make <br />{" "}
            photo retrieval seamless and enjoyable
          </Typography>
        </Box>
      </Box>


      <TechnologySection />
      <SignUpPromo />
      <CTASplit />
      <GetInTouch />
      <HomeFooter />

    </>
  );
}
