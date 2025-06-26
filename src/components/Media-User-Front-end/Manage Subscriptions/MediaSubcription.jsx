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
    <Box p={3}>
      <Box
        sx={{
          backgroundColor: "#305791",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
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
            "&:hover": { bgcolor: "#E2E8F0",    color: "#1E3A8A"},
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
      <Grid  sx={{display:'flex',justifyContent:"space-around",alignItems:"center",gap:2}} spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
            <Card variant="outlined" >
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {plan.name}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography>{plan.credits}</Typography>
                {plan.features.map((feature, idx) => (
                  <Typography key={idx} fontSize="0.875rem">
                    • {feature}
                  </Typography>
                ))}
                <Box mt={2}>
                  <Button variant="contained" fullWidth>
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
          <Typography variant="h6">Purchased Plans</Typography>
          <IconButton onClick={handleMenuOpen}>
            <FilterListIcon />
          </IconButton>
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
            <TableHead sx={{ backgroundColor: "#1E293B" }}>
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
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={plan.status}
                      color={statusColor(plan.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{plan.purchasedOn}</TableCell>
                  <TableCell>{plan.expiry}</TableCell>
                  <TableCell>{plan.photos}</TableCell>
                  <TableCell>{plan.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={1} textAlign="right">
          <Typography variant="body2">
            Showing 1 to 10 of 20 Subscriptions
          </Typography>
          <Button size="small">Next ›</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaSubcription;
