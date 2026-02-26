'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark', // Switching to Dark mode for the modern Web3 aesthetic
    primary: { 
      main: '#3b82f6', // A brighter, more electric Cerulea blue for dark mode
      light: '#60a5fa',
      dark: '#2563eb',
    }, 
    background: {
      default: '#020617', // Deep slate (almost black)
      paper: '#0f172a',   // Slightly lighter slate for cards/menus
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 800, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.01em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#020617',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.1) 0%, rgba(2, 6, 23, 0) 70%)',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          backgroundImage: 'linear-gradient(to right, #2563eb, #3b82f6)',
          color: '#ffffff',
          '&:hover': {
            backgroundImage: 'linear-gradient(to right, #1d4ed8, #2563eb)',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.2)',
          color: '#f8fafc',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderColor: 'rgba(255,255,255,0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(16px)', // Glassmorphism for the dropdown
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}