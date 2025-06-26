import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

import PublishIcon from '@mui/icons-material/CloudUpload'; // You can replace this with a logo/icon

export default function PublishEventDialog({ open, onClose, onPublish, eventName }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 4,
          textAlign: 'center',
          p: 3,
        }
      }}
    >
        <Box sx={{ textAlign: "center" }}>
                       <img
                         src="/src/assets/soora-icon-dark-blue.svg"
                         alt="Soora"
                         width={150}
                         height={70}
                       />
                     </Box>
      <DialogTitle sx={{ fontWeight: 'bold', color: '#1F3A63' }}>
        Publish Event
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" sx={{ color: '#1F3A63', mt: 1 }}>
          Are you sure you want to upload <br />
          photos to the event <strong>“{eventName}”</strong>
        </Typography>
      </DialogContent>

      <DialogActions sx={{ flexDirection: 'column', gap: 1.5, px: 4, pb: 3 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1F3A63',
            color: '#fff',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            py: 1.2,
            '&:hover': {
              backgroundColor: '#17305B'
            }
          }}
          onClick={onPublish}
        >
          Publish Event
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: '#1F3A63',
            borderColor: '#1F3A63',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            py: 1.2,
            '&:hover': {
              borderColor: '#1F3A63',
              backgroundColor: 'rgba(31, 58, 99, 0.05)'
            }
          }}
          onClick={onClose}
        >
          Save for later
        </Button>
      </DialogActions>
    </Dialog>
  );
}
