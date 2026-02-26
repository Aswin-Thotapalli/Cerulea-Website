import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Define your master color palette here
export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAFAFA', // The light gray background
      paper: '#FFFFFF',   // Pure white cards
    },
    text: {
      // THIS IS THE NEW DEEP BLUE VISIBLE EVERYWHERE
      primary: '#172554', 
      // THIS IS THE SLATE GRAY FOR DESCRIPTIONS
      secondary: '#475569', 
    },
    // Accent colors for different industries
    primary: { main: '#2563eb' },   // Blue accent
    secondary: { main: '#db2777' }, // Pink accent
    success: { main: '#059669' },   // Emerald accent
    warning: { main: '#d97706' },   // Amber accent
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    // Automatically make all big headers the deep blue color
    h1: { color: '#172554', fontWeight: 900 },
    h2: { color: '#172554', fontWeight: 800 },
    h3: { color: '#172554', fontWeight: 700 },
  },
  components: {
    // Standardize buttons to use the new deep blue text when outlined
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});