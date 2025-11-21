'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import NavigationBar from '@/components/home/NavigationBar';

type ServiceItem = {
  id: number;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Event Planning',
    description: 'From concept to celebration, we plan every detail with care. Our team handles venue selection, theme ideas, décor, timelines, and vendor coordination so you can enjoy your event stress-free.',
  },
  {
    id: 2,
    title: 'Event Coordination',
    description: 'We stay with you on the event day to manage everything  guests, vendors, timing, and flow. You relax, we handle the pressure.',
  },
  {
    id: 3,
    title: 'Decoration & Theme Setup',
    description: 'Elegant, classy, modern or traditional  we design themes that match your style. Custom décor, lighting, flowers, stage setup, and all creative elements done to perfection.',
  },
  {
    id: 4,
    title: 'Photography & Videography',
    description: 'Our professional team captures every moment beautifully  candid, cinematic, drone shots, and full-event coverage.',
  },
  {
    id: 5,
    title: 'Catering Services',
    description: 'We provide multiple cuisine options with high-quality food. From snacks to main course to desserts  everything is fresh and delicious.',
  },
  {
    id: 6,
    title: 'Entertainment & Artists',
    description: 'DJ, live music, dancers, MCs, special performers we arrange entertainment that suits your event theme and energy.',
  },
  {
    id: 7,
    title: 'Invitation & Branding',
    description: 'Digital invites, printed invites, custom logos, banners, and social media reels  we create stylish event branding.',
  },
  {
    id: 8,
    title: 'Budget Management',
    description: 'We help you plan your event within your budget without compromising quality. Transparent costs, no hidden charges.',
  },
  {
    id: 9,
    title: 'Venue Booking',
    description: 'We assist in choosing and booking the perfect venue  halls, resorts, outdoor spaces, or destination spots.',
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
        alignItems: 'center',
        gap: { xs: 2, md: 4 },
        mb: { xs: 4, md: 6 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0)'
          : `translateX(${isLeft ? '-100px' : '100px'})`,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          flex: { xs: '0 0 auto', md: '0 0 200px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '80px', sm: '90px', md: '100px' },
            height: { xs: '80px', sm: '90px', md: '100px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Image
            src="/bird.png"
            alt={service.title}
            width={100}
            height={100}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: { xs: '1 1 auto', md: '1 1 60%' },
          textAlign: { xs: 'center', md: isLeft ? 'left' : 'right' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            fontWeight: 700,
            color: '#393D75',
            fontFamily: `'Clash Display', inherit`,
            mb: 1.5,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          {service.title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: { xs: '100%', md: '500px' },
            ml: { xs: 0, md: isLeft ? 0 : 'auto' },
            mr: { xs: 0, md: isLeft ? 'auto' : 0 },
          }}
        >
          {service.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ServicePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <NavigationBar forceWhite={true} />
      <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
        {/* Page Title */}
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: '#393D75',
              fontFamily: `'Clash Display', inherit`,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            Services
          </Typography>
        </Box>

        {/* Services List */}
        <Box>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
