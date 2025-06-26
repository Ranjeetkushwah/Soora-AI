import React from "react";
import { Box, Container, Grid, Typography, Paper, Stack } from "@mui/material";

export default function SubscriptionPlanSetup() {
  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: "Sign up with your Email ID",
    },
    {
      number: "2",
      title: "Select your Plan",
      description: "Choose the subscription that fits your needs",
    },
    {
      number: "3",
      title: "Enter Payment Details",
      description: "Securely input your Payment Information",
    },
    {
      number: "4",
      title: "Start Exploring",
      description: "Access your Images & Enjoy your membership!",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#1F3A63", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 500,
            fontFamily: "Waylimo",
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 1,
          }}
        >
          Getting Started
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", mb: 6, fontSize: "16px" }}
        >
          Ready to start?
          <br />
          Follow these simple steps to subscribe to your chosen plan.
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Laptop Display */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "white",
                padding: "1px",
                width: "506.508148px",
                borderRadius: "12px 12px 0px 0px",
                position: "relative",
              }}
            >
              <Box
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: "white",
                  borderRadius: "12px",
                  textAlign: "center",
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  border: "10px solid black",
                  width: "467.5081481933594px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#1F3A63", fontSize: "16px" }}
                >
                  Screenshot of Soora Media Manager’s Panel Screens showing the
                  steps plays here in Carousel
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  height: "11.245901107788086px",
                  bgcolor: "#C6C5C5",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.2)", // Soft shadow
                  // borderRadius: "4px",              // Rounded edges

                  left: "-49px",
                  width: "600px",
                }}
              />

              {/* Thumbnail placeholders */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: "30px", position: "absolute", left: "130px" }}
              >
                {[1, 2, 3, 4].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "white",
                      borderRadius: "6px",
                    }}
                  />
                ))}
              </Stack>
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                color: "white",
                mt: 11,
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              (Thumbnails of Soora Media Manager’s <br /> Panel Screens, users
              can click on these and can see <br /> the screen on the laptop
              above)
            </Typography>
          </Grid>

          {/* Steps List */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginTop: "-170px", marginLeft: "74px" }}
          >
            <Stack spacing={10}>
              {steps.map((step) => (
                <Box
                  key={step.number}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h3"             
                    sx={{
                  mr:"-20px",
                  mt:'-50px',
                        fontSize:"68px",
                      color: "#E6E6E6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        mb: 0.5,
                        fontSize: "18px",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "15px" }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
