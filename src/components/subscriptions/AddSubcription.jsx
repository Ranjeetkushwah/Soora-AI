import {
  Box,
  Container,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  Card,
  CardContent
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function AddSubscription() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#E6E6E6', maxWidth: 1200, ml: "auto", p: 2 }}>
      <Container >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: '#305791',
            borderRadius: 1,
            mb: 3,
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            Add Subscription
          </Typography>
        </Box>

        {/* Form */}
        <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'white' }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Choose Media Manager</InputLabel>
            <Select label="Choose Media Manager" defaultValue="">
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="manager1">Manager 1</MenuItem>
              <MenuItem value="manager2">Manager 2</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Subscription Plan</InputLabel>
              <Select label="Subscription Plan" defaultValue="">
                <MenuItem value="">Choose Plan</MenuItem>
                <MenuItem value="basic">Basic Plan</MenuItem>
                <MenuItem value="standard">Standard Plan</MenuItem>
                <MenuItem value="premium">Premium Plan</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Photo Credits"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">x</InputAdornment>,
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Subscription Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Subscription End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Subscription Amount"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">x</InputAdornment>,
              }}
            />
            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select label="Payment Method" defaultValue="">
                <MenuItem value="">Choose Payment Method</MenuItem>
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="bank">Bank Transfer</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#305791',
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#1d426f',
              },
            }}
          >
            Add Subscription
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
