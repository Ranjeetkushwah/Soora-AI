import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Checkbox,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

export default function EventPhotos() {
  const folderData = [
    { title: "Engagement Photos", count: 492 },
    { title: "Wedding Mass", count: 1000 },
    { title: "Communion", count: 1000 },
    { title: "Wedding Vows", count: 1000 }
  ];

  const photoData = Array.from({ length: 8 }).map((_, i) => ({
    url: `https://source.unsplash.com/200x200/?wedding,${i}`
  }));

  return (
    <Box sx={{ mt: 4 }}>
      {/* Section Title */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        3. Event Photos{" "}
       
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Select All
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Delete
        </Button>
      </Box>

      {/* Folders */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Folders
      </Typography>
      <Grid container spacing={2}>
        {folderData.map((folder, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              sx={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden"
              }}
            >
              <Checkbox
                sx={{ position: "absolute", top: 8, left: 8, color: "#fff" }}
              />
              <CardMedia
                component="img"
                height="120"
                image={`https://source.unsplash.com/300x200/?wedding,folder${index}`}
                alt={folder.title}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  bgcolor: "#1F3A63",
                  color: "#fff",
                  width: "100%",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <Typography fontSize="14px">{folder.title}</Typography>
                <Typography fontSize="12px">{folder.count} photos</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Photos */}
      <Typography variant="subtitle1" sx={{ my: 2 }}>
        Photos
      </Typography>
      <Grid container spacing={2}>
        {photoData.map((photo, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card sx={{ position: "relative" }}>
              <Checkbox
                sx={{ position: "absolute", top: 8, left: 8, color: "#fff" }}
              />
              <CardMedia
                component="img"
                height="160"
                image={photo.url}
                alt="Photo"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
