import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Pagination,
     Card,
  CardContent,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Schedule as ScheduleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SubcriptionsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Mock data based on the image
  const [subscriptions, setSubscriptions] = useState([
    {
      id: "1",
      subscriberName: "PixelCurator",
      transactionId: "ID52034578",
      subscriptionPlan: "Basic Plan",
      status: "Active",
      purchasedOn: "Oct 09, 2024",
      expiry: "Oct 09, 2024",
      photos: 0,
      amount: 0,
    },
    {
      id: "2",
      subscriberName: "EventurePro",
      transactionId: "ID52034578",
      subscriptionPlan: "Advance Plan",
      status: "Active",
      purchasedOn: "Oct 09, 2024",
      expiry: "Oct 09, 2024",
      photos: 0,
      amount: 250,
    },
    {
      id: "3",
      subscriberName: "GalleryMaster",
      transactionId: "ID52034578",
      subscriptionPlan: "Basic Plan",
      status: "Cancelled",
      purchasedOn: "Sept 20, 2024",
      expiry: "Sept 20, 2024",
      photos: 0,
      amount: 0,
    },
    {
      id: "4",
      subscriberName: "MomentManager",
      transactionId: "ID52034578",
      subscriptionPlan: "Standard Plan",
      status: "Active",
      purchasedOn: "Sept 12, 2024",
      expiry: "Sept 12, 2024",
      photos: 2500,
      amount: 150,
    },
    {
      id: "5",
      subscriberName: "PhotoVaultAdmin",
      transactionId: "ID52034578",
      subscriptionPlan: "Basic Plan",
      status: "Active",
      purchasedOn: "Sept 07, 2024",
      expiry: "Sept 07, 2024",
      photos: 100,
      amount: 0,
    },
    {
      id: "6",
      subscriberName: "PhotoOrganizerPro",
      transactionId: "ID52034578",
      subscriptionPlan: "Basic Plan",
      status: "Expired",
      purchasedOn: "Aug 28, 2024",
      expiry: "Aug 28, 2024",
      photos: 100,
      amount: 0,
    },
    {
      id: "7",
      subscriberName: "EventSnapMaster",
      transactionId: "ID52034578",
      subscriptionPlan: "Standard Plan",
      status: "Cancelled",
      purchasedOn: "Aug 15, 2024",
      expiry: "Aug 15, 2024",
      photos: 2500,
      amount: 150,
    },
    {
      id: "8",
      subscriberName: "ShotKeeper",
      transactionId: "ID52634578",
      subscriptionPlan: "Advance Plan",
      status: "Cancelled",
      purchasedOn: "Aug 10, 2024",
      expiry: "Aug 10, 2024",
      photos: 0,
      amount: 250,
    },
    {
      id: "9",
      subscriberName: "FrameFocusAdmin",
      transactionId: "ID52634578",
      subscriptionPlan: "Advance Plan",
      status: "Active",
      purchasedOn: "July 18, 2024",
      expiry: "July 18, 2024",
      photos: 0,
      amount: 250,
    },
    {
      id: "10",
      subscriberName: "VisualArchivePro",
      transactionId: "ID52634578",
      subscriptionPlan: "Standard Plan",
      status: "Expired",
      purchasedOn: "July 09, 2024",
      expiry: "July 02, 2024",
      photos: 2500,
      amount: 150,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return { backgroundColor: "#e8f5e8", color: "#2e7d32" };
      case "Expired":
        return { backgroundColor: "#ffebee", color: "#c62828" };
      case "Cancelled":
        return { backgroundColor: "#fff3e0", color: "#ef6c00" };
      default:
        return { backgroundColor: "#f5f5f5", color: "#757575" };
    }
  };

  const filteredSubscriptions = subscriptions.filter(
    (sub) =>
      sub.subscriberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.subscriptionPlan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (id) => {
    const updated = subscriptions.map((subscription) =>
      subscription.id === id
        ? { ...subscription, isSelected: !subscription.isSelected }
        : subscription
    );
    setSubscriptions(updated);
  };

  return (
<Box
  sx={{
    bgcolor: "#E6E6E6",
    width: "100%",
    maxWidth: {
      xs: "100%",    // mobile
      sm: "600px",   // small screens
      md: "900px",   // medium screens
      lg: "1200px",  // large screens
      xl: "1489px"   // extra large screens
    },
    mx: "auto",             // center horizontally
    p: { xs: 1, sm: 2, md: 3 }
  }}
>
      
        
        {/* Header */}
        <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
               Subscriptions
            </Typography>
          </Box>
        </CardContent>
      </Card>
<Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
        {/* Controls */}
        <Box sx={{ p: 3, borderBottom: "1px solid #e0e0e0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#1F3A63",
                "&:hover": { backgroundColor: "#14315e" },
                textTransform: "none",
                fontWeight: 600,
              }}
              onClick={() => {
                navigate("/subscriptions/add");
              }}
            >
              Add Subscription
            </Button>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                placeholder="Search"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#757575" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
              <Button
                variant="outlined"
                startIcon={<FilterIcon />}
                sx={{ textTransform: "none", minWidth: 80 }}
              >
                Filter
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#1F3A63", borderRadius: "8px" }}>
              <TableRow>
                <TableCell
                  padding="checkbox"
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  <Checkbox sx={{ color: "white" }} />
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    SUBSCRIBER'S NAME
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  TRANSACTION ID
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  SUBSCRIPTION PLAN
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  STATUS
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  PURCHASED ON
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  EXPIRY
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  PHOTOS
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: 600, fontSize: "0.75rem" }}
                >
                  AMOUNT ($)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSubscriptions.map((subscription) => (
                <TableRow
                  key={subscription.id}
                  //   key={index}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={subscription.isSelected}
                      onChange={() => handleCheckboxChange(subscription.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        {subscription.subscriberName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ fontWeight: 500 }}
                    >
                      {subscription.transactionId}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {subscription.subscriptionPlan}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={subscription.status}
                      size="small"
                      sx={{
                        ...getStatusColor(subscription.status),
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {subscription.purchasedOn}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {subscription.expiry}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {subscription.photos === 0
                        ? "-"
                        : subscription.photos.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {subscription.amount === 0 ? "0" : subscription.amount}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fafafa",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Showing 1 to 10 Events of 20 Events
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Next
            </Typography>
            <Button
              size="small"
              sx={{ minWidth: "auto", p: 0.5, color: "primary.main" }}
            >
              →
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SubcriptionsList;
