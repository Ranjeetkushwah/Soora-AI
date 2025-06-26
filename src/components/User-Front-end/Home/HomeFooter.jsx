import React from "react";
import { Box, Container, Grid, Typography,Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

  
const HomeFooter = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#fff", py: 6, width: "100%" }}>
      <Container>
        <Grid container spacing={40}>
          {/* Logo Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => navigate("/")}
            >
              <img
                src="./src/assets/sora_log-white-blue.svg"
                alt="Soora Logo"
                height="32px"
                width="120px"
              />
            </Box>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={4} gap={2}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}
            >
                <Link
                href="Home"
                underline="hover"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
                   sx=
              {{
                "&:focus": {
                  fontWeight: "900",
                  fontFamily: "Poppins",
                  color: "#1F3A63",
                },
              }}
              >
                Home
              </Link>


              <Link
                href="feature"
                underline="hover"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
                   sx=
              {{
                "&:focus": {
                  fontWeight: "900",
                  fontFamily: "Poppins",
                  color: "#1F3A63",
                },
              }}
              >
                Features
              </Link>
              <Link
                href="pricing"
                underline="hover"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
                   sx=
              {{
                "&:focus": {
                  fontWeight: "900",
                  fontFamily: "Poppins",
                  color: "#1F3A63",
                },
              }}
              >
                Pricing
              </Link>
              <Link
                href="aboutus"
                underline="hover"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
                   sx=
              {{
                "&:focus": {
                  fontWeight: "900",
                  fontFamily: "Poppins",
                  color: "#1F3A63",
                },
              }}
              >
                About Us
              </Link>
              <Link
                href="#privacy"
                underline="hover"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
                   sx=
              {{
                "&:focus": {
                  fontWeight: "900",
                  fontFamily: "Poppins",
                  color: "#1F3A63",
                },
              }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Location Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="900"
                fontFamily={"Poppins"}
                gutterBottom
                color="#1F3A63"
              >
                Locate Us:
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
              >
                Address Line 1
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
              >
                Address Line 2
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Poppins"}
                fontWeight="400"
                color="#1F3A63"
              >
                Address Line 3
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFooter;
