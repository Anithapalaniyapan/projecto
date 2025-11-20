'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

// 6 client logos from the logo folder
const logos = [
  '/logo/logo1.png',
  '/logo/logo2.png',
  '/logo/logo3.png',
  '/logo/logo4.png',
  '/logo/logo5.png',
  '/logo/logo6.png',
];

const Clients: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        py: 4
      }}
    >
      <Box
        sx={{
          backgroundColor: '#0f0f0f',
          py: 10,
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: { xs: '60px', md: '80px' },
          mx: { xs: 0.5, md: 1 }
        }}
      >
        <Container maxWidth="xl" sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 4, md: 6 },
              position: 'relative'
            }}
          >
            {/* CLIENTS Heading - Left */}
            <Box sx={{ flex: { xs: '0 0 auto', md: '0 0 40%' } }}>
              <Typography
                sx={{
                  fontSize: { xs: '72px', md: '120px', lg: '140px' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                  fontFamily: `'Clash Display', inherit`,
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}
              >
                CLIENTS
              </Typography>
            </Box>

            {/* Descriptive Paragraph - Right Side */}
            <Box 
              sx={{ 
                flex: { xs: '1 1 auto', md: '0 0 50%' },
                maxWidth: { xs: '100%', md: '500px' },
                alignSelf: { xs: 'flex-start', md: 'flex-start' },
                mt: { xs: 0, md: 0 }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '13px', md: '14px' },
                  color: '#FFFFFF',
                  fontFamily: `'Clash Display', inherit`,
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                At Latrix Insider, we collaborate with forward-thinking 
                <br />
                brands, startups, and industry leaders who dare to 
                <br />
                challenge the norm.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Client Cards - Auto-moving Carousel with 6 cards */}
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            px: 3,
            mt: 4
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              gap: 3,
              animation: 'scroll 30s linear infinite',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)'
                },
                '100%': {
                  transform: 'translateX(-50%)'
                }
              },
              '&:hover': {
                animationPlayState: 'paused'
              }
            }}
          >
            {/* Render 6 cards twice for seamless infinite loop */}
            {[1, 2].map((set) => (
              <Box 
                key={set} 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  flexShrink: 0,
                  width: 'fit-content'
                }}
              >
                {logos.map((logo, index) => (
                  <Box
                    key={`${set}-${index}`}
                    sx={{
                      backgroundColor: '#1a1a1a',
                      borderRadius: '40px',
                      height: '300px',
                      width: { xs: '240px', sm: '280px', md: '300px' },
                      flex: '0 0 auto',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 4,
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '200px',
                        height: '200px',
                        filter: 'grayscale(100%) brightness(0.7)',
                        opacity: 0.8,
                        '&:hover': {
                          filter: 'grayscale(80%) brightness(0.85)',
                          opacity: 1,
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      <Image
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        width={200}
                        height={200}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                        unoptimized
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
