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
      
      <Container maxWidth="xl" sx={{ pt: { xs: 10, md: 12 }, pb: { xs: 8, md: 12 } }}>
        {/* Mobile Image - Shows at top on mobile */}
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            width: { xs: '280px', sm: '320px', md: '380px' },
            height: { xs: '450px', md: '580px' },
            mb: 6,
            position: 'sticky',
            top: 80,
            zIndex: 1,
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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 6, lg: 8 },
            minHeight: '100vh',
            alignItems: 'start',
          }}
        >
          {/* Left Side - Scrolling Content */}
          <Box
            sx={{
              position: { lg: 'sticky' },
              top: { lg: 100 },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 8, md: 12 },
              py: { xs: 4, md: 6 },
              pl: { xs: 12, md: 14, lg: 16},
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={section.id}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[index] = el;
                }}
                sx={{
                  minHeight: { xs: '60vh', md: '70vh' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                      fontWeight: 600,
                      color: '#000000',
                      fontFamily: `'Clash Display', sans-serif`,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      mb: { xs: 3, md: 4 },
                    }}
                  >
                    {section.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      lineHeight: 1.8,
                      color: '#000000',
                      whiteSpace: 'pre-line',
                      maxWidth: { xs: '100%', md: '90%' },
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
              position: { lg: 'sticky' },
              top: { lg: 100 },
              width: { lg: '380px' },
              height: { lg: '580px' },
              display: { xs: 'none', lg: 'block' },
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
      </Container>
    </Box>
  );
}
