import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
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

export default function AppSidebar({

  collapsed }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Media Managers', path: '/media-manager' },
    { label: 'Events', path: '/events' },
    { label: 'Users', path: '/userslist' },
    { label: 'Subscriptions', path: '/subscriptions' },
    { label: 'Transaction Logs', path: '/transaction-logs' }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 72 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? 72 : 240,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100vh - 128px)', // 64px header + 64px footer
          transition: 'width 0.3s',
          overflow: 'hidden',
          alignItems: "center"
        },

      }}
    >

      <List>
        {menuItems.map((item) => (
          <Tooltip title={collapsed ? item.label : ''} placement="right" key={item.label}>
            <ListItem
              onClick={() => navigate(item.path)}
              sx={{
                mb: 0.5,
                borderRadius: 1,
                mx: 1,

                justifyContent: collapsed ? 'center' : 'flex-start',
                '&:hover': {
                  backgroundColor: '#305791',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: '#666', minWidth: collapsed ? 'auto' : 40, justifyContent: 'center' }}>
                {getIcon(item.label)}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                  }}
                />
              )}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}

