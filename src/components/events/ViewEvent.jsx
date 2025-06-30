import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  IconButton,
  Chip,
  Avatar,
  Divider,
  Paper,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  PhotoLibrary as PhotoLibraryIcon,
  People as PeopleIcon,
  Link as LinkIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  FileCopy as FileCopyIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import QRCode from "qrcode";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useNavigate } from "react-router-dom";
import EventPhotos from "./EventPhotos";
import PublishEventDialog from "./PublishEventDialog";
import ActiveUsersTable from "./ActiveUsersTable";

const ViewEvent = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const [eventData] = useState({
    id: "01256",
    type: "Wedding",
    date: "09/10/2024",
    location: "Greece",
    photos: 2000,
    users: 154,
    shareUrl: "https://soora.com",
  });

  useEffect(() => {
    generateQRCode();
  });

  const generateQRCode = async () => {
    try {
      const qrDataUrl = await QRCode.toDataURL(eventData.shareUrl, {
        width: 150,
        margin: 2,
        color: {
          dark: "#1F3A63",
          light: "#FFEDDC",
        },
      });
      setQrCodeUrl(qrDataUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = (format) => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.download = `event-qr-code.${format}`;
    link.href = qrCodeUrl;
    link.click();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(eventData.shareUrl);
      console.log("Link copied to clipboard");
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Athen's Wedding",
          text: "Check out this wedding event!",
          url: eventData.shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyToClipboard();
    }
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#E6E6E6",
        width: "100%",
        maxWidth: {
          xs: "100%",     // mobile
          sm: "600px",    // small screens
          md: "900px",    // medium screens
          lg: "1200px",   // large screens
          xl: "1489px"    // extra-large screens
        },
        mx: "auto",          // center horizontally
        p: { xs: 1, sm: 2, md: 3 }
      }}
    >
      {/* Header */}
      <Card sx={{ mb: 2, bgcolor: "#305791", color: "white" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => { navigate(-1) }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Avatar

              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
              Athen's Wedding
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Box
        sx={{ display: "flex", gap: 1, mb: 2, justifyContent: "space-between" }}
      >
        <Button
          variant="contained"
          startIcon={<BorderColorOutlinedIcon />}
          sx={{ bgcolor: "#1F3A63" }}
          onClick={() => {
            navigate("/editevent");
          }}
        >
          Edit
        </Button>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            startIcon={<PhotoLibraryIcon />}
            sx={{ bgcolor: "#1F3A63" }}
            onClick={() => {
              navigate("/upload-photos");
            }}
          >
            Upload Photos
          </Button>
          <Button
            variant="contained"
            startIcon={<PeopleIcon />}
            sx={{ bgcolor: "#1F3A63" }}
            onClick={() => {
              setShowUsers(!showUsers);
            }}
          >
            Users
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkIcon />}
            sx={{ bgcolor: "#1F3A63" }}
            onClick={copyToClipboard}
          >
            Copy Event Link
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#1F3A63" }}
            onClick={copyToClipboard}
          >
            ⋮
          </Button>
        </Box>
      </Box>

      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 900,
              color: "#1F3A63",
            }}
            variant="h6"
          >
            1. Event Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails onClick={() => setDialogOpen(true)}>
          <Box sx={{ width: 200 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event ID:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event Type:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.type}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event Date:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.date}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event Location:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.location}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event Photos:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.photos}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="#1F3A63">Event Users:</Typography>
                <Typography color="#1F3A63" fontWeight="bold">
                  {eventData.users}
                </Typography>
              </Box>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>

      {showUsers ? (
        <>
          {" "}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {showUsers && <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#1F3A63",
                }}
                variant="h6"
              >
                Active Users
              </Typography>}
            </AccordionSummary>
            <AccordionDetails sx={{ marginTop: "-20px" }} >

              <ActiveUsersTable />
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <>
          {" "}
          {/* Event Details Accordion */}
            {/* Share Event Accordion */}
            <Accordion defaultExpanded sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#1F3A63",
                  }}
                  variant="h6"
                >
                  2. Share Event
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container sx={{ gap: 10, color: "#1F3A63" }} spacing={3}>
                  {/* QR Code Section */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Download QR Code
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 5,
                      }}
                    >
                      <Paper sx={{ p: 2, textAlign: "center", mb: 2 }}>
                        {qrCodeUrl && (
                          <img
                            src={qrCodeUrl}
                            alt="Event QR Code"
                            style={{ width: 150, height: 150, color: "#1F3A63" }}
                          />
                        )}
                      </Paper>
                      <Box
                        sx={{ display: "flex", flexDirection: "column", gap: 6 }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ bgcolor: "#1F3A63" }}
                          startIcon={<DownloadIcon />}
                          onClick={() => downloadQRCode("jpg")}
                        >
                          Download JPG
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ bgcolor: "#1F3A63" }}
                          startIcon={<DownloadIcon />}
                          onClick={() => downloadQRCode("png")}
                        >
                          Download PNG
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ color: "#1F3A63", borderColor: "#1F3A63" }}
                          startIcon={<ShareIcon />}
                          onClick={shareEvent}
                        >
                          Share
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mx: 2, color: "#305791" }}
                  />
                  {/* Share Link Section */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Share Link
                    </Typography>
                    <TextField
                      fullWidth
                      value={eventData.shareUrl}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        readOnly: true,
                        sx: { bgcolor: "#FFEDDC" },
                      }}
                      sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        variant="contained"
                        startIcon={<FileCopyIcon />}
                        onClick={copyToClipboard}
                        sx={{ bgcolor: "#1F3A63" }}
                      >
                        Copy Link
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        onClick={shareEvent}
                        sx={{ color: "#1F3A63", borderColor: "#1F3A63" }}
                      >
                        Share
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 900,
                    color: "#1F3A63",
                  }}
                  variant="h6"
                >
                  3. Event Photos{" "}
                  <span style={{ color: "#1F3A63", fontSize: "14px" }}>
                  (4 Folders and 8 Photos)
                  </span>{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <EventPhotos />
            </AccordionDetails>{" "}
          </Accordion>
        </>
      )}

      <PublishEventDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onPublish={() => {
          // your publish logic here
          setDialogOpen(false);
        }}
        eventName="Event Name"
      />
    </Box>
  );
};

export default ViewEvent;
