'use client';

import { Box, Container, Typography, Link } from '@mui/material';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#D9D9D9',
        color: '#000000',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr 1fr 1fr' },
            gap: { xs: 4, md: 6, lg: 8 },
          }}
        >
          {/* Logo and Description */}
          <Box>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ position: 'relative', width: { xs: 140, md: 180 }, height: { xs: 45, md: 60 }, mb: 3 }}>
                <Image
                  src="/latrixinsiderlogonew.png"
                  alt="Latrix Insider Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  lineHeight: 1.7,
                  color: 'rgba(0, 0, 0, 0.7)',
                  maxWidth: 400,
                }}
              >
                Creating meaningful and memorable event experiences. We plan, design, and execute events with creativity, precision, and passion.
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                color: '#000000',
                mb: { xs: 2, md: 3 },
                fontFamily: `'Clash Display', inherit`,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 1.5, md: 2 },
              }}
            >
              {[
                { name: 'Home', id: 'home' },
                { name: 'Works', id: 'works' },
                { name: 'Service', id: 'service' },
                { name: 'About Us', id: 'about' },
              ].map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(link.id);
                  }}
                  sx={{
                    textDecoration: 'none',
                    color: 'rgba(0, 0, 0, 0.7)',
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#B871E1',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                color: '#000000',
                mb: { xs: 2, md: 3 },
                fontFamily: `'Clash Display', inherit`,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 1.5, md: 2 },
              }}
            >
              <Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    color: 'rgba(0, 0, 0, 0.7)',
                    lineHeight: 1.6,
                  }}
                >
                  Email:{' '}
                </Typography>
                <Link
                  href="mailto:info@latrixinsider.com"
                  sx={{
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    color: 'rgba(0, 0, 0, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#B871E1',
                    },
                  }}
                >
                  hello@latrixindia.com
                </Link>
              </Box>
              <Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    color: 'rgba(0, 0, 0, 0.7)',
                    lineHeight: 1.6,
                  }}
                >
                  Phone:{' '}
                </Typography>
                <Link
                  href="tel:+15551234567"
                  sx={{
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    color: 'rgba(0, 0, 0, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#B871E1',
                    },
                  }}
                >
                  8877668833
                </Link>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  color: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: 1.6,
                }}
              >
                Address:  Aravind Yoga Centre Backside, Near DNC Theatre (CSM),Komarapalayam, Namakkal-638183
              </Typography>
            </Box>
          </Box>

          {/* Social Media & CTA */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                color: '#000000',
                mb: { xs: 2, md: 3 },
                fontFamily: `'Clash Display', inherit`,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: { xs: 3, md: 4 },
              }}
            >
              {[
                { icon: YouTubeIcon, name: 'YouTube', url: 'https://youtube.com' },
                { icon: InstagramIcon, name: 'Instagram', url: 'https://www.instagram.com/latrixinsider?igsh=czd0dWllZzJraGJw' },
                { icon: LinkedInIcon, name: 'LinkedIn', url: 'https://linkedin.com' },
              ].map(({ icon: Icon, name, url }) => (
                <Box
                  key={name}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  sx={{
                    width: { xs: 36, md: 40 },
                    height: { xs: 36, md: 40 },
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(0, 0, 0, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#B871E1',
                      color: '#B871E1',
                      backgroundColor: 'rgba(184, 113, 225, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 18, md: 20 } }} />
                </Box>
              ))}
            </Box>
            <Box
              component="a"
              href="mailto:info@latrixinsider.com"
              aria-label="Contact us - Let's Talk"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: '#B871E1',
                color: '#000',
                borderRadius: '50px',
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.25 },
                textDecoration: 'none',
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                fontWeight: 400,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#A05AD0',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Let&apos;s Talk
              <Box
                sx={{
                  width: { xs: 20, md: 22 },
                  height: { xs: 20, md: 22 },
                  borderRadius: '50%',
                  border: '1px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: { xs: 12, md: 13 }, color: '#000' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 3, md: 4 },
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.75rem', md: '0.85rem' },
              color: 'rgba(0, 0, 0, 0.5)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {new Date().getFullYear()} Latrix Tech. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 3 },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Link
              href="#"
              sx={{
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                color: 'rgba(0, 0, 0, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#B871E1',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                color: 'rgba(0, 0, 0, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#B871E1',
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

