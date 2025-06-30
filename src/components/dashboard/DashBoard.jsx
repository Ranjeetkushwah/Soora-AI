import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import {   Card,
  CardContent, IconButton,Avatar} from "@mui/material";
import { ArrowBack as ArrowBackIcon} from "@mui/icons-material";
import Allimages from "../../assets";

const statCards = [
  { label: "Events", count: 204, icon: `${Allimages.EventsIcon}` },
  { label: "Media Managers", count: 125, icon: `${Allimages.IdentificationBadge}` },
  { label: "Users", count: 1250, icon: `${Allimages.UserFocusFill}` },
  { label: "Subscriptions", count: 125, icon: `${Allimages.ReceiptFill}` },
];

const tableSections = [
  "Recent Events",
  "Recent Users",
  "Recent Media Managers",
  "Recent Subscriptions"
];

const rows = [
  { name: 'Athen’s Wedding', date: 'Oct 09, 2024', photos: 2000, users: 154 },
  { name: 'Sydney’s Wedding', date: 'Oct 05, 2024', photos: 3650, users: 365 },
  { name: 'Alisha’s Twentieth', date: 'Sept 20, 2024', photos: 487, users: 90 },
  { name: 'Sophia’s Bachelorette', date: 'Sept 12, 2024', photos: 230, users: 25 },
  { name: 'Shalom’s Birthday', date: 'July 09, 2024', photos: 654, users: 450 },
];

export default function DashBoard() {
      const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: '#E6E6E6',
        maxWidth: {
          xs: '100%',     // mobile
          sm: '600px',    // small screens
          md: '900px',    // medium screens
          lg: '1200px',   // large screens
          xl: '1489px'    // extra large screens
        },
        ml: 'auto',
        mr: 'auto',
        p: 2
      }}
    >
      <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }} onClick={()=>{navigate(-1)}}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
           Hello, Admin!
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 2, mt: 3 }}>
        {statCards.map(({ label, count, icon }) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "252px",
              height: "142px",
              backgroundColor: "white",
              borderRadius: 2,
              p: 2,

            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={icon} alt={label} width="36" height="36" />
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: 20, color: "#1F3A63" }}>
                {label}
              </Typography>
            </Box>
            <Typography sx={{ fontFamily: 'Waylimo, sans-serif', fontSize: 42, color: "#1F3A63" }}>
              {count}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mt: 4, gap: 2 }}>
        {tableSections.map((section) => (
          <Box key={section} sx={{ width: "528px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, width: "93%" }}>
              <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 24, color: "#1F3A63" }}>
                {section}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 16, color: "#1F3A63" }}>
                View All
              </Typography>
            </Box>
            <Box sx={{ px: 2 }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#1F3A63" }}>
                    <TableRow>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Date</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Photos</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Users</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.photos}</TableCell>
                        <TableCell align="right">{row.users}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
