import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  Grid,
} from '@mui/material';

const testimonials = [
  {
    id: 1,
    text: "I found photos from my friend’s wedding in minutes! It’s amazing!",
    name: "David Mooray",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bgColor: "#1F3A63",
    textColor: "#ffffff"
  },
  {
    id: 2,
    text: "I found photos from my friend’s wedding in minutes! It’s amazing!",
    name: "Jessica Joel",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    bgColor: "#FFEDDC",
    textColor: "#1F3A63"
  },
  {
    id: 3,
    text: "I found photos from my friend’s wedding in minutes! It’s amazing!",
    name: "Kenny Peterson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    bgColor: "#1F3A63",
    textColor: "#ffffff"
  },
  {
    id: 4,
    text: "It was super easy to find my event photos using Soora!",
    name: "Alisha Grey",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "#FFEDDC",
    textColor: "#1F3A63"
  },
  {
    id: 5,
    text: "Highly recommend this app for anyone attending big events.",
    name: "Robert Lane",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    bgColor: "#1F3A63",
    textColor: "#ffffff"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [total]);

  return (
    <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
                   fontFamily: "Waylimo",
                                fontWeight:400,
              color: '#1F3A63',
              mb: 2
            }}
          >
            What our Attendees & Media b<br/> Manager’s say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#44577c',
              maxWidth: 600
            }}
          >
            Don’t just take our word for it! Here’s what our users have to say about their experiences
          </Typography>
        </Box>

        {/* Active Testimonial */}
        <Box
          sx={{
            maxWidth: 500,
            mx: 'auto',
            position: 'relative',
            backgroundColor: testimonials[currentIndex].bgColor,
            color: testimonials[currentIndex].textColor,
            borderRadius: '12px',
            px: 3,
            py: 5,
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
            transition: 'all 0.5s ease-in-out'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 4
            }}
          >
            “{testimonials[currentIndex].text}”
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {testimonials[currentIndex].name}
            </Typography>
            <Avatar
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              sx={{
                width: 50,
                height: 50,
                border: '3px solid white',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              }}
            />
          </Box>
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 5 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                cursor: 'pointer',
                backgroundColor: index === currentIndex ? '#1F3A63' : '#d6d6d6',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;

