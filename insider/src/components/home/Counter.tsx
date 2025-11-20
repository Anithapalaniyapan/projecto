'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function Counter({ end, suffix = '', duration = 2000, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const animateCounter = () => {
      const startTime = Date.now();
      const startValue = 0;

      const easeOutCubic = (t: number): number => {
        return 1 - Math.pow(1 - t, 3);
      };

      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = Math.floor(startValue + (end - startValue) * easedProgress);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, end, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      const millions = num / 1000000;
      // If it's a whole number, don't show decimal places
      if (millions % 1 === 0) {
        return millions.toFixed(0) + 'M';
      }
      return millions.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
  };

  // Format the display value based on the end value to determine if we should use k/M formatting
  const shouldFormat = end >= 1000;
  const displayValue = shouldFormat ? formatNumber(count) : count.toString();

  return (
    <Box ref={counterRef}>
      <Typography
        sx={{
          fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
          fontWeight: 700,
          color: '#B871E1',
          fontFamily: `'Clash Display', inherit`,
          lineHeight: 1,
          mb: 1.5,
        }}
      >
        {displayValue}
        {suffix}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '0.75rem', md: '0.9rem' },
          color: '#ffffff',
          opacity: 0.8,
          lineHeight: 1.4,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

