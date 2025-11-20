'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

type UpcomingEvent = {
  id: string;
  title: string;
  dateLabel: string;
  imageSrc: string;
  location: string;
};

const defaultEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Bharatham',
    dateLabel: '23 Nov 2025',
    imageSrc: '/eventsf/event1.png',
    location: 'Bharatham',
  },
  {
    id: '2',
    title: 'Bharatham',
    dateLabel: '23 Nov 2025',
    imageSrc: '/eventsf/event2.png',
    location: 'Bharatham',
  },
  {
    id: '3',
    title: 'Bharatham',
    dateLabel: '23 Nov 2025',
    imageSrc: '/eventsf/event3.png',
    location: 'Bharatham',
  },
  {
    id: '4',
    title: 'Bharatham',
    dateLabel: '23 Nov 2025',
    imageSrc: '/eventsf/event4.png',
    location: 'Bharatham',
  },
];

function EventCard({ event }: { event: UpcomingEvent }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '400px', md: '500px' },
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#222',
        }}
      >
        {/* Use next/image if the asset exists; otherwise the dark bg acts as a placeholder */}
        <Image
          src={event.imageSrc}
          alt={event.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          style={{ objectFit: 'cover' }}
          onError={() => {}}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 1, mt: 1.2 }}>
        <Typography
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.8rem',
            lineHeight: 1.3,
          }}
        >
          {event.dateLabel}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#b3b3b3',
          fontSize: { xs: '1.25rem', md: '1.35rem' },
          lineHeight: 1.35,
          letterSpacing: 1.2,
          mt: 0.8,
        }}
      >
        {event.location}
      </Typography>
    </Box>
  );
}

export default function UpcomingEvents({
  events = defaultEvents,
}: {
  events?: UpcomingEvent[];
}) {
  return (
    <Box id="upcoming-events" sx={{ backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        

        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: '72px', md: '120px', lg: '90px' },
            fontWeight: 500,
            color: '#FFFFFF',
            fontFamily: `'Clash Display', inherit`,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            mb: { xs: 3, md: 4 },
          }}
        >
          Upcoming
        </Typography>

        {/* Auto-scrolling Cards Carousel */}
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            px: 3,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              gap: 3,
              animation: 'scrollEvents 30s linear infinite',
              '@keyframes scrollEvents': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
              '&:hover': {
                animationPlayState: 'paused',
              },
            }}
          >
            {/* Render events twice for seamless infinite loop */}
            {[1, 2].map((set) => (
              <Box
                key={set}
                sx={{
                  display: 'flex',
                  gap: 3,
                  flexShrink: 0,
                  width: 'fit-content',
                }}
              >
                {events.map((event, index) => (
                  <Box
                    key={`${set}-${index}`}
                    sx={{
                      width: { xs: '280px', sm: '320px', md: '380px' },
                      flex: '0 0 auto',
                      flexShrink: 0,
                    }}
                  >
                    <EventCard event={event} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}