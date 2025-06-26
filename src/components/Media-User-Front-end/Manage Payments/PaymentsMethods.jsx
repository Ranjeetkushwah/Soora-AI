import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

export default function PaymentMethods() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {/* Credit/Debit Card */}
        <Grid>
          <Paper
            sx={{
              border: "1px solid #cfd8dc",
              p: 2,
              borderRadius: "8px",
              width: "328px",
              height: "225px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "#1F3A63",
                textTransform: "none",
                borderRadius: "4px",
              }}
              fullWidth
            >
              Add Card
            </Button>
            <Box>
              <Typography color="#1F3A63" fontWeight={600} mt={1}>
                Credit Card/Debit Card
              </Typography>
              <Typography color="#B6BABF" fontSize="13px">
                You do not have any active cards.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Net Banking */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              border: "1px solid #cfd8dc",
              p: 2,
              borderRadius: "8px",
              width: "328px",
              height: "225px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "#1F3A63",
                textTransform: "none",
                borderRadius: "4px",
              }}
              fullWidth
            >
              Add Account
            </Button>
            <Box>
              <Typography color="#1F3A63" fontWeight={600} mt={1}>
                Net Banking
              </Typography>
              <Typography fontSize="13px" color="#B6BABF">
                You do not have any active account.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* UPI */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              border: "1px solid #cfd8dc",
              p: 2,
              borderRadius: "8px",
              width: "328px",
              height: "225px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                bgcolor: "#1F3A63",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontSize="14px">GooglePay</Typography>
              <IconButton sx={{ color: "#fff", p: 0.5 }}>
                <Close fontSize="small" />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography color="#1F3A63" fontWeight={600} mt={1}>
                  UPI
                </Typography>
                <Typography fontSize="13px" color="#B6BABF">
                  1 active UPI
                </Typography>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    bgcolor: "#1F3A63",
                    textTransform: "none",
                    borderRadius: "4px",
                  }}
                >
                  Add UPI
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Other Wallets */}
        <Grid>
          <Paper
            sx={{
              border: "1px solid #cfd8dc",
              p: 2,
              borderRadius: "8px",
              width: "328px",
              height: "225px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "#1F3A63",
                textTransform: "none",
                borderRadius: "4px",
              }}
              fullWidth
            >
              Add Wallet
            </Button>
            <Box>
              <Typography color="#1F3A63" fontWeight={600} mt={1}>
                Other Wallets
              </Typography>
              <Typography fontSize="13px" color="#B6BABF">
                You do not have any active wallet.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
