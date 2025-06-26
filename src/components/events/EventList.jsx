import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Chip,
  InputAdornment,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Edit as EditIcon,
  QrCode as QrCodeIcon,
  Upload as UploadIcon,
  MoreHoriz as MoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const EventsList = () => {
  // State variables
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Active Events
  const [activeEvents, setActiveEvents] = useState([
    {
      id: "D1256",
      eventName: "Athen's Wedding",
      date: "Oct 09, 2024",
      venue: "Greece",
      type: "Wedding",
      users: 154,
      photos: 2000,
      isSelected: false,
      avatar: "AW",
    },
    {
      id: "D1257",
      eventName: "Sydney's Wedding",
      date: "Oct 08, 2024",
      venue: "Australia",
      type: "Wedding",
      users: 365,
      photos: 3650,
      isSelected: false,
      avatar: "SW",
    },
    {
      id: "D1258",
      eventName: "Alisha's Twentieth",
      date: "Sept 20, 2024",
      venue: "India",
      type: "Birthday",
      users: 90,
      photos: 487,
      isSelected: false,
      avatar: "AT",
    },
    ]);

  // Archived Events
  const [archivedEvents, setArchivedEvents] = useState([
    {
      id: "D1261",
      eventName: "Bridgette's Wedding",
      date: "Aug 28, 2024",
      venue: "England",
      type: "Wedding",
      users: 225,
      photos: 2350,
      isSelected: false,
      avatar: "BW",
    },
    {
      id: "D1262",
      eventName: "Heart Conference",
      date: "Aug 15, 2024",
      venue: "India",
      type: "Conference",
      users: 70,
      photos: 320,
      isSelected: false,
      avatar: "HC",
    },
    {
      id: "D1263",
      eventName: "Robert's First",
      date: "Aug 10, 2024",
      venue: "Canada",
      type: "Birthday",
      users: 60,
      photos: 455,
      isSelected: false,
      avatar: "RF",
    },
    {
      id: "D1264",
      eventName: "Inaugural Ceremony",
      date: "July 18, 2024",
      venue: "Italy",
      type: "Inauguration",
      users: 35,
      photos: 345,
      isSelected: false,
      avatar: "IC",
    },
    {
      id: "D1265",
      eventName: "Africa Roll",
      date: "July 09, 2024",
      venue: "Africa",
      type: "Conference",
      users: 120,
      photos: 520,
      isSelected: false,
      avatar: "AR",
    },
  
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSearchTerm(""); // Clear search when switching tabs
  };

  const getCurrentEvents = () => {
    return activeTab === 0 ? activeEvents : archivedEvents;
  };

  const setCurrentEvents = (updateFn) => {
    if (activeTab === 0) {
      setActiveEvents(updateFn);
    } else {
      setArchivedEvents(updateFn);
    }
  };

  const handleCheckboxChange = (id) => {
    setCurrentEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, isSelected: !event.isSelected } : event
      )
    );
  };

  const handleSelectAll = () => {
    const currentEvents = getCurrentEvents();
    const allSelected = currentEvents.every((event) => event.isSelected);
    setCurrentEvents((prev) =>
      prev.map((event) => ({ ...event, isSelected: !allSelected }))
    );
  };

  const getTypeChipColor = (type) => {
    switch (type.toLowerCase()) {
      case "wedding":
        return "#e8f5e8";
      case "birthday":
        return "#fff3e0";
      case "conference":
        return "#e3f2fd";
      case "bachelorette":
        return "#f3e5f5";
      case "inauguration":
        return "#fce4ec";
      case "festival":
        return "#e1f5fe";
      case "corporate":
        return "#f1f8e9";
      default:
        return "#f5f5f5";
    }
  };

  // Filter events based on search term
  const currentEvents = getCurrentEvents();
  const filteredEvents = currentEvents.filter(
    (event) =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allSelected =
    filteredEvents.length > 0 &&
    filteredEvents.every((event) => event.isSelected);
  const someSelected = filteredEvents.some((event) => event.isSelected);

  return (
    <Box sx={{ bgcolor: '#E6E6E6', maxWidth: "1489px", ml: "auto", p: 2 }}>
      {/* Header */}
      <Paper
        sx={{
          bgcolor: "#305791",
          color: "white",
          p: 2,
          borderRadius: 2,
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ArrowBackIcon onClick={()=>{navigate(-1)}} />
        <Typography variant="h5" sx={{ fontWeight: "normal" }}>
          Events List
        </Typography>
      </Paper>

      {/* Tabs */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         marginRight: "20px" 
        }}
      >
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label={`Active Events (${activeEvents.length})`} />
          <Tab label={`Archived Events (${archivedEvents.length})`} />
        </Tabs>

        {/* Search and Filter Bar */}
        <Box sx={{ display: "flex", gap: 2, mb: 3, alignItems: "center" }}>
          <TextField
            placeholder="Search events, venue, or type..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{ minWidth: 100 }}
          >
            Filter
          </Button>
          {activeTab === 1 && (
            <Chip
              label="Archived"
              color="warning"
              variant="outlined"
              sx={{ ml: 2 }}
            />
          )}
        </Box>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", border: "1px solid #e0e0e0" ,width:"inherit" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1F3A63" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  sx={{ color: "white" }}
                  checked={allSelected}
                  indeterminate={someSelected && !allSelected}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                EVENT NAME
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                DATE
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                VENUE
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                TYPE
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                USERS
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                PHOTOS
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                EDIT
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                GENERATE QR CODE
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                UPLOAD PHOTOS
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                MORE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEvents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    {searchTerm
                      ? `No events found matching "${searchTerm}"`
                      : "No events available"}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredEvents.map((event, index) => (
                <TableRow
                  key={event.id}
                  sx={{
                    bgcolor: index % 2 === 0 ? "#f5f5f5" : "white",
                    "&:hover": { bgcolor: "#e3f2fd" },
                    opacity: activeTab === 1 ? 0.8 : 1, // Slightly faded for archived events
                  }}
                   onClick={() => {navigate("/viewevent")}}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={event.isSelected}
                      onChange={() => handleCheckboxChange(event.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#666", minWidth: 40 }}
                      >
                        {event.id}
                      </Typography>
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          fontSize: "0.75rem",
                          bgcolor: "#1976d2",
                        }}
                      >
                        {event.avatar}
                      </Avatar>
                      <Typography sx={{ fontWeight: 500 }}>
                        {event.eventName}
                      </Typography>
                      {activeTab === 1 && (
                        <Chip
                          label="Archived"
                          size="small"
                          color="warning"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell sx={{ color: "#1976d2" }}>{event.venue}</TableCell>
                  <TableCell>
                    <Chip
                      label={event.type}
                      size="small"
                      sx={{
                        bgcolor: getTypeChipColor(event.type),
                        color: "#333",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{event.users}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{event.photos}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: activeTab === 1 ? "#757575" : "#1976d2",
                        color: "white",
                        "&:hover": {
                          bgcolor: activeTab === 1 ? "#616161" : "#1565c0",
                        },
                      }}
                      disabled={activeTab === 1}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: "#1976d2", color: "white" }}
                    >
                      <QrCodeIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: activeTab === 1 ? "#757575" : "#1976d2",
                        color: "white",
                        "&:hover": {
                          bgcolor: activeTab === 1 ? "#616161" : "#1565c0",
                        },
                      }}
                      disabled={activeTab === 1}
                    >
                      <UploadIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: "#1976d2", color: "white" }}
                    >
                      <MoreIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          py: 2,
          width:"inherit",
          gap:5

        }}
      >
        <Typography variant="body2" color="text.secondary">
          Showing {filteredEvents.length} of {currentEvents.length}{" "}
          {activeTab === 0 ? "Active" : "Archived"} Events
        </Typography>
        <Button
          variant="outlined"
          size="small"
          disabled={filteredEvents.length === 0}
        >
          Next &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default EventsList;
