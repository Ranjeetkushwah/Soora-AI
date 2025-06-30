import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  Event as CalendarIcon,
  People as UsersIcon,
  CameraAlt as CameraIcon,
} from "@mui/icons-material";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Divider from '@mui/material/Divider';

const ChartCard = ({ title, value, icon, data }) => {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return <CalendarIcon sx={{ color: "#2563eb" }} />;
      case "users":
        return <UsersIcon sx={{ color: "#2563eb" }} />;
      case "camera":
        return <CameraIcon sx={{ color: "#2563eb" }} />;
      default:
        return <CalendarIcon sx={{ color: "#2563eb" }} />;
    }
  };

  return (
    <Card sx={{ boxShadow: 1 }}>
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mb: 2,
            width: "343px",

          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            {getIcon()}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 900,
                color: "#1F3A63",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
            >
              {title}
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              color: "#111827",

              fontFamily: "Waylimo",
              fontSize: "42px",
            }}
          >
            {value}
          </Typography>

        </Box>
        <Divider />
        <Box sx={{ height: 128, mt: 3, mb: -2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <YAxis hide />
              <Bar
                dataKey="value"
                fill=" #1F3A63"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
