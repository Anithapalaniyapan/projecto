'use client';

import { Box, Container, Typography } from '@mui/material';
import NavigationBar from '@/components/home/NavigationBar';

export default function ServicePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <NavigationBar forceWhite={true} />
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#393D75',
            textAlign: 'center',
          }}
        >
          Service
        </Typography>
      </Container>
    </Box>
  );
}

