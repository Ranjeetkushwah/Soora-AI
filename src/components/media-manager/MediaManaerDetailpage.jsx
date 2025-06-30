import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Chip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ReceiptIcon from "/src/assets/icons/Receipt Fill btn.svg"

const MediaManagerDetailpage = () => {
  const navigate = useNavigate();

  const detailsData = [
    { label: "Media Manager's Name:", value: "Pixel Curator" },
    { label: "Registered on", value: "03/01/2024" },
    { label: "Email ID:", value: "pixelcurator@example.com" },
    { label: "Phone Number:", value: "+1 (555) 234-5678" },
    { label: "Company Name:", value: "Pixel Curator" },
    { label: "Events:", value: "18" },
    { label: "Photos:", value: "4825" },
    { label: "Current Subscription:", value: "Basic Plan" },
  ];

  const eventsData = [
    {
      eventId: "012654",
      eventName: "PixelCurator",
      date: "Oct 05, 2024",
      venue: "Outdoors",
      type: "Wedding",
      likes: "164",
      photos: "2,000",
    },
    {
      eventId: "012654",
      eventName: "EventsImPro",
      date: "Oct 05, 2024",
      venue: "Australia",
      type: "Wedding",
      likes: "385",
      photos: "3,850",
    },
  ];

  return (
    <Box sx={{ maxWidth: "1489px", ml: "auto", p: 2 }}>
      {/* Header */}
      <Card sx={{ mb: 2, backgroundColor: "#305791" }}>
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "medium" }}
            >
              Pixel Curator
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Add Subscription Button */}
      <Box sx={{ maxWidth: "1489px", ml: "auto", p: 2 }}>
        <Button
          variant="contained"
          startIcon={
            <img
              src={ReceiptIcon}
              alt="Receipt"
              style={{
                height: "14px",
                width: "16px"
              }}
            />
          }
          sx={{
            backgroundColor: "#305791",
            textTransform: "none",
            fontSize: "16px",
            py: 0.5,
            px: 2,
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
          onClick={() => {
            navigate("/subscriptions/add");
          }}
        >
          Add subscription
        </Button>
      </Box>

      {/* Details Section */}
      <Accordion
        defaultExpanded
        sx={{ mt: 2, mb: 2, boxShadow: 1, borderRadius: "8px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "#white", minHeight: 48 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            1. Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Box sx={{ p: 3 }}>
            {detailsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  py: 1,
                  borderBottom:
                    index < detailsData.length - 1
                      ? "1px solid #e0e0e0"
                      : "none",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    minWidth: 180,
                    color: "#4a6fa5",
                    fontWeight: "medium",
                    fontSize: "13px",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#333",
                    fontSize: "13px",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Events Section */}
      <Accordion defaultExpanded sx={{ boxShadow: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "#f5f5f5", minHeight: 48 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            2. Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#2c3e50" }}>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    EVENT ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    EVENT NAME
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    DATE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    VENUE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    TYPE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    LIKES
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      py: 1,
                    }}
                  >
                    PHOTOS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eventsData.map((event, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
                      "&:hover": { backgroundColor: "#e3f2fd" },
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "12px",
                        py: 1.5,
                        color: "#4a6fa5",
                        fontWeight: "medium",
                      }}
                    >
                      {event.eventId}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", py: 1.5 }}>
                      {event.eventName}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", py: 1.5 }}>
                      {event.date}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", py: 1.5 }}>
                      {event.venue}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", py: 1.5 }}>
                      {event.type}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px", py: 1.5 }}>
                      {event.likes}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "12px",
                        py: 1.5,
                        color: "#4a6fa5",
                        fontWeight: "medium",
                      }}
                    >
                      {event.photos}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MediaManagerDetailpage;
