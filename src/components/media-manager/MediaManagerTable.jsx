import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  Menu,
  MenuItem,
 Avatar,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Edit as EditIcon,
  Archive as ArchiveIcon,
  MoreVert as MoreIcon,
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const MediaManagerTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  // const [selectedRowId, setSelectedRowId] = useState(null);

    const navigate = useNavigate();

  const [mediaManagers, setMediaManagers] = useState([
    {
      id: '1',
      name: 'PixelCurator',
      email: 'pixelcurator@example.com',
      phoneNumber: '+1 (555) 234-5678',
      events: 154,
      subscriptionPlan: 'Basic Plan',
      isSelected: false,
    },
    {
      id: '2',
      name: 'EventLensPro',
      email: 'eventlenspro@example.com',
      phoneNumber: '+44 7555 234567',
      events: 365,
      subscriptionPlan: 'Advance Plan',
      isSelected: false,
    },
    {
      id: '3',
      name: 'GalleryMaster',
      email: 'gallerymaster@example.com',
      phoneNumber: '+61 455 678 901',
      events: 90,
      subscriptionPlan: 'Basic Plan',
      isSelected: false,
    },
    {
      id: '4',
      name: 'MomentManager',
      email: 'momentmanager@example.com',
      phoneNumber: '+91 98765 43210',
      events: 25,
      subscriptionPlan: 'Standard Plan',
      isSelected: false,
    },
    {
      id: '5',
      name: 'PhotoVaultAdmin',
      email: 'photovaultadmin@example.com',
      phoneNumber: '+1 (555) 678-9012',
      events: 180,
      subscriptionPlan: 'Basic Plan',
      isSelected: true,
    },
    {
      id: '6',
      name: 'PhotoOrganizerPro',
      email: 'photoorganizerpro@example.com',
      phoneNumber: '+49 1523 456789',
      events: 225,
      subscriptionPlan: 'Basic Plan',
      isSelected: false,
    },
    {
      id: '7',
      name: 'EventSnapMaster',
      email: 'eventsnapmaster@example.com',
      phoneNumber: '+33 612 345 678',
      events: 70,
      subscriptionPlan: 'Standard Plan',
      isSelected: true,
    },
    {
      id: '8',
      name: 'ShotKeeper',
      email: 'shotkeeper@example.com',
      phoneNumber: '+1 (555) 890-1234',
      events: 60,
      subscriptionPlan: 'Advance Plan',
      isSelected: false,
    },
    {
      id: '9',
      name: 'FrameFocusAdmin',
      email: 'framefocusadmin@example.com',
      phoneNumber: '+34 612 345 678',
      events: 35,
      subscriptionPlan: 'Advance Plan',
      isSelected: false,
    },
    {
      id: '10',
      name: 'VisualArchivePro',
      email: 'visualarchivepro@example.com',
      phoneNumber: '+81 90-1234-5678',
      events: 120,
      subscriptionPlan: 'Standard Plan',
      isSelected: false,
    },
  ]);

  const [archivedManagers] = useState([
    {
      id: 'a1',
      name: 'OldPhotoManager',
      email: 'oldphoto@example.com',
      phoneNumber: '+1 (555) 111-2222',
      events: 15,
      subscriptionPlan: 'Standard Plan',
      isSelected: false,
    },
    {
      id: 'a2',
      name: 'RetiredSnapMaster',
      email: 'retiredsnap@example.com',
      phoneNumber: '+1 (555) 333-4444',
      events: 8,
      subscriptionPlan: 'Basic Plan',
      isSelected: false,
    },
    {
      id: 'a1',
      name: 'OldPhotoManager',
      email: 'oldphoto@example.com',
      phoneNumber: '+1 (555) 111-2222',
      events: 15,
      subscriptionPlan: 'Standard Plan',
      isSelected: false,
    },
    {
      id: 'a2',
      name: 'RetiredSnapMaster',
      email: 'retiredsnap@example.com',
      phoneNumber: '+1 (555) 333-4444',
      events: 8,
      subscriptionPlan: 'Basic Plan',
      isSelected: false,
    }
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCheckboxChange = (id) => {
    const managers = activeTab === 0 ? mediaManagers : archivedManagers;
    const updated = managers.map(manager =>
      manager.id === id ? { ...manager, isSelected: !manager.isSelected } : manager
    );
    if (activeTab === 0) {
      setMediaManagers(updated);
    } else {
      // Archived managers are static in this version; setState only if needed
    }
  };

  const handleMenuClick = (event, 
    // id
  ) => {
    setAnchorEl(event.currentTarget);
    // setSelectedRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // setSelectedRowId(null);
  };

  const getSubscriptionChipColor = (plan) => {
    switch (plan) {
      case 'Basic Plan':
        return 'primary';
      case 'Standard Plan':
        return 'warning';
      case 'Advance Plan':
        return 'success';
      default:
        return 'default';
    }
  };

  const filteredManagers = (activeTab === 0 ? mediaManagers : archivedManagers).filter(manager =>
    manager.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: '#E6E6E6', maxWidth: "1489px", ml: "auto", p: 2 }}>
      <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white',
     
       }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }}   onClick={()=>{navigate(-1)}}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
              Media Manager’s List
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Header Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2,display: 'flex',justifyContent:'space-between',alignItems: 'center', }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Active Media Managers" />
          <Tab label="Archived Media Managers" />
        </Tabs>

          {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center',marginRight:"20px" }}>
        <TextField
          placeholder="Search"
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
        <Button variant="outlined" startIcon={<FilterIcon />} sx={{ minWidth: 100 }}>
          Filter
        </Button>
      </Box>
      </Box>

    

      {/* Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#305791' }}>
              <TableCell padding="checkbox">
                <Checkbox sx={{ color: 'white' }} />
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>NAME</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>E-MAIL</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>PHONE NUMBER</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>EVENTS</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>SUBSCRIPTION PLAN</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>EDIT</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ARCHIVE</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>MORE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredManagers.map((manager, index) => (
              <TableRow
                key={manager.id}
                sx={{
                  bgcolor: index % 2 === 0 ? '#f5f5f5' : 'white',
                  '&:hover': { bgcolor: '#e3f2fd' },
                }}
                 onClick={()=>{navigate("/media-manager/1")}}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={manager.isSelected}
                    onChange={() => handleCheckboxChange(manager.id)}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{manager.name}</TableCell>
                <TableCell sx={{ color: '#1976d2' }}>{manager.email}</TableCell>
                <TableCell>{manager.phoneNumber}</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{manager.events}</TableCell>
                <TableCell>
                  <Chip
                    label={manager.subscriptionPlan}
                    color={getSubscriptionChipColor(manager.subscriptionPlan)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ bgcolor: '#1976d2', color: 'white' }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ bgcolor: '#1976d2', color: 'white' }}>
                    <ArchiveIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    sx={{ bgcolor: '#1976d2', color: 'white' }}
                    onClick={(e) => handleMenuClick(e, manager.id)}
                  >
                    <MoreIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, py: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Showing {filteredManagers.length} of {activeTab === 0 ? mediaManagers.length : archivedManagers.length}
        </Typography>
        <Button variant="outlined" size="small">
          Next &gt;
        </Button>
      </Box>

      {/* More Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Send Message</MenuItem>
        <MenuItem onClick={handleMenuClose}>Export Data</MenuItem>
      </Menu>
    </Box>
  );
};

export default MediaManagerTable;
