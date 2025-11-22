'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NavigationBar from '@/components/home/NavigationBar';

const sections = [
  {
    id: 'intro',
    title: 'About Us',
    content: 'We started Latrix Insider with one belief every event should feel unique, creative, and unforgettable.\n\nToday, we help brands and people celebrate moments with flawless planning and stunning experiences.',
    image: '/aboutus/aboutusintro.jpg',
  },
  {
    id: 'journey',
    title: 'Our Journey',
    content: 'From small local events to multi-city productions, our journey has been shaped by passion and precision.\n\nEvery step we take is focused on delivering events that leave a lasting impression.',
    image: '/aboutus/ourjourney.jpg',
  },
  {
    id: 'whatwedo',
    title: 'What We Do',
    content: 'We plan, design, and execute events that bring ideas to life corporate events, product launches, cultural shows, college fests, and private celebrations.',
    image: '/aboutus/whatwedo.jpg',
  },
  {
    id: 'different',
    title: "Why We're Different",
    content: 'With creative designers, strategic planners, and a dedicated on-site team, we ensure every event is smooth, stress-free, and beautifully crafted.',
    image: '/aboutus/whywearedifferent.jpg',
  },
  {
    id: 'vision',
    title: 'Vision / Mission',
    content: 'Our mission is simple create meaningful experiences through creativity, innovation, and seamless execution.',
    image: '/aboutus/vision mission.jpg',
  },
];

export default function AboutUsPage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const ref = sectionRefs.current[i];
        if (ref) {
          const { offsetTop } = ref;
          if (scrollPosition >= offsetTop - 100) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff', position: 'relative' }}>
      <NavigationBar forceWhite={true} />
      
      <Container maxWidth="xl" sx={{ pt: { xs: 10, md: 12, lg: 16 }, pb: { xs: 6, md: 12 }, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Desktop Layout */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'grid' },
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            minHeight: '100vh',
            alignItems: 'start',
            mt: { lg: 4 },
          }}
        >
          {/* Left Side - Scrolling Content */}
          <Box
            sx={{
              position: 'sticky',
              top: 100,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              py: 6,
              pl: 16,
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={section.id}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[index] = el;
                }}
                sx={{
                  minHeight: '70vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: '3rem', lg: '3.5rem' },
                      fontWeight: 600,
                      color: '#000000',
                      fontFamily: `'Clash Display', sans-serif`,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      mb: 4,
                    }}
                  >
                    {section.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontSize: '1.125rem',
                      lineHeight: 1.8,
                      color: '#000000',
                      whiteSpace: 'pre-line',
                      maxWidth: '90%',
                    }}
                  >
                    {section.content}
                  </Typography>
                </motion.div>
              </Box>
            ))}
          </Box>

          {/* Right Side - Fixed Image with Crossfade */}
          <Box
            sx={{
              position: 'sticky',
              top: 100,
              width: '380px',
              height: '580px',
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeSection === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: activeSection === index ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Mobile Layout - Card-based design */}
        <Box
          sx={{
            display: { xs: 'flex', lg: 'none' },
            flexDirection: 'column',
            gap: { xs: 6, sm: 8 },
            pb: 4,
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(184, 113, 225, 0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '280px', sm: '320px' },
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.75rem', sm: '2rem' },
                      fontWeight: 600,
                      color: '#000000',
                      fontFamily: `'Clash Display', sans-serif`,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    {section.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      lineHeight: 1.7,
                      color: '#666666',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
