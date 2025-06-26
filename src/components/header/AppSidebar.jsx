import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  LayoutDashboard,
  Users,
  Calendar,
  User,
  CreditCard,
  FileText,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

// Icon mapping for menu items
const getIcon = (label) => {
  const iconMap = {
    'Dashboard': <LayoutDashboard size={20} />,
    'Media Managers': <User size={20} />,
    'Events': <Calendar size={20} />,
    'Users': <Users size={20} />,
    'Subscriptions': <CreditCard size={20} />,
    'Transaction Logs': <FileText size={20} />
  };
  return iconMap[label] || <LayoutDashboard size={20} />;
};

export default function AppSidebar({ open, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Media Managers', path: '/media-manager' },
    { label: 'Events', path: '/events' },
    { label: 'Users', path: '/userslist' },
    { label: 'Subscriptions', path: '/subscriptions' },
    { label: 'Transaction Logs', path: '/transaction-logs' }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    onClose(); // Close the drawer after navigation
  };

  const drawerList = (
    <Box
      sx={{ width: drawerWidth, pt: 2 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {/* Optional: Add a header/logo section */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1F3A63' }}>
      Soora
        </Typography>
      </Box>
      
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.label}
            sx={{
              mb: 0.5,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#305791',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white'
                }
              },
              cursor: 'pointer'
            }}
            onClick={() => handleMenuClick(item.path)}
          >
            <ListItemIcon sx={{ minWidth: 40, color: '#666' }}>
              {getIcon(item.label)}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '14px'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {drawerList}
    </Drawer>
  );
}