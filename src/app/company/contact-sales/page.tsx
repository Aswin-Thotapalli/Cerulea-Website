'use client';

import * as React from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#FFFFFF',
    borderRadius: 2,
    '& fieldset': { borderColor: '#DDD6FE' },
    '&:hover fieldset': { borderColor: '#8B5CF6' },
    '&.Mui-focused fieldset': { borderColor: '#7C3AED', borderWidth: '2px' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#7C3AED' },
};

const NEXT_STEPS = [
  { step: '01', title: 'We review your submission', body: 'Our sales team reads every enquiry personally to understand your project.' },
  { step: '02', title: 'We reach out within 1 business day', body: 'You\'ll hear from us via email or phone with initial questions or next steps.' },
  { step: '03', title: 'Technical discovery call', body: 'A focused session to map your requirements to the right Cerulea architecture.' },
];

export default function ContactSalesPage() {
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', company: '', role: '',
    projectDescription: '', projectRequirement: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const isValid = form.name && form.email && form.projectDescription && form.projectRequirement;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send. Please email us directly at contact@cbytechains.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>

      {/* HERO */}
      <Box sx={{
        pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <Box sx={{ position: 'absolute', top: '-30%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.75, borderRadius: 10, bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', mb: 4 }}>
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#A5F3FC' }} />
              <Typography sx={{ color: '#E0E7FF', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Sales Enquiry
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: '#FFFFFF', mb: 3, letterSpacing: '-0.02em' }}>
              Talk to our sales team.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.65, maxWidth: 580, mx: 'auto' }}>
              Tell us about your project. We'll map your requirements to the right Cerulea architecture and reach out within one business day.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.6fr 1fr' }, gap: { xs: 8, lg: 10 } }}>

            {/* FORM */}
            <Box>
              {isSubmitted ? (
                <Box sx={{ p: 6, bgcolor: '#FFFFFF', borderRadius: 4, border: '1px solid #DDD6FE', textAlign: 'center', boxShadow: '0 10px 40px rgba(124,58,237,0.08)' }}>
                  <CheckCircleIcon sx={{ fontSize: 56, color: '#7C3AED', mb: 2 }} />
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5', mb: 2 }}>Enquiry Received</Typography>
                  <Typography sx={{ color: '#6B7280', lineHeight: 1.7, maxWidth: 420, mx: 'auto' }}>
                    Thank you for reaching out. A member of our sales team will review your project and be in touch within one business day.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => { setIsSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', role: '', projectDescription: '', projectRequirement: '' }); }}
                    sx={{ mt: 4, borderColor: '#DDD6FE', color: '#7C3AED', '&:hover': { borderColor: '#7C3AED', bgcolor: 'rgba(124,58,237,0.04)' } }}
                  >
                    Submit another enquiry
                  </Button>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #EDE9FE', borderRadius: 4, p: { xs: 4, md: 5 }, boxShadow: '0 10px 40px rgba(124,58,237,0.06)' }}>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', mb: 4 }}>
                      Your contact details
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
                      <TextField label="Full Name" required value={form.name} onChange={set('name')} sx={textFieldSx} />
                      <TextField label="Work Email" type="email" required value={form.email} onChange={set('email')} sx={textFieldSx} />
                      <TextField label="Phone Number" value={form.phone} onChange={set('phone')} sx={textFieldSx} />
                      <TextField label="Company / Organization" value={form.company} onChange={set('company')} sx={textFieldSx} />
                      <TextField label="Your Role / Title" value={form.role} onChange={set('role')} sx={{ ...textFieldSx, gridColumn: { sm: 'span 2' } }} />
                    </Box>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', mb: 3, mt: 2 }}>
                      About your project
                    </Typography>

                    <TextField
                      label="Project Description"
                      required
                      multiline
                      minRows={4}
                      value={form.projectDescription}
                      onChange={set('projectDescription')}
                      placeholder="Briefly describe what you are building — the industry, use case, and scale."
                      sx={{ ...textFieldSx, width: '100%', mb: 3 }}
                    />
                    <TextField
                      label="Project Requirements"
                      required
                      multiline
                      minRows={4}
                      value={form.projectRequirement}
                      onChange={set('projectRequirement')}
                      placeholder="Describe your specific technical or business requirements — deployment environment, compliance needs, integrations, timeline, etc."
                      sx={{ ...textFieldSx, width: '100%', mb: 4 }}
                    />

                    <Typography sx={{ fontSize: '0.8rem', color: '#9CA3AF', mb: 3 }}>
                      Fields marked * are required.
                    </Typography>

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting || !isValid}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        bgcolor: '#7C3AED', py: 1.5, px: 4, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(124,58,237,0.3)',
                        '&:hover': { bgcolor: '#6D28D9', transform: 'translateY(-2px)' },
                        '&:disabled': { bgcolor: '#C4B5FD', color: '#FFFFFF', boxShadow: 'none' },
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </Button>

                    {submitError && (
                      <Typography sx={{ mt: 2, color: '#DC2626', fontSize: '0.875rem' }}>
                        {submitError}
                      </Typography>
                    )}
                  </Box>
                </form>
              )}
            </Box>

            {/* RIGHT: WHAT HAPPENS NEXT */}
            <Box>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', mb: 5 }}>
                What happens next
              </Typography>
              <Stack spacing={5}>
                {NEXT_STEPS.map(({ step, title, body }) => (
                  <Box key={step} sx={{ display: 'flex', gap: 2.5 }}>
                    <Box sx={{
                      width: 36, height: 36, borderRadius: 2, flexShrink: 0,
                      background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Typography sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 800 }}>{step}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#111827', mb: 0.5, fontSize: '0.95rem' }}>{title}</Typography>
                      <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{body}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Box sx={{ mt: 8, p: 3, bgcolor: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: 3 }}>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 1 }}>
                  Prefer email?
                </Typography>
                <Typography
                  component="a"
                  href="mailto:sales@cbytechains.com"
                  sx={{ color: '#4F46E5', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  sales@cbytechains.com
                </Typography>
              </Box>
            </Box>

          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
