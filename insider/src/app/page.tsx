'use client';

import { Box } from '@mui/material';
import NavigationBar from '@/components/home/NavigationBar';
import HomeSection from '@/components/home/HomeSection';
import AboutUs from '@/components/home/AboutUs';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#fff',
        scrollBehavior: 'smooth',
      }}
    >
      <NavigationBar />
      <HomeSection />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: '#000000',
        }}
      >
        <AboutUs />
        <UpcomingEvents />
        <Clients />
      </Box>
    </Box>
  );
}

