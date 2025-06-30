import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FQAforSubcription = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'Can I change my Subscription Plan ?',
      answer:
        'Yes, you can easily change your subscription plan at any time. Simply follow these steps: Log in to your account and navigate to the Profile Settings or Subscription section. Select the Change Plan option. Choose your new desired subscription plan from the available options. Follow the prompts to confirm your changes.',
    },
    {
      id: 'panel2',
      question: 'What Payment methods do you accept ?',
      answer:
        'Yes, your data security is our top priority. We use industry-standard encryption and security measures to protect your personal information and photos. Your data is never shared with third parties without your explicit consent.',
    },
    {
      id: 'panel3',
      question: 'Is there a Free Trial ?',
      answer:
        'You can search for photos from events that have been uploaded to our platform by event organizers or photographers. We work with a wide network of event professionals to ensure comprehensive coverage.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        bgcolor: '#E6E6E6',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: '#2c5282',
            fontFamily: 'Waylimo',
            fontWeight: 400,
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
            mb: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#1F3A63',
            fontFamily: 'Poppins',
            fontWeight: 400,
            maxWidth: { xs: '100%', md: '600px' },
            fontSize: { xs: '1rem', sm: '1.2rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Here are some common questions to help you understand <br /> our platform
          better
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              mb: 2,
              backgroundColor: '#2c5282',
              color: 'white',
              borderRadius: '8px !important',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                margin: '0 0 16px 0',
              },
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    p: 0.5,
                    fontSize: '1.5rem',
                  }}
                />
              }
              sx={{
                backgroundColor: '#2c5282',
                color: 'white',
                borderRadius: '8px',
                minHeight: '64px',
                '&.Mui-expanded': {
                  minHeight: '64px',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0',
                },
                '& .MuiAccordionSummary-content.Mui-expanded': {
                  margin: '12px 0',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#34495e',
                color: 'white',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                pt: 2,
                pb: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FQAforSubcription;
