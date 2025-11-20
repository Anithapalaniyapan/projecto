'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Counter from './Counter';

const eventImages = [
  '/eventimages/event1.jpg',
  '/eventimages/event2.jpg',
  '/eventimages/event3.jpg',
  '/eventimages/event4.jpg',
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000000',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ p: 0 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            alignItems: 'center',
            gap: { xs: 4, md: 6, lg: 8 },
            minHeight: { lg: '70vh' },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Left — Text Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 3 },
              zIndex: 1,
            }}
          >
            {/* Headline */}
            <Typography
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                fontWeight: 500,
                lineHeight: 1.0,
                color: '#fff',
                fontFamily: `'Clash Display', inherit`,
                mb: { xs: 2, md: 3 },
              }}
            >
              At Latrix Insider, we create{' '}
              <Box component="span" sx={{ color: '#B871E1' }}>meaningful</Box> and{' '}
              <Box component="span" sx={{ color: '#B871E1' }}>memorable</Box> event{' '}
              <Box component="span" sx={{ color: '#B871E1' }}>experiences</Box>.
            </Typography>

            {/* Descriptive Text */}
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.7,
                color: '#fff',
                mb: { xs: 3, md: 4 },
                maxWidth: 600,
              }}
            >
              We plan, design, and execute events with creativity, precision, and passion. Our team brings ideas to life whether it a corporate meet, product launch, cultural event, or a private celebration. With a focus on quality and client satisfaction, we turn every event into an experience that inspires and connects people.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mt: { xs: 1, md: 2 },
              }}
            >
              <Button
                variant="outlined"
                endIcon={
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: '2px solid #B871E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      ml: 1,
                    }}
                  >
                    <ArrowOutwardIcon sx={{ fontSize: 14, color: '#B871E1' }} />
                  </Box>
                }
                sx={{
                  borderColor: '#B871E1',
                  borderWidth: '2px',
                  color: '#B871E1',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 400,
                  backgroundColor: 'transparent',
                  '&:hover': {
                    borderColor: '#A05AD0',
                    color: '#A05AD0',
                    backgroundColor: 'rgba(184, 113, 225, 0.1)',
                    borderWidth: '2px',
                  },
                  '& .MuiButton-endIcon': {
                    marginLeft: 0.5,
                  },
                }}
              >
                Event
              </Button>
              <Button
                variant="outlined"
                endIcon={
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: '2px solid #ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      ml: 1,
                    }}
                  >
                    <ArrowOutwardIcon sx={{ fontSize: 14, color: '#ffffff' }} />
                  </Box>
                }
                sx={{
                  borderColor: '#ffffff',
                  borderWidth: '2px',
                  color: '#ffffff',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 400,
                  backgroundColor: 'transparent',
                  '&:hover': {
                    borderColor: '#e5e5e5',
                    color: '#e5e5e5',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: '2px',
                  },
                  '& .MuiButton-endIcon': {
                    marginLeft: 0.5,
                  },
                }}
              >
                Our Journey
              </Button>
            </Box>
          </Box>

          {/* Right — Image Collage */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 450, md: 550, lg: 650 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Image Collage Container */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: { xs: 500, md: 600, lg: 700 },
                margin: '0 auto',
              }}
            >
              {/* Top Left Image - Portrait oriented */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: { xs: '35%', md: '38%' },
                  height: { xs: '42%', md: '45%' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                <Image
                  src={eventImages[0]}
                  alt="Event 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Top Right Image - Smaller, partially obscured */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '8%', md: '10%' },
                  right: { xs: '12%', md: '15%' },
                  width: { xs: '32%', md: '35%' },
                  height: { xs: '32%', md: '35%' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src={eventImages[1]}
                  alt="Event 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Large Central Image - Landscape oriented, prominent */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '65%', md: '70%' },
                  height: { xs: '48%', md: '52%' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  zIndex: 5,
                  boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                }}
              >
                <Image
                  src={eventImages[2]}
                  alt="Event 3"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Bottom Left Image - Portrait oriented */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '8%', md: '10%' },
                  left: { xs: '5%', md: '8%' },
                  width: { xs: '36%', md: '40%' },
                  height: { xs: '38%', md: '42%' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                <Image
                  src={eventImages[3]}
                  alt="Event 4"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Bottom Right Image - Portrait oriented */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '10%', md: '12%' },
                  right: { xs: '8%', md: '10%' },
                  width: { xs: '34%', md: '37%' },
                  height: { xs: '36%', md: '40%' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src={eventImages[0]}
                  alt="Event 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Statistics Section - Full Width */}
        <Box
          sx={{
            width: '100%',
            px: { xs: 2, md: 4 },
            mt: { xs: 8, md: 12 },
            pt: { xs: 6, md: 8 },
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
              gap: { xs: 4, md: 6, lg: 8 },
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            {/* Years of Experience */}
            <Counter end={5} suffix="+" label="Years of Experience" />

            {/* Events Served */}
            <Counter end={950} suffix="+" label="Projects Completed" />

            {/* Participants Reached */}
            <Box sx={{ position: 'relative' }}>
              <Counter end={100} suffix="+" label="Clients Reached" />
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '20px', md: '30px' },
                  right: { xs: '-10px', md: '-15px' },
                  width: { xs: '40px', md: '60px' },
                  height: { xs: '40px', md: '60px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(184, 113, 225, 0.3) 0%, rgba(184, 113, 225, 0.1) 50%, transparent 100%)',
                  filter: 'blur(8px)',
                  zIndex: -1,
                }}
              />
            </Box>

            {/* Projects Completed */}
            <Counter end={2000000} suffix="" label="Participants Reached" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

