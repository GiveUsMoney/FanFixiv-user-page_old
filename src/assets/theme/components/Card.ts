import { Components } from '@mui/material';

export const MuiCard: Components['MuiCard'] = {
  defaultProps: {
    sx: {
      maxWidth: 210,
      height: 268,
      borderRadius: 5,
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
    },
  },
};
