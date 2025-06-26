import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Wallet, Layers, Share2 } from "lucide-react";
import SubscriptionPlan from "./SubscriptionPlan";
import SubscriptionPlanSetup from "./SubscriptionPlanSetup";
import SignUpPromo from "../Home/SignUpPromo";
import FQAforSubcription from "./FQAforSubcription";
import GetInTouch from '../Home/GetInTouch'
import HomeFooter from '../Home/HomeFooter'

export default function Pricing() {
    const features = [
        {
            id: 1,
            label: "Affordable Pricing",
            icon: <Wallet size={22} color="white" />,
        },
        {
            id: 2,
            label: "Flexible Plans to suit different needs",
            icon: <Layers size={22} color="white" />,
        },
        {
            id: 3,
            label: "Easy to Upgrade or Downgrade",
            icon: <Share2 size={22} color="white" />,
        },
    ];

    return (
        <>
            {" "}
            <Box
                sx={{
                    backgroundImage: "url('./src/assets/Background-Image 2.svg')",
                    backgroundSize: "cover", // optional: make it full
                    backgroundRepeat: "no-repeat", // optional
                    backgroundPosition: "center", // optional
                    py: { xs: 8, md: 12 },
                    px: { xs: 8, md: 12 },
                    zIndex: 1,
        
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={26} alignItems="center">
                        {/* Left: Text Content */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    color: "white",
                                    fontWeight: 500,
                                    fontFamily: "Waylimo",
                                    fontSize: { xs: "2rem", md: "2.8rem" },
                                    lineHeight: 1.4,
                                    mb: 2,
                                }}
                            >
                                Subscription Plans
                            </Typography>

                            <Typography
                                sx={{
                                    color: "white",
                                    fontWeight: 400,
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    lineHeight: 1.6,
                                    mb: 4,
                                }}
                            >
                                Discover the perfect subscription plan that meets your needs!
                                Whether <br /> you’re a casual user or a frequent explorer of
                                memories, we have options <br /> tailored just for you
                            </Typography>

                            {/* Feature List */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {features.map((feature) => (
                                    <Box
                                        key={feature.id}
                                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "#2E5280",
                                                p: 1,
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{ color: "white", fontSize: "16px" }}
                                        >
                                            {feature.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        {/* Right: Screenshot Placeholder */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 5,
                                    bgcolor: "white",
                                    borderRadius: 1,
                                    textAlign: "center",
                                    width: "100%",
                                    maxWidth: "450px",
                                    height: "200px",
                                    mx: "auto",
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
                                    Pricing Screen
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <SubscriptionPlan />
            <SubscriptionPlanSetup />
            <SignUpPromo />
            <FQAforSubcription />
            <GetInTouch />
            <HomeFooter />
        </>
    );
}
