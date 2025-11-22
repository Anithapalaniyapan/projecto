'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import NavigationBar from '@/components/home/NavigationBar';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setError('');
    setSuccess(false);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        // If response is not JSON, use the status text
        throw new Error(response.statusText || 'Failed to send message');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        message: '',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setError(errorMessage);
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <NavigationBar forceWhite={true} />
      
      {/* Spacing between nav and content */}
      <Box sx={{ mt: { xs: 10, md: 12 } }} />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left Side - Contact Information */}
          <Box sx={{ width: { xs: '100%', md: '41.666%' }, flexShrink: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '50%',
                  justifyContent: 'center',
                }}
              >
                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    color: '#393D75',
                    fontFamily: `'Clash Display', inherit`,
                    mb: { xs: 4, md: 5 },
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                  Let&apos;s work together
                </Typography>

                {/* Contact Information - Vertical Layout */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 3, md: 4 },
                  }}
                >
                  {/* Email */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <EmailIcon
                        sx={{
                          color: '#B871E1',
                          fontSize: { xs: 24, md: 28 },
                          mt: 0.5,
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 600,
                            color: '#393D75',
                            mb: 0.5,
                            fontFamily: `'Clash Display', inherit`,
                          }}
                        >
                          Email
                        </Typography>
                        <Link
                          href="mailto:hello@latrixindia.com"
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            color: 'rgba(57, 61, 117, 0.7)',
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
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <PhoneIcon
                        sx={{
                          color: '#B871E1',
                          fontSize: { xs: 24, md: 28 },
                          mt: 0.5,
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 600,
                            color: '#393D75',
                            mb: 0.5,
                            fontFamily: `'Clash Display', inherit`,
                          }}
                        >
                          Phone
                        </Typography>
                        <Link
                          href="tel:8877668833"
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            color: 'rgba(57, 61, 117, 0.7)',
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
                    </Box>
                  </Box>

                  {/* Address */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <LocationOnIcon
                        sx={{
                          color: '#B871E1',
                          fontSize: { xs: 24, md: 28 },
                          mt: 0.5,
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 600,
                            color: '#393D75',
                            mb: 0.5,
                            fontFamily: `'Clash Display', inherit`,
                          }}
                        >
                          Address
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            color: 'rgba(57, 61, 117, 0.7)',
                            lineHeight: 1.6,
                          }}
                        >
                          Aravind Yoga Centre Backside, Near DNC Theatre (CSM), Komarapalayam, Namakkal-638183
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* Right Side - Contact Form */}
          <Box sx={{ width: { xs: '100%', md: '58.333%' }, flexShrink: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(184, 113, 225, 0.2)',
                  boxShadow: '0 8px 32px rgba(184, 113, 225, 0.1)',
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  {success && (
                    <Alert
                      severity="success"
                      sx={{
                        mb: 3,
                        borderRadius: '12px',
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                      }}
                    >
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </Alert>
                  )}

                  {error && (
                    <Alert
                      severity="error"
                      sx={{
                        mb: 3,
                        borderRadius: '12px',
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {/* First Name and Last Name - Side by Side */}
                      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <TextField
                          fullWidth
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '&:hover fieldset': {
                                borderColor: '#B871E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#B871E1',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#B871E1',
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              '&:hover fieldset': {
                                borderColor: '#B871E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#B871E1',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#B871E1',
                            },
                          }}
                        />
                      </Box>

                      {/* Mobile Number */}
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        error={!!errors.mobileNumber}
                        helperText={errors.mobileNumber}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#B871E1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#B871E1',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#B871E1',
                          },
                        }}
                      />

                      {/* Email */}
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#B871E1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#B871E1',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#B871E1',
                          },
                        }}
                      />

                      {/* Message */}
                      <TextField
                        fullWidth
                        label="Please tell us what we can help you with"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#B871E1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#B871E1',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#B871E1',
                          },
                        }}
                      />

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={loading}
                          endIcon={
                            loading ? (
                              <CircularProgress size={20} sx={{ color: '#000' }} />
                            ) : (
                              <Box
                                sx={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: '50%',
                                  border: '1px solid #000',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <ArrowOutwardIcon sx={{ fontSize: 13, color: '#000' }} />
                              </Box>
                            )
                          }
                          sx={{
                            backgroundColor: '#B871E1',
                            color: '#000',
                            borderRadius: '50px',
                            py: 1.5,
                            px: 4,
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            fontFamily: `'Clash Display', inherit`,
                            boxShadow: '0 4px 14px rgba(184, 113, 225, 0.3)',
                            mt: 1,
                            '&:hover': {
                              backgroundColor: '#A05AD0',
                              boxShadow: '0 6px 20px rgba(184, 113, 225, 0.4)',
                            },
                            '&:disabled': {
                              backgroundColor: '#B871E1',
                              opacity: 0.7,
                            },
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Box>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
