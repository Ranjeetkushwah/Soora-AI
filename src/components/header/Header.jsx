import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LogOut } from 'lucide-react';
import AppSidebar from './AppSidebar';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = React.useState(false);

  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOutClick = () => {
    setLogoutDialogOpen(true);
    handleProfileMenuClose();
  };

  const handleLogOut = () => {
    setLogoutDialogOpen(false);
    // Perform logout logic here
    navigate('/login');
  };

  const handleCancel = () => {
    setLogoutDialogOpen(false);
     navigate('/dashboard');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1F3A63' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
            <img src="./src/assets/white-01 1.svg" alt="Logo" height="32px" width="150px" />
          </Box>

          <Box>
            <img
              src="./src/assets/icons/Profile Button.svg"
              alt="Profile"
              height="32px"
              width="28px"
              style={{ cursor: 'pointer' }}
              onClick={handleProfileMenuOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <AppSidebar open={drawerOpen} onClose={toggleDrawer(false)} />

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleProfileMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 240, borderRadius: 2, padding: 1 },
        }}
      >
        <Box px={2} py={1}>
          <Typography sx={{ fontWeight: 'bold', color: '#1F3A63' }}>Ranjeet Kushwah</Typography>
          <Typography sx={{ fontSize: '14px', color: '#9E9E9E' }}>R.kushwah@braininventory.com</Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <MenuItem onClick={() => navigate('/profile')} sx={{ fontWeight: 500, color: '#1F3A63' }}>
          Your profile
        </MenuItem>
        <MenuItem onClick={() => navigate('/changepassword')} sx={{ fontWeight: 500, color: '#1F3A63' }}>
          Change Password
        </MenuItem>
        <MenuItem onClick={() => navigate('/manage-payments')} sx={{ fontWeight: 500, color: '#1F3A63' }}>
       Manage Payments
        </MenuItem>

        <Divider sx={{ my: 1 }} />

        <MenuItem onClick={handleLogOutClick} sx={{ fontWeight: 500, color: '#1F3A63' }}>
          Log Out
        </MenuItem>
      </Menu>

      {/* Log Out Confirmation Dialog */}
      <Dialog
        open={logoutDialogOpen}
        onClose={handleCancel}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 2,
            maxWidth: 400,
          },
        }}
      >
        <DialogContent sx={{ textAlign: 'center', pt: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: '#1F3A63',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <LogOut size={28} color="white" />
              <Box
                sx={{
                  position: 'absolute',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: '2px solid #1F3A63',
                  opacity: 0.3,
                }}
              />
            </Box>
          </Box>

          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1F3A63', mb: 2 }}>
            Log Out
          </Typography>
          <Typography variant="body1" sx={{ color: '#1F3A63', fontWeight: 'bold', mb: 3 }}>
            Are you sure you want to log out?
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{ flexDirection: 'column', gap: 1, px: 3, pb: 3 }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogOut}
            sx={{
              backgroundColor: '#1F3A63',
              color: 'white',
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#1F3A68',
              },
            }}
          >
            Log Out
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleCancel}
            sx={{
              color: '#1F3A63',
              borderColor: '#1F3A63',
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#1F3A63',
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Avatar,
//   Box,
//   Divider,
//   useMediaQuery
// } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
// import { User, LogOut, HelpCircle, AlertTriangle } from "lucide-react";

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
//   const handleProfileClose = () => setAnchorEl(null);
//   const handleLogOutClick = () => {
//     setLogoutDialogOpen(true);
//     handleProfileClose();
//   };
//   const handleLogOut = () => {
//     setLogoutDialogOpen(false);
//     setIsLoggedIn(false);
//   };
//   const handleCancel = () => setLogoutDialogOpen(false);
//   const handleLogin = () => setIsLoggedIn(true);

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: "#1F3A63" }}>
//         <Toolbar>
//           {isLoggedIn && (
//             <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//           )}

//           <Box sx={{ flexGrow: 1 }}>
//             <img
//               src="/api/placeholder/150/32"
//               alt="Soora Logo"
//               style={{ height: 32 }}
//             />
//           </Box>

//           {!isLoggedIn ? (
//             <Box sx={{ display: 'flex', gap: 1 }}>
//               <Button color="inherit" startIcon={<HelpCircle size={18} />}>FAQ</Button>
//               <Button color="inherit" startIcon={<AlertTriangle size={18} />}>Report</Button>
//               <Button color="inherit" variant="outlined">Sign Up</Button>
//               <Button color="secondary" variant="contained" onClick={handleLogin}>Login</Button>
//             </Box>
//           ) : (
//             <>
//               <IconButton color="inherit" onClick={handleProfileClick}>
//                 <User size={24} />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleProfileClose}
//               >
//                 <Box sx={{ px: 2, py: 1 }}>
//                   <Typography fontWeight="bold">Ranjeet Kushwah</Typography>
//                   <Typography variant="body2" color="text.secondary">R.kushwah@braininventory.com</Typography>
//                 </Box>
//                 <Divider />
//                 <MenuItem>Your profile</MenuItem>
//                 <MenuItem>Change Password</MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleLogOutClick}>Log Out</MenuItem>
//               </Menu>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250 }}>
//           <List>
//             {['Dashboard', 'Profile', 'Settings'].map((text) => (
//               <ListItem button key={text}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       <Dialog open={logoutDialogOpen} onClose={handleCancel}>
//         <DialogTitle>Log Out</DialogTitle>
//         <DialogContent>
//           <Typography variant="body1" fontWeight="bold">
//             Are you sure you want to log out?
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="contained" color="error" onClick={handleLogOut}>Log Out</Button>
//           <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Toggle button for demo */}
//       <Box position="fixed" bottom={16} right={16}>
//         <Button variant="contained" color="primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
//           Toggle: {isLoggedIn ? "Logged In" : "Logged Out"}
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default Header;
