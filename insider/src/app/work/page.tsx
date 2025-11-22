'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavigationBar from '@/components/home/NavigationBar';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type EventCard = {
  id: string;
  name: string;
  image: string;
  tags: string[];
  location: string;
  date: string;
  whatWeDid: string;
};

const events: EventCard[] = [
  {
    id: '1',
    name: 'Corporate Summit',
    image: '/work/we.jpg',
    tags: ['Corporate', 'Conference'],
    location: 'Mumbai, India',
    date: '15 Mar 2024',
    whatWeDid: 'Full event planning, stage design, and production management',
  },
  {
    id: '2',
    name: 'Festival Celebration',
    image: '/work/wf.jpg',
    tags: ['Festival', 'Cultural'],
    location: 'Delhi, India',
    date: '22 Apr 2024',
    whatWeDid: 'Cultural event coordination, decor, and entertainment management',
  },
  {
    id: '3',
    name: 'Product Launch',
    image: '/work/wfi.jpg',
    tags: ['Launch', 'Corporate'],
    location: 'Bangalore, India',
    date: '10 May 2024',
    whatWeDid: 'Product launch event with branding, AV setup, and guest management',
  },
  {
    id: '4',
    name: 'Networking Event',
    image: '/work/wn.jpg',
    tags: ['Networking', 'Business'],
    location: 'Pune, India',
    date: '28 May 2024',
    whatWeDid: 'Business networking event with catering and venue management',
  },
  {
    id: '5',
    name: 'Opening Ceremony',
    image: '/work/wo.jpg',
    tags: ['Ceremony', 'Formal'],
    location: 'Chennai, India',
    date: '05 Jun 2024',
    whatWeDid: 'Formal ceremony planning, protocol management, and stage production',
  },
  {
    id: '6',
    name: 'Tech Conference',
    image: '/work/wt.jpg',
    tags: ['Tech', 'Conference'],
    location: 'Hyderabad, India',
    date: '18 Jun 2024',
    whatWeDid: 'Tech conference with speaker management, live streaming, and tech setup',
  },
  {
    id: '7',
    name: 'Themed Event',
    image: '/work/wth.jpg',
    tags: ['Themed', 'Creative'],
    location: 'Kolkata, India',
    date: '02 Jul 2024',
    whatWeDid: 'Creative themed event with custom decor, lighting, and entertainment',
  },
  {
    id: '8',
    name: 'Showcase Event',
    image: '/work/ws.jpg',
    tags: ['Showcase', 'Exhibition'],
    location: 'Ahmedabad, India',
    date: '20 Jul 2024',
    whatWeDid: 'Exhibition showcase with booth design, branding, and visitor management',
  },
  {
    id: '9',
    name: 'Special Event',
    image: '/work/wse.jpg',
    tags: ['Special', 'Exclusive'],
    location: 'Jaipur, India',
    date: '08 Aug 2024',
    whatWeDid: 'Exclusive event with VIP management, luxury catering, and premium decor',
  },
  {
    id: '10',
    name: 'Tenth Anniversary',
    image: '/work/wten.jpg',
    tags: ['Anniversary', 'Celebration'],
    location: 'Goa, India',
    date: '25 Aug 2024',
    whatWeDid: 'Anniversary celebration with entertainment, catering, and memorable experiences',
  },
];

function EventCard({ event, index }: { event: EventCard; index: number }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  const handleTouchStart = () => {
    setShowDetails(true);
  };

  const handleTouchEnd = () => {
    // Keep it visible for a moment after touch ends
    setTimeout(() => setShowDetails(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] // Custom easing for smooth animation
      }}
      whileHover={{ y: -8 }}
      style={{ transition: 'transform 0.3s ease' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '280px', sm: '320px', md: '360px' },
          flexShrink: 0,
          cursor: 'pointer',
        }}
      >
        {/* Image Container with Overlay Details */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Box
            className="card-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setShowDetails(!showDetails)}
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '350px', md: '420px' },
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#1a1a1a',
              mb: 2,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: showDetails ? '0 20px 40px rgba(184, 113, 225, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
              '& .event-image': {
                transform: showDetails ? 'scale(1.1)' : 'scale(1)',
              },
            }}
          >
            <Image
              src={event.image}
              alt={event.name}
              fill
              sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 360px"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="event-image"
            />
            
            {/* Transparent Light White Overlay with Details */}
            <Box
              className="details-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                opacity: showDetails ? 1 : 0,
                visibility: showDetails ? 'visible' : 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                p: { xs: 2, md: 3 },
                zIndex: 10,
              }}
            >
              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: `'Clash Display', inherit`,
                    mb: 1.5,
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {event.name}
                </Typography>
                
                {/* Date and Location */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 500,
                      color: '#8B4DB8',
                      fontFamily: `'Clash Display', inherit`,
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocationOnIcon 
                      sx={{ 
                        fontSize: { xs: '16px', md: '18px' }, 
                        color: '#444444',
                        filter: 'drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8))',
                      }} 
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        color: '#444444',
                        fontFamily: `'Clash Display', inherit`,
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      {event.location}
                    </Typography>
                  </Box>
                </Box>

                {/* What We Did */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    color: '#333333',
                    fontFamily: `'Clash Display', inherit`,
                    lineHeight: 1.6,
                    mb: 2,
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {event.whatWeDid}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {event.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      sx={{
                        backgroundColor: 'rgba(184, 113, 225, 0.15)',
                        color: '#B871E1',
                        border: '1px solid rgba(184, 113, 225, 0.3)',
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        height: { xs: '24px', md: '28px' },
                        fontWeight: 500,
                        fontFamily: `'Clash Display', inherit`,
                        transition: 'all 0.3s ease',
                        '& .MuiChip-label': {
                          px: 1.5,
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(184, 113, 225, 0.25)',
                          borderColor: 'rgba(184, 113, 225, 0.5)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default function WorkPage() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  // Animate title letters
  const titleText = 'WORK';
  const titleLetters = titleText.split('');

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <NavigationBar forceWhite={true} />
      
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Spacing between nav and heading for mobile/tablet */}
        <Box sx={{ display: { xs: 'block', lg: 'none' }, mt: { xs: 4, sm: 6, md: 8 } }} />
        
        {/* Large Title with Letter Animation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: 3, md: 4 },
            gap: { xs: '0.02em', md: '0.03em' },
          }}
        >
          {titleLetters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '72px', md: '120px', lg: '140px' },
                  fontWeight: 700,
                  color: '#393D75',
                  fontFamily: `'Clash Display', inherit`,
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Two-line Description with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: { xs: 6, md: 8 },
              textAlign: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  color: '#666666',
                  fontFamily: `'Clash Display', inherit`,
                  mb: 1,
                }}
              >
                Where creativity meets precision, and vision transforms into reality.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  color: '#666666',
                  fontFamily: `'Clash Display', inherit`,
                }}
              >
                Every event we execute is a testament to our commitment to excellence and innovation.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Event Gallery Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, md: 6 },
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 600,
                  color: '#393D75',
                  fontFamily: `'Clash Display', inherit`,
                  mb: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}
              >
                Our Event Gallery
              </Typography>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.7,
                    color: '#666666',
                    fontFamily: `'Clash Display', inherit`,
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  Curated moments from our most memorable events, showcasing creativity, attention to detail, and flawless execution.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* Horizontal Scroll Section */}
          <Box
            sx={{
              overflowX: 'auto',
              overflowY: 'hidden',
              position: 'relative',
              width: '100%',
              px: { xs: 2, md: 3 },
              pb: 2,
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(184, 113, 225, 0.5)',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(184, 113, 225, 0.7)',
                },
              },
              scrollBehavior: 'smooth',
            }}
          >
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  color: '#B871E1',
                }}
              >
               
               
              </Box>
            </motion.div>
            <Box
              sx={{
                display: 'inline-flex',
                gap: { xs: 3, md: 4 },
                flexShrink: 0,
              }}
            >
              {events.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 600,
                  color: '#393D75',
                  fontFamily: `'Clash Display', inherit`,
                  mb: { xs: 3, md: 4 },
                  lineHeight: 1.2,
                }}
              >
                Want to plan an event with us?
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleContactClick}
                endIcon={
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Box
                      sx={{
                        width: { xs: 20, md: 22 },
                        height: { xs: 20, md: 22 },
                        borderRadius: '50%',
                        border: '1px solid #000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        ml: 0.5,
                      }}
                    >
                      <ArrowOutwardIcon sx={{ fontSize: { xs: 12, md: 13 }, color: '#000' }} />
                    </Box>
                  </motion.div>
                }
                sx={{
                  backgroundColor: '#B871E1',
                  color: '#000',
                  borderRadius: '50px',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  fontWeight: 500,
                  fontFamily: `'Clash Display', inherit`,
                  textTransform: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 15px rgba(184, 113, 225, 0.3)',
                  '&:hover': {
                    backgroundColor: '#A05AD0',
                    boxShadow: '0 8px 25px rgba(184, 113, 225, 0.4)',
                  },
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
