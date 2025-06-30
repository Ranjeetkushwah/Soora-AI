import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Plus } from "lucide-react";
import BackButtonIcon from "../../../assets/Buttons icons/BackButtonIcon";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic Plan",
    price: "$0",
    credits: "100 Photo Credits",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
  {
    name: "Standard Plan",
    price: "$150",
    credits: "2500 Photo Credits",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
  {
    name: "Advance Plan",
    price: "$250",
    credits: "Unlimited Photo Credits",
    features: ["AI Face Recognition", "24/7 Chat Support"],
  },
];

const purchasedPlans = [
  {
    name: "Basic Plan",
    status: "Active",
    purchasedOn: "Oct 09, 2024",
    expiry: "Oct 09, 2025",
    photos: "50/100",
    amount: 500,
  },
  {
    name: "Premium Plan",
    status: "Exhausted",
    purchasedOn: "Oct 05, 2024",
    expiry: "Oct 05, 2025",
    photos: "3500",
    amount: 2300,
  },
  {
    name: "Standard Plan",
    status: "Exhausted",
    purchasedOn: "Sept 20, 2024",
    expiry: "Sept 20, 2025",
    photos: "2000",
    amount: 1000,
  },
  {
    name: "Standard Plan",
    status: "Exhausted",
    purchasedOn: "Sept 12, 2024",
    expiry: "Sept 12, 2025",
    photos: "2000",
    amount: 1000,
  },
  {
    name: "Basic Plan",
    status: "Expired",
    purchasedOn: "Sept 07, 2024",
    expiry: "Oct 07, 2024",
    photos: "100",
    amount: 0,
  },
];

const statusColor = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Exhausted":
      return "warning";
    case "Expired":
      return "error";
    default:
      return "default";
  }
};

const MediaSubcription = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",      // mobile
          sm: "600px",     // small screens
          md: "900px",     // medium screens
          lg: "1200px",    // large screens
          xl: "1489px"     // extra large screens
        },
        mx: "auto",        // center horizontally
        my: 4,
        px: { xs: 1, sm: 2, md: 3 }
      }}
    >
      <Box
        sx={{
          backgroundColor: "#305791",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderRadius: "8px",
          width: "98%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 2,

          }}
        >
          <Box    onClick={() => {
                navigate(-1);
              }}>
            <BackButtonIcon
           
            />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            Manage Subscriptions
          </Typography>{" "}
        </Box>
        <Box >
        <Button
          variant="outlined"
       
          sx={{
            color: "white",
            borderColor: "#FFFFFF",
            "&:hover": { color: "#1E3A8A", },
            marginRight:2
          }}
        >
       Remaining Photos : 50
        </Button>
        <Button
          variant="contained"
          startIcon={<Plus size={16} />}
          sx={{
            bgcolor: "#fff",
            color: "#1E3A8A",
            "&:hover": { bgcolor: "#E2E8F0" },
          }}
        >
          Create Event
        </Button>
        </Box>
      </Box>
      {/* Plans */}
      <Grid sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center", gap: 2, mt: 3, borderRadius: "8px" }} spacing={3}>
        {plans.map((plan) => (
          <Grid sx={{ width: '328px', }} key={plan.name}>
            <Card sx={{ border: "1px solid #1F3A63", borderRadius: "8px" }} variant="outlined" >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", }}>
                  <Typography color="#1F3A63" variant="h6" fontWeight={600}>
                  {plan.name}
                </Typography>
                  <Typography sx={{ fontSize: "36px", fontFamily: "Waylimo" }} variant="h5" color="#1F3A63" gutterBottom>
                  {plan.price}
                  </Typography> </Box>
                <Divider />
                <Typography color="#305791" >{plan.credits}</Typography>
                {plan.features.map((feature, idx) => (
                  <Typography color="#305791" key={idx} fontSize="0.875rem">
                    • {feature}
                  </Typography>
                ))}
                <Box mt={2}>
                  <Button sx={{ backgroundColor: "#1F3A63" }} variant="contained" fullWidth>
                    Subscribe
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Purchased Plans Table */}
      <Box mt={6}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography sx={{ fontWeight: 700, color: "#1F3A63" }} variant="h6">Purchased Plans</Typography>

          <Button variant="outlined" sx={{ fontWeight: 700, color: "#1F3A63", borderColor: '#1F3A63' }} onClick={handleMenuOpen} >  Filter <FilterListIcon /> </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>All</MenuItem>
            <MenuItem onClick={handleMenuClose}>Active</MenuItem>
            <MenuItem onClick={handleMenuClose}>Exhausted</MenuItem>
            <MenuItem onClick={handleMenuClose}>Expired</MenuItem>
          </Menu>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#1F3A63" }}>
              <TableRow>
                {[
                  "SUBSCRIPTION PLAN",
                  "STATUS",
                  "PURCHASED ON",
                  "EXPIRY",
                  "PHOTOS",
                  "AMOUNT PAID ($)",
                ].map((head) => (
                  <TableCell key={head} sx={{ color: "#fff", fontWeight: 600 }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {purchasedPlans.map((plan, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: '#1F3A63' }}>{plan.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={plan.status}
                      color={statusColor(plan.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ color: '#305791' }}>{plan.purchasedOn}</TableCell>
                  <TableCell sx={{ color: '#305791' }}>{plan.expiry}</TableCell>
                  <TableCell sx={{ color: '#1F3A63' }}>{plan.photos}</TableCell>
                  <TableCell sx={{ color: '#1F3A63' }}>{plan.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={1} sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", color: '#305791' }}>
          <Typography color='#305791' variant="body2">
            Showing 1 to 10 of 20 Subscriptions
          </Typography>
          <Button fontWeight='bold' size="small">Next ›</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaSubcription;
