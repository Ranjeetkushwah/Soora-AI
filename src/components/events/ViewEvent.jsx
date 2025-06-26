import React, { useState, useEffect } from 'react';
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
  Paper
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  PhotoLibrary as PhotoLibraryIcon,
  People as PeopleIcon,
  Link as LinkIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  FileCopy as FileCopyIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import QRCode from 'qrcode';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { useNavigate } from "react-router-dom";
import EventPhotos from './EventPhotos';

const ViewEvent = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [eventData] = useState({
    id: '01256',
    type: 'Wedding',
    date: '09/10/2024',
    location: 'Greece',
    photos: 2000,
    users: 154,
    shareUrl: 'https://soora.com'
  });

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = async () => {
    try {
      const qrDataUrl = await QRCode.toDataURL(eventData.shareUrl, {
        width: 150,
        margin: 2,
        color: {
          dark: '#1976d2',
          light: '#ffffff'
        }
      });
      setQrCodeUrl(qrDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = (format) => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.download = `event-qr-code.${format}`;
    link.href = qrCodeUrl;
    link.click();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(eventData.shareUrl);
      console.log('Link copied to clipboard');
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Athen's Wedding",
          text: 'Check out this wedding event!',
          url: eventData.shareUrl
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard();
    }
  };

    const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#E6E6E6', maxWidth: 1200, ml: "auto", p: 2 }}>
      {/* Header */}
      <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }} onClick={()=>{navigate(-1)}}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
              Athen's Wedding
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent:"space-between" }}>

        <Button
          variant="contained"
          startIcon={<BorderColorOutlinedIcon />}
          sx={{ bgcolor: '#1F3A63' }}
          onClick={()=>{navigate('/editevent')}}
        >
          Edit
        </Button>

        <Box sx={{display: 'flex',gap:"10px"}}>
          <Button
            variant="contained"
            startIcon={<PhotoLibraryIcon />}
            sx={{ bgcolor: '#1F3A63' }}
              onClick={()=>{navigate('/upload-photos')}}
          >
            Upload Photos
          </Button>
          <Button
            variant="contained"
            startIcon={<PeopleIcon />}
           sx={{ bgcolor: '#1F3A63' }}
           
          >
            Users
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkIcon />}
            sx={{ bgcolor: '#1F3A63' }}
            onClick={copyToClipboard}
          >
            Copy Event Link
          </Button>
          <Button
            variant="contained"
        
            sx={{ bgcolor: '#1F3A63' }}
            onClick={copyToClipboard}
          >
           ⋮
          </Button>
        </Box>
      </Box>

      {/* Event Details Accordion */}
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">1. Event Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{width:200}} >
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event ID:</Typography>
                <Typography fontWeight="bold">{eventData.id}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event Type:</Typography>
                <Typography fontWeight="bold">{eventData.type}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event Date:</Typography>
                <Typography fontWeight="bold">{eventData.date}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event Location:</Typography>
                <Typography fontWeight="bold">{eventData.location}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event Photos:</Typography>
                <Typography fontWeight="bold">{eventData.photos}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography color="text.secondary">Event Users:</Typography>
                <Typography fontWeight="bold">{eventData.users}</Typography>
              </Box>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Share Event Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">2. Share Event</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ gap: 10 }} spacing={3}>
            {/* QR Code Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Download QR Code
              </Typography>
              <Paper sx={{ p: 2, textAlign: 'center', mb: 2 }}>
                {qrCodeUrl && (
                  <img
                    src={qrCodeUrl}
                    alt="Event QR Code"
                    style={{ width: 150, height: 150, color: '#1F3A63' }}
                  />
                )}
              </Paper>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ bgcolor: '#1F3A63' }}
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadQRCode('jpg')}
                >
                  Download JPG
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ bgcolor: '#1F3A63' }}
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadQRCode('png')}
                >
                  Download PNG
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                 sx={{ color: '#1F3A63',borderColor:'#1F3A63' }}
                  startIcon={<ShareIcon />}
                  onClick={shareEvent}
                >
                  Share
                </Button>
              </Box>
            </Grid>

            {/* Share Link Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Share Link
              </Typography>
              <TextField
                fullWidth
                value={eventData.shareUrl}
                variant="outlined"
                size="small"
                InputProps={{
                  readOnly: true,
                  sx: { bgcolor: '#f5f5f5' }
                }}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  startIcon={<FileCopyIcon />}
                  onClick={copyToClipboard}
                  sx={{ bgcolor: '#1F3A63' }}
                >
                  Copy Link
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ShareIcon />}
                  onClick={shareEvent}
                   sx={{ color: '#1F3A63',borderColor:'#1F3A63' }}
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
          <Typography variant="h6">3. Event Photos </Typography>
         <span style={{ color: "#999", fontSize: "14px" }}>
                  (4 Folders and 8 Photos)
                </span>
        </AccordionSummary>
        <AccordionDetails>
 <EventPhotos/>

          </AccordionDetails>  </Accordion>
    </Box>
  );
};

export default ViewEvent;