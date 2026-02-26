import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function Section({
  title,
  subtitle,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Box id={id} sx={{ mt: 6 }}>
      <Typography variant="h5" fontWeight={950} sx={{ mb: 1, letterSpacing: -0.3 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8, maxWidth: 1000 }}>
          {subtitle}
        </Typography>
      ) : null}
      {children}
    </Box>
  );
}
