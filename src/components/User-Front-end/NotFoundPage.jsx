import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Allimages from "../../assets";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // p: 3,
      }}
    >
      <Box
        component="img"
        src={Allimages.SooraIconDarkBlue}
        alt="Page Not Found"
        sx={{
          width: "100%",
          maxWidth: "200px",
          height: "auto",
          mb: 4,
        }}
      />
      <Typography
        variant="h2"
        sx={{ color: "#1F3A63", fontWeight: "bold", mb: 2, textAlign: "center" }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "#333", mb: 4, textAlign: "center" }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#1F3A63" }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
