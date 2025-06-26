import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Grid,
  IconButton,
  Divider,
  Card,
  CardMedia,
  Checkbox
} from "@mui/material";
import { CloudUpload, MoreVert } from "@mui/icons-material";

export default function UploadPhotos() {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#1F3A63",
          color: "#fff",
          p: 2,
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="h6">Upload Photos</Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "#38598b", textTransform: "none" }}
        >
          Remaining Photos : 50
        </Button>
      </Box>

      {/* Event Details */}
      <Paper sx={{ p: 2, my: 2, borderRadius: "8px" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Event Details
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          <strong>Event ID :</strong> 01256
        </Typography>
        <Typography>
          <strong>Event Title :</strong>{" "}
          <span style={{ color: "#1F3A63", fontWeight: "500" }}>
            Athen's Wedding
          </span>
        </Typography>
      </Paper>

      {/* Image Size and Type */}
      <Paper
        sx={{
          p: 2,
          my: 2,
          borderRadius: "8px",
          backgroundColor: "#fff4e5"
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Image Size and Type
        </Typography>
        <Typography>
          <strong>Supported Image Type :</strong> JPG; PNG;
        </Typography>
        <Typography>
          <strong>Max. Image Size :</strong> 10 MB
        </Typography>
        <Typography>
          <strong>Image Dimensions :</strong> 2000 Pixels{" "}
          <span style={{ color: "#999" }}>(Recommended)</span>
        </Typography>
        <Typography>
          <strong>Min. Image Dimensions :</strong> 800 Pixels
        </Typography>
        <Typography>
          <strong>Max. Image Dimensions :</strong> 20000 Pixels
        </Typography>
      </Paper>

      {/* Upload Photos */}
      <Paper sx={{ p: 2, my: 2, borderRadius: "8px" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Upload Folders/Photos{" "}
          <span style={{ color: "#999", fontSize: "14px" }}>
            (4 Folders and 8 Photos)
          </span>
        </Typography>
        <Grid container spacing={2}>
          {/* Upload Button */}
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: "8px",
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CloudUpload sx={{ fontSize: 40, color: "#999" }} />
              <Typography sx={{ mt: 1, fontSize: "14px" }}>
                Upload Folders/Photos
              </Typography>
            </Box>
          </Grid>

          {/* Example Uploaded Images */}
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={6} sm={3} key={item}>
              <Card sx={{ position: "relative" }}>
                <Checkbox
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "50%"
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.4)"
                  }}
                >
                  <MoreVert />
                </IconButton>
                <CardMedia
                  component="img"
                  height="150"
                  image={`https://source.unsplash.com/200x200/?wedding,${item}`}
                  alt="Uploaded Image"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
