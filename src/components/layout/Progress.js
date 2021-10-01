import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Progress() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center' ,mt: 10}}>
      <CircularProgress />
    </Box>
  );
}
