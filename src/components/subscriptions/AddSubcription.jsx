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
  CardContent,
  Avatar,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function AddSubscription() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: '#E6E6E6',
        width: '100%',
        maxWidth: {
          xs: '100%',     // mobile
          sm: '600px',    // small screens
          md: '900px',    // medium screens
          lg: '1200px',   // large screens
          xl: '1489px'    // extra large screens
        },
        mx: 'auto',
        p: { xs: 1, sm: 2, md: 3 }
      }}
    >
      {/* <Container > */}
        {/* Header */}
      <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" fontWeight="bold">
            Add Subscription
          </Typography>
          </Box>
        </CardContent>
      </Card>

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
      {/* </Container> */}
    </Box>
  );
}
