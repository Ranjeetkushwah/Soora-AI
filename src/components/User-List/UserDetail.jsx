
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Grid,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserDetail = () => {
  const [userData] = useState({
    name: 'Sarah Johnson',
    avatar: '/lovable-uploads/bea65af2-3649-44d7-8f35-617661f92dd2.png',
    registeredOn: '09/10/2024',
    email: 'sarahjohnson@example.com',
    phoneNumber: '+1 (555) 234-5678',
    dateOfBirth: '12-05-2024',
    gender: 'Female',
    country: 'USA',
    events: 2,
    photos: 225,
    eventsList: [
      {
        id: '012654',
        name: 'PixelCurator',
        date: 'Oct 09, 2024',
        venue: 'Greece',
        type: 'Wedding',
        users: 154,
        photos: 2000,
      },
      {
        id: '012654',
        name: 'EventlensPro',
        date: 'Oct 05, 2024',
        venue: 'Australia',
        type: 'Wedding',
        users: 365,
        photos: 3650,
      },
      {
        id: '012654',
        name: 'GalleryMaster',
        date: 'Sept 20, 2024',
        venue: 'India',
        type: 'Birthday',
        users: 90,
        photos: 487,
      },
    ],
  });

  const [expandedDetails, setExpandedDetails] = useState(true);
  const [expandedEvents, setExpandedEvents] = useState(true);
  const navigate = useNavigate();

  const handleDetailsToggle = () => {
    setExpandedDetails(!expandedDetails);
  };

  const handleEventsToggle = () => {
    setExpandedEvents(!expandedEvents);
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'wedding':
        return '#1976d2';
      case 'birthday':
        return '#ed6c02';
      default:
        return '#2e7d32';
    }
  };

  return (
    <Box sx={{ bgcolor: '#E6E6E6', maxWidth: "1489px", ml: "auto", p: 2, height: "100%" }}>
      {/* Header */}
      <Card sx={{ mb: 2, background: '#305791' }}>
        <CardContent sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }} onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              src={userData.avatar}
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              {userData.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Details Section */}
      <Card sx={{ mb: 2 }}>
        <Accordion expanded={expandedDetails} onChange={handleDetailsToggle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: '#f5f5f5' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold',color:"#305791" }}>
              1. Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1} sx={{ display: 'flex', flexDirection: "column" }} >
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    User Name :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }} >{userData.name}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Registered on :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.registeredOn}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Email ID :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Phone Number :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.phoneNumber}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Date of Birth :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.dateOfBirth}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Gender :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.gender}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Country :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.country}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Events :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.events}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px' }}>
                  <Typography variant="body2" color="#1F3A63" sx={{ fontWeight: '500' }}>
                    Photos :
                  </Typography>
                  <Typography variant="body1"  sx={{ fontWeight: 'Bold',color:"#1F3A63" }}>{userData.photos}</Typography>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>

      {/* Events Section */}
      <Card>
        <Accordion expanded={expandedEvents} onChange={handleEventsToggle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: '#f5f5f5' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold',color:"#305791" }}>
              2. Events
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#305791' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>EVENT ID</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>EVENT NAME</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>DATE</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>VENUE</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>TYPE</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>USERS</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>PHOTOS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.eventsList.map((event, index) => (
                    <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                      <TableCell sx={{ fontWeight: 'bold',color:"#305791" }}>{event.id}</TableCell>
                      <TableCell sx={{ fontWeight: '600',color:"#305791" }}>{event.name}</TableCell>
                      <TableCell sx={{ fontWeight: '400',color:"#305791" }}>{event.date}</TableCell>
                      <TableCell sx={{ fontWeight: '400',color:"#305791" }} >{event.venue}</TableCell>
                      <TableCell>
                        <Chip
                          label={event.type}
                          size="small"
                          sx={{
                            backgroundColor: getTypeColor(event.type),
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold',color:"#305791" }}>{event.users}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold',color:"#305791" }}>{event.photos.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Box>
  );
};

export default UserDetail;