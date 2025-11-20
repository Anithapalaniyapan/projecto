'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useRouter } from 'next/navigation';

export default function HomeSection() {
  const router = useRouter();

  const handleExploreEvents = () => {
    const upcomingEventsSection = document.getElementById('upcoming-events');
    if (upcomingEventsSection) {
      upcomingEventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOurJourney = () => {
    router.push('/work');
  };
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/video/insidervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Dark Overlay for Better Text Readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content Overlay */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '800px', lg: '900px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#fff',
              fontFamily: `'Clash Display', inherit`,
              mb: { xs: 2, md: 3 },
              letterSpacing: { xs: 1, md: 2 },
            }}
          >
            Vision{' '}
            <Box component="span" sx={{ color: '#B871E1' }}>
              Meets
            </Box>
            <br />
            Mission
          </Typography>

          {/* Tagline */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem' },
              lineHeight: 1.6,
              color: '#fff',
              mb: { xs: 4, md: 5 },
              maxWidth: { xs: '100%', md: '600px' },
              fontWeight: 400,
            }}
          >
            From{' '}
            <Box component="span" sx={{ color: '#B871E1', fontWeight: 600 }}>
              corporate gatherings
            </Box>{' '}
            to{' '}
            <Box component="span" sx={{ color: '#B871E1', fontWeight: 600 }}>
              grand celebrations
            </Box>
            , we bring your vision to life with flawless planning, stunning
            designs, and smooth execution.
          </Typography>

          {/* Call-to-Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              onClick={handleExploreEvents}
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
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                backgroundColor: 'rgba(184, 113, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: '#A05AD0',
                  color: '#A05AD0',
                  backgroundColor: 'rgba(184, 113, 225, 0.2)',
                  borderWidth: '2px',
                },
                '& .MuiButton-endIcon': {
                  marginLeft: 0.5,
                },
              }}
            >
              Explore Events
            </Button>
            <Button
              onClick={handleOurJourney}
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
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: '#e5e5e5',
                  color: '#e5e5e5',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
      </Container>
    </Box>
  );
}

