import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1F3A63',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        py: 2,
        fontSize: '14px',
      }}
    >
      <Typography variant="body2">
        © 2024 Soora. All Rights Reserved.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, fontWeight: 700, fontFamily: "Poppins" }}>

        <Link href="#" underline="hover" color="inherit">
          Terms & Conditions
        </Link>
      </Box>
    </Box>
  );
}
