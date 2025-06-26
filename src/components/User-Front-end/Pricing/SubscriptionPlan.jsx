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
    <Box sx={{ backgroundColor: "#f9fafb", py: 8, px: 2 }}>
      <Box maxWidth="lg" mx="auto">
        <Grid container spacing={1} mb={"10px"} height="601px">
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
                    transform: "scale(1.03)", // Slight zoom-in on hover
                  },
                  mb: 3,
                  width: "384px",


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
                      margin: '10px'
                    }}
                  />
                )}
                <CardContent sx={{ m: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Poppins", fontSize: "32px", }} color="#1F3A63" mb={1}>
                    {plan.title}
                  </Typography>

                  <Typography variant="body2" color="#1F3A63" mb={3}>
                    {plan.description}
                  </Typography>

                  <Box mb={3}>
                    <Typography variant="h4" color="#1F3A63" sx={{ fontFamily: "Waylimo", fontWeight: 400, fontSize: "48px" }}>
                      {plan.credits}
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} color="#1F3A63">
                      Photo Credits
                    </Typography>
                  </Box>

                  <Box mb={3}>
                    {plan.features.map((feature, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                        {feature.includes("AI") ? (
                          <Bot size={18} color="#1F3A63" />
                        ) : (
                          <Headphones size={18} color="#1F3A63" />
                        )}
                        <Typography variant="body2" color="#1F3A63" fontWeight={500}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="h5" sx={{ fontFamily: "Waylimo", fontWeight: 400, fontSize: "64px" }} color="#1F3A63" mb={2}>
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
