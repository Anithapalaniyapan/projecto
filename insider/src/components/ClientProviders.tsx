'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#393D75',
    },
    secondary: {
      main: '#B871E1',
    },
    grey: {
      300: '#BABABA',
      400: '#D9D9D9',
    },
  },
  typography: {
    // Use Clash Display globally with Inter as fallback
    fontFamily: `'Clash Display', ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    h1: { fontFamily: `'Clash Display', ${inter.style.fontFamily}` },
    h2: { fontFamily: `'Clash Display', ${inter.style.fontFamily}` },
    h3: { fontFamily: `'Clash Display', ${inter.style.fontFamily}` },
  },
});

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

