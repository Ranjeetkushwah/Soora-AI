
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar
} from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

const events = [
  {
    id: '1',
    name: "Athen's Wedding",
    eventId: '01256',
    venue: 'Greece',
    type: 'Wedding',
    date: 'Oct 08, 2024',
    photos: 2000,
    users: 154,
    avatar: '👰'
  },
  {
    id: '2',
    name: "Sydney's Wedding",
    eventId: '01257',
    venue: 'Australia',
    type: 'Wedding',
    date: 'Oct 05, 2024',
    photos: 3650,
    users: 365,
    avatar: '👰'
  },
  {
    id: '3',
    name: "Alisha's Twentieth",
    eventId: '01258',
    venue: 'India',
    type: 'Birthday',
    date: 'Sept 20, 2024',
    photos: 487,
    users: 90,
    avatar: '🎂'
  },
  {
    id: '4',
    name: "Sophia's Bachelorette",
    eventId: '01259',
    venue: 'US',
    type: 'Bachelorette',
    date: 'Sept 12, 2024',
    photos: 230,
    users: 25,
    avatar: '🎉'
  },
  {
    id: '5',
    name: "Shalom's Birthday",
    eventId: '01260',
    venue: 'US',
    type: 'Birthday',
    date: 'July 03, 2024',
    photos: 654,
    users: 450,
    avatar: '🎂'
  }
];

const RecentEventsTable= () => {
  return (
    <Card sx={{ boxShadow: 1, }}>
      <CardContent sx={{ p: 0, height: "302px", }}>
        <Box sx={{ p: 3, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, color: '#1F3A63', fontFamily: "Poppins", fontSize: "20px" }}>
            Recent Events
          </Typography>
          <Button
            variant="text"
            sx={{ color: '#2563eb', textTransform: 'none', fontWeight: 500 }}
          >
            View All
          </Button>
        </Box>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#1F3A63' }}>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  EVENT NAME
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  VENUE
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  TYPE
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  DATE
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  PHOTOS
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  USERS
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>
                  UPLOAD PHOTOS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow 
                  key={event.id} 
                  sx={{ 
                    '&:hover': { bgcolor: '#f9fafb' },
                    '&:last-child td': { border: 0 }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Typography variant="h6" sx={{ fontSize: '1.125rem' }}>
                        {event.avatar}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>
                        {event.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      {event.eventId}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#2563eb' }}>
                      {event.venue}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      {event.type}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      {event.date}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>
                      {event.photos}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>
                      {event.users}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      sx={{ 
                        bgcolor: '#2563eb',
                        color: 'white',
                        '&:hover': { bgcolor: '#1d4ed8' }
                      }}
                    >
                      <UploadIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};


export default RecentEventsTable;