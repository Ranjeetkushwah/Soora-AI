import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { Bot, Headphones, Image } from "lucide-react";

const plans = [
  {
    title: "Basic Plan",
    description: "Photographers who want to try out the platform or manage small events.",
    credits: "100",
    price: "$0",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
  {
    title: "Standard Plan",
    recommended: true,
    description: "Professional photographers managing multiple events and requiring more storage and faster processing.",
    credits: "2500",
    price: "$150",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
  {
    title: "Advance Plan",
    description: "Large photography studios or event companies with high-volume requirements.",
    credits: "Unlimited",
    price: "$250",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
];

const SubscriptionPlan = () => {
  return (
    <Box sx={{ backgroundColor: "#f9fafb", pt: 8, px: 2, height: "180vh", pb: 0 }}>
      <Box maxWidth="lg" mx="auto">
        <Grid container spacing={1} mb={"10px"} height="inherit">
          {plans.map((plan, idx) => (
            <Grid item xs={12} md={1} key={idx}>
              <Card
                sx={{
                  position: "relative",
                  boxShadow: plan.recommended ? 6 : 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 10,
                    border: "2px solid #305791",
                    transform: "scale(1.03)",
                  },
                  mb: 3,
                  width: {
                    xs: "100%",      // full width on tiny screens
                    sm: "90%",       // still large on small devices
                    md: "360px",     // fixed size on medium+
                    lg: "384px",
                  },
                  maxWidth: "384px",
                  minWidth: { xs: "280px" }, // Prevent too-narrow cards
                  mx: "auto",
                }}
              >
                {plan.recommended && (
                  <Chip
                    label="RECOMMENDED"
                    color="warning"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 16,
                      fontWeight: "bold",
                      bgcolor: "#ffe7c2",
                      color: "#1f2937",
                      margin: "10px",
                    }}
                  />
                )}
                <CardContent sx={{ m: { xs: 2, sm: 3 } }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, // 20 → 24 → 32px
                    }}
                    color="#1F3A63"
                    mb={1}
                  >
                    {plan.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="#1F3A63"
                    mb={3}
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {plan.description}
                  </Typography>

                  <Box mb={3}>
                    <Typography
                      variant="h4"
                      color="#1F3A63"
                      sx={{
                        fontFamily: "Waylimo",
                        fontWeight: 400,
                        fontSize: { xs: "32px", sm: "40px", md: "48px" },
                      }}
                    >
                      {plan.credits}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                      color="#1F3A63"
                    >
                      Photo Credits
                    </Typography>
                  </Box>

                  <Box mb={3}>
                    {plan.features.map((feature, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          mb: 1,
                        }}
                      >
                        {feature.includes("AI") ? (
                          <Bot size={18} color="#1F3A63" />
                        ) : (
                          <Headphones size={18} color="#1F3A63" />
                        )}
                        <Typography
                          variant="body2"
                          color="#1F3A63"
                          fontWeight={500}
                          sx={{
                            fontSize: { xs: "0.85rem", sm: "1rem" },
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Waylimo",
                      fontWeight: 400,
                      fontSize: { xs: "40px", sm: "52px", md: "64px" },
                    }}
                    color="#1F3A63"
                    mb={2}
                  >
                    {plan.price}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#1F3A63",
                      "&:hover": { bgcolor: "#111827" },
                      color: "white",
                      py: 1.2,
                      borderRadius: 2,
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    }}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Custom Plan */}
        <Card sx={{ border: "1px solid #e5e7eb", backgroundColor: "white" }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: "#1F3A63", fontWeight: 700, fontSize: "32px" }} mb={1}>
              Custom Plan
            </Typography>

            <Typography variant="body2" sx={{ color: "#1F3A63", fontWeight: 400, fontSize: "20px" }} mb={2}>
              Event photographers or studios with fluctuating needs who want to pay based on the volume of photos they process each month.
            </Typography>

            <Box sx={{ color: "#1F3A63", display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Image size={18} />
              <Typography variant="body2" fontWeight={500} sx={{ fontSize: "16px" }}>
                Flexible Photo Credits per month
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#1F3A63",
                "&:hover": { bgcolor: "#111827" },
                color: "white",
                px: 4,
                py: 1.2,
                borderRadius: 2,
              }}
            >
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SubscriptionPlan;
