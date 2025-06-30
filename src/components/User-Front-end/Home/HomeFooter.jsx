import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Allimages from '../../../assets'

const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff", py: 6, width: "100%" }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Logo Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img
                src={Allimages.SoraLogoWhiteBlue}
                alt="Soora Logo"
                height="32"
                width="120"
              />
            </Box>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: { xs: 4, sm: 1 },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              {[
                { label: "Home", href: "/#home" },
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "About Us", href: "/#aboutus" },
                { label: "Privacy Policy", href: "/#privacy" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="hover"
                  fontFamily="Poppins"
                  fontWeight="400"
                  color="#1F3A63"
                  sx={{
                    fontSize: "1rem",
                    "&:focus": {
                      fontWeight: 900,
                      color: "#1F3A63",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Location Section */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: { xs: 4, sm: 1 },
                alignItems: { xs: "center", sm: "flex-start" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="900"
                fontFamily="Poppins"
                gutterBottom
                color="#1F3A63"
              >
                Locate Us:
              </Typography>
              <Typography
                variant="body2"
                fontFamily="Poppins"
                fontWeight="400"
                color="#1F3A63"
              >
                Address Line 1
              </Typography>
              <Typography
                variant="body2"
                fontFamily="Poppins"
                fontWeight="400"
                color="#1F3A63"
              >
                Address Line 2
              </Typography>
              <Typography
                variant="body2"
                fontFamily="Poppins"
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
