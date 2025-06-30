import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import AppSidebar from "./components/header/AppSidebar";
import AppRoutes from "./AppRoutes";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, Link, Button } from "@mui/material";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function Layout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => { return false });


  const hideLayoutPaths = ["/login", "/signup"];

  const isAuthPage = hideLayoutPaths.includes(location.pathname);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#E6E6E6",
      }}
    >
      {/* Header */}
      {!isAuthPage && (
        <Box sx={{ flexShrink: 0 }}>
          {isLoggedIn ? (
            <Header
              onToggleSidebar={() => setCollapsed((prev) => !prev)}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <PublicHeader setIsLoggedIn={setIsLoggedIn} />
          )}
        </Box>
      )}

      {/* Content + Sidebar */}
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar only if logged in */}
        {isLoggedIn && !isAuthPage && <AppSidebar collapsed={collapsed} />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            px: 0,
            py: 0,
            backgroundColor: "#f5f5f5",
          }}
        >
          <AppRoutes setIsLoggedIn={setIsLoggedIn} />
        </Box>
      </Box>

      {/* Footer (optional on login or public pages) */}
      {!isAuthPage && <Footer />}
    </Box>
  );
}



{/*// here is a PublicHeader for new users*/ }

import Allimages from './assets'
const PublicHeader = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "About Us", path: "/aboutus" },
    { label: "Privacy Policy", path: "#privacy-policy" },
  ];

  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path) => {
    setMobileOpen(false);
    if (path.startsWith("#")) {
      window.location.hash = path;
    } else {
      navigate(path);
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2 }}>
        <Box
          component="img"
          src={Allimages.SooraLogoWhite}
          alt="Logo"
          sx={{ height: 32, width: 150, cursor: "pointer" }}
          onClick={() => handleNavigate("/")}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleNavigate(item.path)}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, display: "flex", gap: 2 }}>
        <Button
          variant="text"
          fullWidth
          sx={{ color: "#1F3A63" }}
          onClick={() => handleNavigate("/signup")}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#1F3A63",
            color: "#FFFFFF",
            textTransform: "none",
          }}
          onClick={() => handleNavigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1F3A63" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
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

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                color="inherit"
                underline="hover"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  cursor: "pointer",
                  "&:focus": {
                    fontWeight: "900",
                    color: "white",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Desktop Buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{ color: "#FFFFFF", bgcolor: "transparent" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
            <Button
              sx={{
                bgcolor: "#FFFFFF",
                color: "#1F3A63",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#FFFFFF",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};


