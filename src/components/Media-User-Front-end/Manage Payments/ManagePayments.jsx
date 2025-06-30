import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button
} from "@mui/material";
import { ReceiptLong, ArrowBack } from "@mui/icons-material";
import PaymentMethods from "./PaymentsMethods";
import { useNavigate } from "react-router-dom";

export default function ManagePayments() {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const paymentData = [
    {
      date: "Oct 08, 2024",
      id: "#78965",
      description: "Basic Plan",
      method: "Cash",
      amount: 500
    },
    {
      date: "Oct 05, 2024",
      id: "#78965",
      description: "Standard Plan",
      method: "Cash",
      amount: 2300
    },
    {
      date: "Sept 20, 2024",
      id: "#78965",
      description: "Standard Plan",
      method: "Credit Card",
      amount: 1000
    },
    {
      date: "Sept 12, 2024",
      id: "#78965",
      description: "Premium Plan",
      method: "Credit Card",
      amount: 1000
    },
    {
      date: "Sept 07, 2024",
      id: "#78965",
      description: "Basic Plan",
      method: "-",
      amount: 0
    }
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1489px",
        width: "100%",
        mx: "auto",
        my: 4,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#1F3A63",
          color: "#fff",
          p: 2,
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}

          onClick={() => { navigate(-1) }}
        >
          <ArrowBack sx={{ mr: 1 }} />
          <Typography variant="h6">Manage Payments</Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Paper sx={{ mt: 2, p: 2, borderRadius: "8px" }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Payment History" />
          <Tab label="Payment Methods" />
        </Tabs>

        {/* Payment History Table */}
        {tabValue === 0 && (
          <Box sx={{ mt: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#1F3A63" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>DATE</TableCell>
                  <TableCell sx={{ color: "#fff" }}>PAYMENT ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>DESCRIPTION</TableCell>
                  <TableCell sx={{ color: "#fff" }}>PAYMENT METHOD</TableCell>
                  <TableCell sx={{ color: "#fff" }}>AMOUNT ($)</TableCell>
                  <TableCell sx={{ color: "#fff" }}>INVOICE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell sx={{ color: "#1F3A63", fontWeight: "500" }}>
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ color: "#1F3A63" }}>
                      <strong>{row.description}</strong>
                    </TableCell>
                    <TableCell sx={{ color: "#1F3A63" }}>
                      {row.method}
                    </TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <ReceiptLong />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}

        {/* Payment Methods Section (for future content) */}
        {tabValue === 1 && (
          <Box sx={{ mt: 2 }}>
           <PaymentMethods/>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
