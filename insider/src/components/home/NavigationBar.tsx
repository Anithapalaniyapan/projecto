'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface NavigationBarProps {
  forceWhite?: boolean;
}

export default function NavigationBar({ forceWhite = false }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: forceWhite ? '#ffffff' : (isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'),
        backdropFilter: forceWhite ? 'none' : (isScrolled ? 'blur(0px)' : 'blur(20px)'),
        color: forceWhite ? '#000000' : (isScrolled ? '#393D75' : '#fff'),
        borderBottom: forceWhite ? '1px solid rgba(0, 0, 0, 0.1)' : (isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'),
        transition: 'all 0.3s ease-in-out',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: { xs: 64, md: 80 },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo Section - Using only the image */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ position: 'relative', width: { xs: 120, md: 150 }, height: { xs: 40, md: 50 } }}>
              <Image
                src="/latrixinsiderlogonew.png"
                alt="Latrix Insider Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Box
              component="a"
              href="/"
              sx={{
                position: 'relative',
                textDecoration: 'none',
                color: forceWhite ? '#000000' : (isScrolled ? '#393D75' : '#fff'),
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#B871E1' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#B871E1',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              <Typography component="span">Home</Typography>
            </Box>
            <Box>
              <Box
                component="a"
                href="/work"
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: forceWhite ? '#000000' : (isScrolled ? '#000' : '#fff'),
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#B871E1' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#B871E1',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                <Typography component="span">Work</Typography>
              </Box>
            </Box>
            <Box>
              <Box
                component="a"
                href="/service"
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: forceWhite ? '#000000' : (isScrolled ? '#000' : '#fff'),
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#B871E1' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#B871E1',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                <Typography component="span">Services</Typography>
              </Box>
            </Box>
            <Box
              component="a"
              href="/about-us"
              sx={{
                position: 'relative',
                textDecoration: 'none',
                color: forceWhite ? '#000000' : (isScrolled ? '#000' : '#fff'),
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#B871E1' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#B871E1',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              <Typography component="span">About Us</Typography>
            </Box>
          </Box>

          {/* CTA Button */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              component="a"
              href="/contact"
              variant="contained"
              endIcon={
                <Box
                  sx={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    border: '1px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 1,
                  }}
                >
                  <ArrowOutwardIcon sx={{ fontSize: 13, color: '#000' }} />
                </Box>
              }
              sx={{
                backgroundColor: '#B871E1',
                color: '#000',
                borderRadius: '50px',
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(184, 113, 225, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#A05AD0',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(184, 113, 225, 0.4)',
                },
                '& .MuiButton-endIcon': {
                  marginLeft: 0,
                },
              }}
            >
              Let&apos;s Talk
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: forceWhite ? '#000000' : (isScrolled ? '#393D75' : '#fff'),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: '#fff',
            pt: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 3 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: '#393D75' }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <Box
              component="a"
              href="/"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: 'none',
                color: '#393D75',
                fontSize: '1.1rem',
                fontWeight: 600,
                width: '100%',
                py: 1,
                '&:hover': { color: '#B871E1' },
              }}
            >
              Home
            </Box>
          </ListItem>
          <ListItem>
            <Box
              component="a"
              href="/work"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: 'none',
                color: '#393D75',
                fontSize: '1.1rem',
                fontWeight: 600,
                width: '100%',
                py: 1,
                '&:hover': { color: '#B871E1' },
              }}
            >
              Work
            </Box>
          </ListItem>
          <ListItem>
            <Box
              component="a"
              href="/service"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: 'none',
                color: '#393D75',
                fontSize: '1.1rem',
                fontWeight: 600,
                width: '100%',
                py: 1,
                '&:hover': { color: '#B871E1' },
              }}
            >
              Services
            </Box>
          </ListItem>
          <ListItem>
            <Box
              component="a"
              href="/about-us"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: 'none',
                color: '#393D75',
                fontSize: '1.1rem',
                fontWeight: 600,
                width: '100%',
                py: 1,
                '&:hover': { color: '#B871E1' },
              }}
            >
              About Us
            </Box>
          </ListItem>
          <ListItem sx={{ mt: 2 }}>
            <Button
              component="a"
              href="/contact"
              onClick={handleDrawerToggle}
              variant="contained"
              fullWidth
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: '#B871E1',
                color: '#000',
                borderRadius: '50px',
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#A05AD0',
                },
              }}
            >
              Let&apos;s Talk
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

