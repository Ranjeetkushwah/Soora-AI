import React, { useState } from 'react';
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
  Avatar,
  Checkbox,
  IconButton,
  Chip,
  InputAdornment,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  Restore as RestoreIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Dummy user data
const userData = [
  { id: 1, name: "Sarah Johnson", email: "sarahjohnson@example.com", phone: "+1 (555) 234-5678", date: "Oct 09, 2024", events: 154, photos: 2000, avatar: "SJ", archived: false },
  { id: 2, name: "Alex Martinez", email: "alexmartinez@example.com", phone: "+44 7555 234567", date: "Oct 05, 2024", events: 365, photos: 3650, avatar: "AM", archived: false },
  { id: 3, name: "Emily Parker", email: "emilyparker@example.com", phone: "+61 455 678 901", date: "Sept 20, 2024", events: 90, photos: 487, avatar: "EP", archived: false },
  { id: 4, name: "David Thompson", email: "davidthompson@example.com", phone: "+91 98765 43210", date: "Sept 12, 2024", events: 25, photos: 230, avatar: "DT", archived: false },
  { id: 5, name: "Olivia Harris", email: "oliviaharris@example.com", phone: "+1 (555) 678-9012", date: "Sept 07, 2024", events: 150, photos: 652, avatar: "OH", archived: true },
  { id: 6, name: "Michael Bennett", email: "michaelbennett@example.com", phone: "+49 1523 456789", date: "Aug 28, 2024", events: 225, photos: 2350, avatar: "MB", archived: true },
  { id: 7, name: "Jessica Morgan", email: "jessicamorgan@example.com", phone: "+33 612 345 678", date: "Aug 15, 2024", events: 70, photos: 320, avatar: "JM", archived: true },
  { id: 8, name: "Daniel Cooper", email: "danielcooper@example.com", phone: "+1 (555) 890-1234", date: "Aug 10, 2024", events: 60, photos: 455, avatar: "DC", archived: false },
  { id: 9, name: "Rachel Edwards", email: "racheledwards@example.com", phone: "+34 612 345 678", date: "July 18, 2024", events: 35, photos: 345, avatar: "RE", archived: false },
  { id: 10, name: "James Anderson", email: "jamesanderson@example.com", phone: "+61 90-1234-5678", date: "July 09, 2024", events: 120, photos: 520, avatar: "JA", archived: true },
];

export default function UsersList() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(userData);
  const navigate = useNavigate();

  const handleTabChange = (_, newValue) => setTabValue(newValue);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeUsers = filteredUsers.filter((u) => !u.archived);
  const archivedUsers = filteredUsers.filter((u) => u.archived);
  const displayUsers = tabValue === 0 ? activeUsers : archivedUsers;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#E6E6E6', maxWidth: 1200, ml: "auto", p: 2  }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#305791',borderRadius:"8px" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Users List</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Paper>
          {/* Tabs and Filters */}
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Active Users" sx={{ textTransform: 'none', fontWeight: tabValue === 0 ? 600 : 400 }} />
                <Tab label="Archived Users" sx={{ textTransform: 'none', fontWeight: tabValue === 1 ? 600 : 400 }} />
              </Tabs>
              <Box display="flex" gap={1}>
                <TextField
                  size="small"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: 200 }}
                />
                <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ textTransform: 'none' }}>
                  Filter
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#305791' }}>
                  <TableCell padding="checkbox" sx={{ color: 'white' }}>
                    <Checkbox sx={{ color: 'white' }} />
                  </TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>NAME</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>E-MAIL</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>PHONE NUMBER</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>DATE</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>EVENTS</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>PHOTOS</TableCell>
                  {tabValue === 1 ? (
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>RESTORE</TableCell>
                  ) : (
                    <>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>EDIT</TableCell>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>MORE</TableCell>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayUsers.map((user) => (
                  <TableRow key={user.id} hover   onClick={()=>{navigate("/userDetail")}}>
                    <TableCell padding="checkbox">
                      <Checkbox sx={{ color: '#4a69bd' }} />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ bgcolor: '#4a69bd' }}>{user.avatar}</Avatar>
                        <Typography fontWeight={500}>{user.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.date}</TableCell>
                    <TableCell>
                      <Chip label={user.events} size="small" sx={{ bgcolor: '#e8f4fd', color: '#1976d2' }} />
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight={500}>{user.photos.toLocaleString()}</Typography>
                    </TableCell>
                    {tabValue === 1 ? (
                      <TableCell>
                        <IconButton size="small" sx={{ bgcolor: '#4a69bd', color: '#fff' }}>
                          <RestoreIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell>
                          <IconButton size="small" sx={{ bgcolor: '#4a69bd', color: '#fff' }}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" sx={{ bgcolor: '#4a69bd', color: '#fff' }}>
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer */}
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <Typography variant="body2" color="text.secondary">
              Showing {displayUsers.length} of {users.length} users
            </Typography>
            <Button variant="text" sx={{ textTransform: 'none', color: '#4a69bd', fontWeight: 500 }}>
              Next &gt;
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
