// import React, { useState } from 'react';
// import { Box } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import Header from './components/header/header';
// import Footer from './components/footer/Footer';
// import AppSidebar from './components/header/AppSidebar';
// import AppRoutes from './AppRoutes';

// export default function Layout() {
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(true); // starts with only icons

// //  const [isLoggedIn, setIsLoggedIn] = useState(() => {
// //     // ✅ optionally check localStorage or token
// //     return false;
// //   });

//   const hideHeaderPaths = ['/login', '/signup'];
//   const shouldShowLayout = !hideHeaderPaths.includes(location.pathname);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       {shouldShowLayout && (
//         <Box sx={{ flexShrink: 0 }}>
//           <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} />
//         </Box>
//       )}

//       <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
//         {shouldShowLayout && (
//          <AppSidebar collapsed={collapsed} />
//         )}

//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             overflowY: 'auto',
//             px: 0,
//             py: 0,
//             backgroundColor: '#f5f5f5',
//           }}
//         >
//           <AppRoutes />
//         </Box>
//       </Box>

//       {shouldShowLayout && <Footer />}
//     </Box>
//   );
// }

import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import AppSidebar from "./components/header/AppSidebar";
import AppRoutes from "./AppRoutes";
import { useNavigate } from "react-router-dom";

import { AppBar, Toolbar, Box, Link, Button } from "@mui/material";

export default function Layout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // ✅ optionally check localStorage or token
    return false;
  });

  // Pages that do not need any header/sidebar/footer
  const hideLayoutPaths = ["/login", "/signup"];

  // Pages that use PublicHeader (home/landing)
//   const publicHeaderPaths = [
//     "/",
//     "/features",
//     "/pricing",
//     "/about",
//     "/privacy-policy",
//   ];

  const isAuthPage = hideLayoutPaths.includes(location.pathname);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" ,bgcolor: '#E6E6E6'}}>
      {/* Header */}
      {!isAuthPage && (
        <Box sx={{ flexShrink: 0 }}>
          {isLoggedIn ? (
            <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} setIsLoggedIn={setIsLoggedIn} />
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

{
  /*// here is a PublicHeader for new users*/
}

const PublicHeader = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1F3A63" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box 
 
  onClick={()=>{  navigate("/");}}
>
        <img
          src="/src/assets/white-01 1.svg"
          alt="Logo"
          height="32px"
          width="150px"
        />
</Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Link
             onClick={()=>{  navigate("/")}}
            color="inherit"
            underline="hover"
            sx={{
              fontFamily: "normal",
              fontWeight: 500,
              fontSize: "16px",
              "&:focus": {
                fontWeight: "900",
                fontFamily: "Poppins",
                color: "white",
              },
            }}
          >
            Home
          </Link>
          <Link
             onClick={()=>{  navigate("/features")}}
            color="inherit"
             underline="hover" 
               sx={{
              fontFamily: "normal",
              fontWeight: 500,
              fontSize: "16px",
              "&:focus": {
                fontWeight: "900",
                fontFamily: "Poppins",
                color: "white",
              },
            }}>
            Features
          </Link>
          <Link 
            onClick={()=>{  navigate("/pricing")}}
           color="inherit" underline="hover"  
            sx={{
              fontFamily: "normal",
              fontWeight: 500,
              fontSize: "16px",
              "&:focus": {
                fontWeight: "900",
                fontFamily: "Poppins",
                color: "white",
              },
            }}>
            Pricing
          </Link>
          <Link
            onClick={()=>{  navigate("/aboutus")}}
           color="inherit"
            underline="hover"
               sx={{
              fontFamily: "normal",
              fontWeight: 500,
              fontSize: "16px",
              "&:focus": {
                fontWeight: "900",
                fontFamily: "Poppins",
                color: "white",
              },
            }}>
            About Us
          </Link>
          <Link href="#privacy-policy" color="inherit" underline="hover"   sx={{
              fontFamily: "normal",
              fontWeight: 500,
              fontSize: "16px",
              "&:focus": {
                fontWeight: "900",
                fontFamily: "Poppins",
                color: "white",
              },
            }}>
            Privacy Policy
          </Link>
        </Box>
        <Box gap={2}>
          <Button
            sx={{ color: "#FFFFFF", bgcolor: "transparent" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            sx={{
              bgcolor: "#FFFFFF",
              color: "#1F3A63",
              width: "73px",
              height: "40px",
            }}
            onClick={() => {
            //   setIsLoggedIn(true); // update layout state
              navigate("/login");
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
