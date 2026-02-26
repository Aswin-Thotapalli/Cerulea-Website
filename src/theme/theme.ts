'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1f5eff' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontSize: 44, fontWeight: 800, lineHeight: 1.05 },
    h2: { fontSize: 32, fontWeight: 800, lineHeight: 1.15 },
    h3: { fontSize: 22, fontWeight: 800 },
    body1: { fontSize: 16, lineHeight: 1.6 },
  },
});
