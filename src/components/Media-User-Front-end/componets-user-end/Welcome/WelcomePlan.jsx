import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhotoIcon from "@mui/icons-material/Photo";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Allimages from "../../../../assets";

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "$0",
    features: ["100 Photo Credits", "AI Face Recognition", "24/7 Chat Support"],
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: "$150",
    features: [
      "2500 Photo Credits",
      "AI Face Recognition",
      "24/7 Chat Support",
    ],
  },
  {
    id: "advance",
    name: "Advance Plan",
    price: "$250",
    features: [
      "Unlimited Photo Credits",
      "AI Face Recognition",
      "24/7 Chat Support",
    ],
  },
];

const WelcomePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const navigate = useNavigate();

  return (
    <Grid container minHeight="100vh" backgroundColor="#fff">
      {/* Left Side - Welcome Message */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          width: "49%",
          backgroundImage: `url(${Allimages.BackgroundImage})`,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 4,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Waylimo, sans-serif",
              fontWeight: 400,
              fontSize: "48px",
            }}
          >
            Choose the perfect plan to unlock tools and features tailored to
            your needs.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Plan Selection */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "200px",
        }}
      >
        {/* Back Button */}
        <Box alignSelf="flex-start" mb={2}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", color: "#1F3A63" }}
          >
            Back
          </Button>
        </Box>

        {/* Heading */}
        <Box textAlign="center" mb={4}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={Allimages.SooraIconDarkBlue}
              alt="Soora"
              width={150}
              height={70}
            />
          </Box>
          <Typography
            variant="h6"
            mt={2}
            sx={{ fontFamily: "Poppins", fontSize: "24px", color: "#1F3A63" }}
            fontWeight="bold"
          >
            Choose Plan
          </Typography>
        </Box>

        {/* Plan Options */}
        <RadioGroup
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          {plans.map((plan) => (
            <Card
              key={plan.id}
              variant="outlined"
              sx={{
                mb: 2,
                borderColor: selectedPlan === plan.id ? "#1E3A8A" : "grey.300",
                boxShadow: selectedPlan === plan.id ? 3 : 0,
                borderWidth: selectedPlan === plan.id ? 2 : 1,
                borderRadius: 2,
                width: "384px",
              }}
            >
              <CardContent>
                <FormControlLabel
                  value={plan.id}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          color: "#1F3A63",
                          fontWeight: 700,
                          width: "350px",
                        }}
                      >
                        <Typography variant="subtitle1" fontWeight="bold">
                          {plan.name}
                        </Typography>
                        <Typography fontWeight="bold">{plan.price}</Typography>
                      </Box>
                      <Divider />
                      <List dense>
                        {plan.features.map((feature, index) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              {index === 0 && <PhotoIcon fontSize="small" />}
                              {index === 1 && (
                                <FaceRetouchingNaturalIcon fontSize="small" />
                              )}
                              {index === 2 && <ChatIcon fontSize="small" />}
                            </ListItemIcon>
                            <ListItemText
                              sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                fontFamily: "poppins",
                                color: "#305791",
                              }}
                              primary={feature}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  }
                />
              </CardContent>
            </Card>
          ))}
        </RadioGroup>

        {/* Payment Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#1F3A63",
            textTransform: "none",
            fontWeight: "bold",
          }}
          onClick={() => {
            navigate("/welcomeconfirmation");
          }}
        >
          Make Payment
        </Button>
      </Grid>
    </Grid>
  );
};

export default WelcomePlan;
