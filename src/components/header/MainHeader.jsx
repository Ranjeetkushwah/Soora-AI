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
import { useNavigate } from "react-router-dom";
import Allimages from '../../assets'

export default function MainHeader({ onToggleSidebar, setIsLoggedIn }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = React.useState(false);

  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);

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
    navigate('/');
    setIsLoggedIn(false);
  };

  const handleCancel = () => {
    setLogoutDialogOpen(false);
    navigate('/dashboard');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#1F3A63',
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 1, sm: 2 }, // reduce horizontal padding on small screens
            minHeight: { xs: 56, sm: 64 },
          }}
        >
          <IconButton
            sx={{ mr: 1 }}
            color="inherit"
            onClick={onToggleSidebar}
            size="large"
          >
            <MenuIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              setIsLoggedIn(false);
              navigate('/');
            }}
          >
            <Box
              component="img"
              src={Allimages.SooraLogoWhite}
              alt="Logo"
              sx={{
                height: { xs: 24, sm: 32 },
                width: { xs: 100, sm: 150 },
              }}
            />
          </Box>

          {/* Profile Icon */}
          <Box>
            <Box
              component="img"
              src={Allimages.ProfileIcon}
              alt="Profile"
              sx={{
                height: { xs: 24, sm: 32 },
                width: { xs: 20, sm: 28 },
                cursor: 'pointer',
              }}
              onClick={handleProfileMenuOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleProfileMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: 240,
            borderRadius: 2,
            padding: 1,
          },
        }}
      >
        <Box px={2} py={1}>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#1F3A63',
              fontSize: { xs: '14px', sm: '16px' },
            }}
          >
            Ranjeet Kushwah
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              color: '#9E9E9E',
            }}
          >
            R.kushwah@braininventory.com
          </Typography>
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
        <MenuItem onClick={() => navigate('/media-subcription')} sx={{ fontWeight: 500, color: '#1F3A63' }}>
          Manage Subscriptions
        </MenuItem>
        <MenuItem onClick={() => navigate('/media-dashboard')} sx={{ fontWeight: 500, color: '#1F3A63' }}>
          Manage Dashboard
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
