import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ArrowBack,
  Lock,
  Visibility,
  VisibilityOff,
  FiberManualRecord,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handlePasswordChange = (field) => (event) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleTogglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
    const navigate = useNavigate();

  const handleBack = () => {
    // Handle back navigation
navigate(-1)
  };

  const handleChangePassword = () => {
    // Handle password change
    console.log("Change password clicked", passwords);
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log("Forgot password clicked");
  };

  const passwordRequirements = [
    "Be at least 8 characters long",
    "Contain at least one Uppercase letter",
    "Contain at least one Lowercase letter",
    "Contain at least One Number",
    "Contain at least one Special character",
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Back Button */}
          <Box sx={{ mb: 3 }}>
            <IconButton
                onClick={handleBack}
                sx={{
                backgroundColor: "#1F3A63",
                color:"white",
                "&:hover": { backgroundColor: "#e0e0e0" },
                p: 1,
              }}
            >
              <ArrowBack />
            </IconButton>
          </Box>

          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
              
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <img src="./src/assets/soora-icon-dark-blue.svg" alt="" height="48px" width="48px" />
            </Box>
            <Typography variant="h5" fontWeight="600" color="#1F3A63">
              Create a new password
            </Typography>
          </Box>

          {/* Password Fields */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              type={showPassword.current ? "text" : "password"}
              placeholder="Current Password"
              value={passwords.current}
              onChange={handlePasswordChange("current")}
              sx={{ mb: 2,borderColor:"#1F3A63" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="./src/assets/icons/key.svg" alt="key" height="16px" width="16px" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleTogglePasswordVisibility("current")}
                      edge="end"
                    >
                      {showPassword.current ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              type={showPassword.new ? "text" : "password"}
              placeholder="New Password"
              value={passwords.new}
              onChange={handlePasswordChange("new")}
              sx={{ mb: 2,borderColor:"#1F3A63" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="./src/assets/icons/key.svg" alt="key" height="16px" width="16px" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleTogglePasswordVisibility("new")}
                      edge="end"
                    >
                      {showPassword.new ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              type={showPassword.confirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={passwords.confirm}
              onChange={handlePasswordChange("confirm")}
              sx={{ mb: 2,borderColor:"#1F3A63" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="./src/assets/icons/key.svg" alt="key" height="16px" width="16px" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleTogglePasswordVisibility("confirm")}
                      edge="end"
                    >
                      {showPassword.confirm ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Password Requirements */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" fontWeight="600" sx={{ mb: 1,color:"#305791" }}>
              Password must:
            </Typography>
            <List dense sx={{ py: 0 }}>
              {passwordRequirements.map((requirement, index) => (
                <ListItem key={index} sx={{ py: 0, px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 20 }}>
                    <FiberManualRecord sx={{ fontSize: 6, color: "#666" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={requirement}
                    primaryTypographyProps={{
                      fontSize: "0.75rem",
                      color: "#305791",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Link
              component="button"
              variant="body2"
              onClick={handleForgotPassword}
              sx={{
                color: "#1F3A63",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Link>
          </Box>

          {/* Change Password Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleChangePassword}
            sx={{
              backgroundColor: "#1F3A63",
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "600",
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Change Password
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateNewPassword;
