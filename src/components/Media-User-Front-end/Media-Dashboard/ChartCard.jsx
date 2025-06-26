import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import {
  Event as CalendarIcon,
  People as UsersIcon,
  CameraAlt as CameraIcon
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';



const ChartCard= ({ title, value, icon, data }) => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2,width:'343px'}}>
          {getIcon()}
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#6b7280' }}>
            {title}
          </Typography>
        </Box>
        
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
          {value}
        </Typography>

        <Box sx={{ height: 128 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="value" 
                fill="#3B82F6" 
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};



export default ChartCard;
