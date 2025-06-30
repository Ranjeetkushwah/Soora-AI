import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';

const rows = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarahjohnson@example.com',
    phone: '+1 (555) 234-5678',
    date: 'Oct 09, 2024',
    events: 154,
    photos: '2,000',
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: 2,
    name: 'Alex Martinez',
    email: 'alexmartinez@example.com',
    phone: '+44 7555 234567',
    date: 'Oct 05, 2024',
    events: 365,
    photos: '3,650',
    avatar: '/avatars/alex.jpg',
  },
  {
    id: 3,
    name: 'Emily Parker',
    email: 'emilyparker@example.com',
    phone: '+61 455 678 901',
    date: 'Sept 12, 2024',
    events: 90,
    photos: '487',
    avatar: '/avatars/emily.jpg',
  },
  {
    id: 4,
    name: 'David Thompson',
    email: 'davidthompson@example.com',
    phone: '+91 98765 43210',
    date: 'Sept 12, 2024',
    events: 25,
    photos: '230',
    avatar: '/avatars/david.jpg',
  },
  {
    id: 5,
    name: 'Olivia Harris',
    email: 'oliviaharris@example.com',
    phone: '+1 (555) 678-9012',
    date: 'Sept 07, 2024',
    events: 150,
    photos: '652',
    avatar: '/avatars/olivia.jpg',
  },
  {
    id: 6,
    name: 'Michael Bennett',
    email: 'michaelbennett@example.com',
    phone: '+49 1523 456789',
    date: 'Aug 28, 2024',
    events: 225,
    photos: '2,350',
    avatar: '/avatars/michael.jpg',
  },
  {
    id: 7,
    name: 'Jessica Morgan',
    email: 'jessicamorgan@example.com',
    phone: '+33 612 345 678',
    date: 'Aug 15, 2024',
    events: 70,
    photos: '320',
    avatar: '/avatars/jessica.jpg',
  },
  {
    id: 8,
    name: 'Daniel Cooper',
    email: 'danielcooper@example.com',
    phone: '+1 (555) 890-1234',
    date: 'Aug 10, 2024',
    events: 60,
    photos: '455',
    avatar: '/avatars/daniel.jpg',
  },
];

export default function ActiveUsersTable() {
  const [selected, setSelected] = React.useState([5]);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h6"
          sx={{
            borderBottom: '2px solid #305791',
            pb: 0.5,
            display: 'inline-block',
             fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#1F3A63",
          }}
        >
          Active Users
        </Typography>

        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            borderColor: '#305791',
            color: '#305791',
            textTransform: 'none',
            fontWeight: 500,
            fontFamily: 'Poppins',
          }}
        >
          Filter
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: '#1F3A63' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }} />
              <TableCell sx={{ color: 'white' }}>EVENT NAME</TableCell>
              <TableCell sx={{ color: 'white' }}>E-MAIL</TableCell>
              <TableCell sx={{ color: 'white' }}>PHONE NUMBER</TableCell>
              <TableCell sx={{ color: 'white' }}>DATE</TableCell>
              <TableCell sx={{ color: 'white', textAlign: 'right' }}>
                EVENTS
              </TableCell>
              <TableCell sx={{ color: 'white', textAlign: 'right' }}>
                PHOTOS
              </TableCell>
              <TableCell sx={{ color: 'white' }}>ARCHIVE</TableCell>
              <TableCell sx={{ color: 'white' }}>MORE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f1f6fb',
                  },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onChange={() => handleSelect(row.id)}
                    sx={{
                      color: '#305791',
                      '&.Mui-checked': {
                        color: '#305791',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={row.avatar}
                      sx={{ width: 28, height: 28, mr: 1 }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#305791',
                        fontFamily: 'Poppins',
                      }}
                    >
                      {row.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right">{row.events}</TableCell>
                <TableCell align="right">{row.photos}</TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: '#305791' }}>
                    {/* Placeholder - you might replace this */}
                    -
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
