'use client';

import * as React from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Variants } from 'framer-motion';
import { track } from '@/lib/track';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// Custom TextField styles for a clean, premium look
const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#FFFFFF',
    borderRadius: 2,
    '& fieldset': { borderColor: '#E2E8F0' },
    '&:hover fieldset': { borderColor: '#94A3B8' },
    '&.Mui-focused fieldset': { borderColor: '#2563eb', borderWidth: '2px' },
  }
};

export default function ContactPage() {
  const [formData, setFormData] = React.useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Identify visitor and record submission in PostHog
    track.contactFormSubmitted(formData);

    // Mock API call — replace with real email/CRM integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1200);
  };

  // Track when user first interacts with the form
  const handleFormFocus = () => track.contactFormStarted();

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>
      
      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 14 }, bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: '#172554', mb: 3, letterSpacing: '-0.02em' }}>
              Get in touch.
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 650, mx: 'auto' }}>
              Whether you are exploring private chain deployments, evaluating Cerulea Studio, or need technical support, our team is ready to assist you.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' }, gap: { xs: 8, md: 12 } }}>
            
            {/* LEFT: THE FORM */}
            <Box>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', mb: 4 }}>
                Send us a message
              </Typography>

              {isSubmitted ? (
                <Box sx={{ p: 6, bgcolor: '#FFFFFF', borderRadius: 4, border: '1px solid #10b981', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', mb: 2 }}>Message Received</Typography>
                  <Typography sx={{ color: '#475569' }}>Thank you for reaching out. A member of the Cerulea team will get back to you shortly.</Typography>
                  <Button variant="outlined" onClick={() => setIsSubmitted(false)} sx={{ mt: 4, borderColor: '#E2E8F0', color: '#475569' }}>
                    Send another message
                  </Button>
                </Box>
              ) : (
                <form onSubmit={handleSubmit} onFocus={handleFormFocus}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
                    <TextField 
                      label="Full Name" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      sx={textFieldSx} 
                    />
                    <TextField 
                      label="Work Email" 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      sx={textFieldSx} 
                    />
                    <TextField 
                      label="Company / Organization" 
                      sx={{ ...textFieldSx, gridColumn: { sm: 'span 2' } }} 
                      value={formData.company} 
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </Box>
                  
                  <TextField 
                    label="How can we help?" 
                    required 
                    multiline 
                    minRows={6} 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    sx={{ ...textFieldSx, width: '100%', mb: 4 }} 
                  />

                  <Button 
                    type="submit"
                    variant="contained" 
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      bgcolor: '#2563eb', py: 1.5, px: 4, fontSize: '1rem', fontWeight: 700, borderRadius: 2, 
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                      '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)' }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Message'}
                  </Button>
                </form>
              )}
            </Box>

            {/* RIGHT: CONTACT ROUTING */}
            <Box>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#172554', mb: 4 }}>
                Direct Contacts
              </Typography>

              <Stack spacing={5}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <ChatBubbleOutlineIcon sx={{ color: '#2563eb', fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 700, color: '#172554', fontSize: '1.05rem' }}>Sales</Typography>
                  </Box>
                  <Typography sx={{ color: '#475569', mb: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    For pricing, private chain architecture, and volume deployments.
                  </Typography>
                  <Typography component="a" href="mailto:sales@cerulea.app" sx={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    sales@cerulea.app
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: '#E2E8F0' }} />

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <EmailOutlinedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 700, color: '#172554', fontSize: '1.05rem' }}>General Support</Typography>
                  </Box>
                  <Typography sx={{ color: '#475569', mb: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    For technical assistance with Cerulea Studio or your L1 deployments.
                  </Typography>
                  <Typography component="a" href="mailto:support@cerulea.app" sx={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    support@cerulea.app
                  </Typography>
                </Box>
              </Stack>
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}