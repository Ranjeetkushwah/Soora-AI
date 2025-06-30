
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Chip,
  IconButton,
  Typography,
  Box,
  TablePagination,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
   Card,
  CardContent,
    Avatar,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  NavigateNext as NextIcon,
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const mockData= [
  {
    id: '1052634578',
    subscriberName: 'PixelCurator',
    subscriptionPlan: 'Basic Plan',
    purchasedOn: 'Oct 09, 2024 at 10:24pm',
    amountPaid: 0,
    paymentMode: 'Debit Card',
    status: 'Active',
  },
  {
    id: '1052634578',
    subscriberName: 'EventLensPro',
    subscriptionPlan: 'Advance Plan',
    purchasedOn: 'Oct 09, 2024',
    amountPaid: 250,
    paymentMode: 'Cash',
    status: 'Active',
  },
  {
    id: '1052634578',
    subscriberName: 'GalleryMaster',
    subscriptionPlan: 'Basic Plan',
    purchasedOn: 'Sept 20, 2024',
    amountPaid: 0,
    paymentMode: 'Credit Card',
    status: 'Exhausted',
  },
  {
    id: '1052634578',
    subscriberName: 'MomentManager',
    subscriptionPlan: 'Standard Plan',
    purchasedOn: 'Sept 12, 2024',
    amountPaid: 150,
    paymentMode: 'Cash',
    status: 'Active',
  },
  {
    id: '1052634578',
    subscriberName: 'PhotoVaultAdmin',
    subscriptionPlan: 'Basic Plan',
    purchasedOn: 'Sept 07, 2024',
    amountPaid: 0,
    paymentMode: 'Credit Card',
    status: 'Active',
  },
  {
    id: '1952634578',
    subscriberName: 'PhotoOrganizerPro',
    subscriptionPlan: 'Basic Plan',
    purchasedOn: 'Aug 28, 2024',
    amountPaid: 0,
    paymentMode: 'Credit Card',
    status: 'Expired',
  },
  {
    id: '1952634578',
    subscriberName: 'EventSnapMaster',
    subscriptionPlan: 'Standard Plan',
    purchasedOn: 'Aug 15, 2024',
    amountPaid: 160,
    paymentMode: 'Debit Card',
    status: 'Exhausted',
  },
  {
    id: '1952634578',
    subscriberName: 'ShotKeeper',
    subscriptionPlan: 'Advance Plan',
    purchasedOn: 'Aug 10, 2024',
    amountPaid: 250,
    paymentMode: 'Debit Card',
    status: 'Exhausted',
  },
  {
    id: '1952634578',
    subscriberName: 'FrameFocusAdmin',
    subscriptionPlan: 'Advance Plan',
    purchasedOn: 'July 18, 2024',
    amountPaid: 250,
    paymentMode: 'Credit Card',
    status: 'Active',
  },
  {
    id: '1952634578',
    subscriberName: 'VisualArchivePro',
    subscriptionPlan: 'Standard Plan',
    purchasedOn: 'July 09, 2024',
    amountPaid: 160,
    paymentMode: 'Credit Card',
    status: 'Expired',
  },
];

const TransactionLogs= () => {
  const [data] = useState(mockData);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
    const navigate = useNavigate();

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
    handleFilterClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Expired':
        return 'error';
      case 'Exhausted':
        return 'warning';
      default:
        return 'default';
    }
  };

  const filteredData = statusFilter === 'all' 
    ? data 
    : data.filter(item => item.status.toLowerCase() === statusFilter.toLowerCase());

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box
      sx={{
        bgcolor: '#E6E6E6',
        width: '100%',
        maxWidth: {
          xs: '100%',    // mobile
          sm: '600px',   // small screens
          md: '900px',   // medium screens
          lg: '1200px',  // large screens
          xl: '1489px'   // extra-large screens
        },
        mx: 'auto',            // center horizontally
        p: { xs: 1, sm: 2, md: 3 }
      }}
    >
 <Card sx={{ mb: 2, bgcolor: '#305791', color: 'white' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white' }}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar
              // src="./src/assests/27622444-f8e8-4432-a69e-1ad54b970776.png"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="h1">
              Transaction Logs
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
       
        <Box sx={{ display: 'flex', gap: 1 }}>
         
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none',bgcolor:"#305791" }}
            onClick={()=>{navigate("/subscriptions/add")}}
          >
            Add Subscription
          </Button>
        </Box>
         {/* <IconButton >
            <FilterIcon />
          </IconButton> */}

          <Button  onClick={handleFilterClick} variant="outlined" startIcon={<FilterIcon />} sx={{ minWidth: 100,color:"primary" }}>
                    Filter
                  </Button>
      </Box>

      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={handleFilterClose}
      >
        <Box sx={{ p: 2, minWidth: 200 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Status Filter</InputLabel>
            <Select
              value={statusFilter}
              label="Status Filter"
              onChange={handleStatusFilterChange}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="expired">Expired</MenuItem>
              <MenuItem value="exhausted">Exhausted</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Menu>

      <TableContainer component={Paper} elevation={1}>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>TRANSACTION ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>SUBSCRIBER'S NAME</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>SUBSCRIPTION PLAN</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>PURCHASED ON</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>AMOUNT PAID ($)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>PAYMENT MODE</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={`${row.id}-${row.subscriberName}`}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.subscriberName}</TableCell>
                    <TableCell>{row.subscriptionPlan}</TableCell>
                    <TableCell>{row.purchasedOn}</TableCell>
                    <TableCell>{row.amountPaid}</TableCell>
                    <TableCell>{row.paymentMode}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                        variant="filled"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Showing 1 to {Math.min(rowsPerPage, filteredData.length)} events of {filteredData.length} events
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={() => ''}
            sx={{ 
              '.MuiTablePagination-toolbar': { 
                minHeight: 'auto',
                paddingLeft: 0,
                paddingRight: 0,
              },
              '.MuiTablePagination-selectLabel': { display: 'none' },
              '.MuiTablePagination-displayedRows': { display: 'none' },
            }}
          />
          <Button
            variant="outlined"
            endIcon={<NextIcon />}
            size="small"
            sx={{ textTransform: 'none' }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionLogs;