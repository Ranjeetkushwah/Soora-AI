
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'How does the face recognition work?',
      answer: 'Our platform uses cutting-edge AI face recognition technology to detect and match faces in photos with remarkable accuracy. By mapping unique facial features and comparing them to a database, the system identifies and organizes your photos quickly and securely. Privacy is a priority, ensuring all data is encrypted and handled safely, giving you full control over how your images are used.'
    },
    {
      id: 'panel2',
      question: 'Is my data safe?',
      answer: 'Yes, your data security is our top priority. We use industry-standard encryption and security measures to protect your personal information and photos. Your data is never shared with third parties without your explicit consent.'
    },
    {
      id: 'panel3',
      question: 'Can I search for photos from any event?',
      answer: 'You can search for photos from events that have been uploaded to our platform by event organizers or photographers. We work with a wide network of event professionals to ensure comprehensive coverage.'
    },
    {
      id: 'panel4',
      question: 'How do I download my photos?',
      answer: 'Once you find your photos, you can download them directly to your device. Premium users get unlimited downloads, while free users can download up to 5 photos per month.'
    },
    {
      id: 'panel5',
      question: 'What file formats are supported?',
      answer: 'We support all major image formats including JPEG, PNG, HEIC, and RAW files. Photos are typically delivered in high-resolution JPEG format for optimal quality and compatibility.'
    }
  ];

  return (
    <Box sx={{ py: 6, px: 10, bgcolor: '#E6E6E6', pl: 20 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: '#2c5282',
            fontFamily: "Waylimo",
            fontWeight: 400,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#4a5568',
            fontSize: '1.1rem',
            maxWidth: '600px'
          }}
        >
          Here are some common questions to help you understand  <br />our platform better
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1200px' }}>
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
                    fontSize: '1.5rem'
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
                  fontSize: '1.1rem',
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
                  fontSize: '1rem',
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

export default FAQSection;