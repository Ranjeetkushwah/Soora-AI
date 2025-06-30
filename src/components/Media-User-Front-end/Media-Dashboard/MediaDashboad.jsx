import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Avatar,
  LinearProgress,
} from "@mui/material";
import { Calendar, Users, Camera, Plus } from "lucide-react";
import ChartCard from "./ChartCard";
import StatsCard from "./StatsCard";
import RecentEventsTable from "./RecentEventsTable";
import { useNavigate } from "react-router-dom";
import BackButtonIcon from "../../../assets/Buttons icons/BackButtonIcon";


const MediaDashboard = () => {
  const navigate = useNavigate();

  const eventsData = [
    { name: "April", value: 12 },
    { name: "May", value: 5 },
    { name: "June", value: 8 },
    { name: "July", value: 7 },
    { name: "Aug", value: 15 },
    { name: "Sept", value: 10 },
  ];

  const usersData = [
    { name: "April", value: 8 },
    { name: "May", value: 4 },
    { name: "June", value: 9 },
    { name: "July", value: 7 },
    { name: "Aug", value: 12 },
    { name: "Sept", value: 10 },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F4F6F8",
        minHeight: "100vh",
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
          width: "98%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackButtonIcon />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            Hello, Tanmay Ahuja!
          </Typography>
        </Box>{" "}
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

      {/* Main Content */}
      <Box sx={{ p: 4 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
          spacing={5}
          mb={4}
        >
          <Grid item xs={12} md={4}>
            <ChartCard
              title="Total Events"
              value="204"
              icon={Calendar}
              data={eventsData}

            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ChartCard
              title="Total Users"
              value="350"
              icon={Users}
              data={usersData}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard
              title="Photos Used"
              value="1500"
              icon={Camera}
              showProgress
              progressValue={50}
              progressText="Remaining Photos"
              upgradeButton
            />
          </Grid>
        </Grid>

        {/* Recent Events Table */}
        <RecentEventsTable />
      </Box>
    </Box>
  );
};

export default MediaDashboard;
