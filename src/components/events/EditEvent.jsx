import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  IconButton,
  Avatar,
  MenuItem,
  InputAdornment,
  Select,
  FormControl,
  InputLabel,
  Divider,
  styled,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import Allimages from "../../assets";

const EditEvent = () => {
  const [category, setCategory] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const navigate = useNavigate();

  const UploadBox = styled(Box)(() => ({
    border: "2px dashed #B0B7C3",
    borderRadius: "8px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  }));

  const imageOptions = [
    `${Allimages.BirthdayCoverPhoto}`,
    `${Allimages.ConferenceCoverPhoto}`,
    `${Allimages.PartyChillersCoverPhotos}`,
    `${Allimages.BackGroundDisplayCoverPhotos}`,
    `${Allimages.WeddingCoverPhoto}`,
    `${Allimages.BirthdayCoverPhoto}`,
    `${Allimages.ConferenceCoverPhoto}`,
    `${Allimages.PartyChillersCoverPhotos}`,
    `${Allimages.BackGroundDisplayCoverPhotos}`,
    `${Allimages.WeddingCoverPhoto}`,
  ];

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ bgcolor: "#E6E6E6", maxWidth: "1489px", ml: "auto", p: 2 }}>
      {/* Header */}
      <Card sx={{ mb: 2, bgcolor: "#305791", color: "white" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="/lovable-uploads/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
              Edit Event
            </Typography>
          </Box>
        </CardContent>
      </Card>
      {/* Edit Event Details  */}
      <Accordion
        defaultExpanded
        sx={{ mb: 2, color: "#1F3A63", fontWeight: "bold" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{ color: "#1F3A63", fontWeight: "bold" }}
            variant="h6"
          >
            1. Event Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "column" }}
            spacing={2}
          >
            {/* Event Name */}

            <Grid item xs={12} md={6}>
              <TextField
                label="Event Name"
                fullWidth
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter Event name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                  endAdornment: eventName && (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setEventName("")}>
                        ✕
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Event Category */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Event Category</InputLabel>
                <Select
                  value={category}
                  label="Event Category"
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  startAdornment={
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">
                    <em>Choose Event Category</em>
                  </MenuItem>
                  <MenuItem value="wedding">Wedding</MenuItem>
                  <MenuItem value="music">Music</MenuItem>
                  <MenuItem value="conference">Conference</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Event Date */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Event Date"
                fullWidth
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Event Venue */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Event Venue"
                fullWidth
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Enter Event Location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                  endAdornment: venue && (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setVenue("")}>✕</IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ mb: 2, padding: 2 }}>
        <Typography sx={{ color: "#1F3A63", fontWeight: "bold" }} variant="h6">
          2. Cover Photo
        </Typography>

        <Box mt={4}>
          <Typography
            sx={{ color: "#1F3A63", fontWeight: "bold" }}
            fontWeight={600}
            mb={1}
          >
            Upload Cover Photo
          </Typography>

          {/* Upload area */}
          <UploadBox component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
            <CloudUploadIcon fontSize="large" color="primary" />
            <Typography mt={1} fontWeight={500} color="primary">
              Upload Photo
            </Typography>
          </UploadBox>

          {/* OR divider */}
          <Box mt={2} mb={1} display="flex" alignItems="center">
            <Divider sx={{ flexGrow: 1 }} />
            <Typography
              sx={{
                mx: 2,
                color: "#1F3A63",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              OR
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* Image selection grid */}
          <Typography
            sx={{ color: "#1F3A63", fontWeight: "bold" }}
            fontWeight={600}
            mb={1}
          >
            Select Cover Photo
          </Typography>
          <Grid container spacing={2}>
            {imageOptions.map((img, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`Options-${index}`}
                  sx={{
                    width: "187px",
                    height: 100,
                    borderRadius: 2,
                    border:
                      uploadedImage === img
                        ? "2px solid #1F3A63"
                        : "1px solid #ddd",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setUploadedImage(img)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Accordion>
    </Box>
  );
};

export default EditEvent;
