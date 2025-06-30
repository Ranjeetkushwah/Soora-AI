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
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Allimages from "../../assets";


export default function UploadPhotos() {

  const navigate = useNavigate();

  const promoImages = [
    {
      id: 1,
      src: `${Allimages.EngageMentPhotoHand}`,
      alt: 'EngageMentPhotoHand'
    },
    {
      id: 2,
      src: `${Allimages.EngageMentEvent}`,
      alt: 'EngageMentEvent'
    },
    {
      id: 3,
      src: `${Allimages.Gifts}`,
      alt: 'Gifts'
    }
  ];
  return (
    <Container maxWidth="1489px" sx={{ my: 4 }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton sx={{ color: 'white' }} onClick={() => { navigate(-1) }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Upload Photos</Typography>
        </Box>

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
          <Grid >
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
                alignItems: "center",
                position: "relative"
              }}
            >
              {/* Hidden file input */}
              <input
                type="file"
                multiple
                onChange={(event) => console.log(event.target.files)}
                style={{ display: "none" }}
                id="upload-button"
              />

              {/* Label styled as clickable box */}
              <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
                <CloudUpload sx={{ fontSize: 40, color: "#999" }} />
                <Typography sx={{ mt: 1, fontSize: "14px" }}>
                  Upload Folders/Photos
                </Typography>
              </label>
            </Box>

          </Grid>


          {promoImages.map((item) => (
            <Grid key={item}>
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
                  image={item.src}
                  alt={item.alt}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
