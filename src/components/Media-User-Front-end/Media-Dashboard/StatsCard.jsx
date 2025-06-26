
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  LinearProgress
} from '@mui/material';
import {
  Event as CalendarIcon,
  People as UsersIcon,
  CameraAlt as CameraIcon
} from '@mui/icons-material';


const StatsCard= ({
  title,
  value,
  icon,
  showProgress = false,
  progressValue = 0,
  progressText,
  upgradeButton = false,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'calendar':
        return <CalendarIcon sx={{ color: '#2563eb' }} />;
      case 'users':
        return <UsersIcon sx={{ color: '#2563eb' }} />;
      case 'camera':
        return <CameraIcon sx={{ color: '#2563eb' }} />;
      default:
        return <CalendarIcon sx={{ color: '#2563eb' }} />;
    }
  };

  return (
    <Card sx={{ boxShadow: 1 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          {getIcon()}
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#6b7280' }}>
            {title}
          </Typography>
        </Box>
        
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
          {value}
        </Typography>

        {showProgress && (
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                {progressText}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>
                {progressValue}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: '#e5e7eb',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#1F3A63',
                  borderRadius: 4
                }
              }}
            />
            <Typography variant="caption" sx={{ color: '#9B1C1C', mt: 1, display: 'block' }}>
              (You're running low on your Photo Credits, upgrade your plan to keep using Soora)
            </Typography>
          </Box>
        )}

        {upgradeButton && (
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#1F3A63',
              '&:hover': { bgcolor: '#1d4ed8' },
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Upgrade Plan
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;