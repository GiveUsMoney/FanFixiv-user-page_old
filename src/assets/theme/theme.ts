/* eslint-disable no-unused-vars */
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    cta: PaletteColor;
    main: PaletteColor;
    secondary: PaletteColor;
    hover: PaletteColor;
  }
  interface PaletteOptions {
    cta?: PaletteColorOptions | undefined;
    main?: PaletteColorOptions | undefined;
    secondary?: PaletteColorOptions | undefined;
    hover?: PaletteColorOptions | undefined;
  }
}

export default createTheme({
  palette: {
    cta: {
      main: '#FBCECE',
    },
    main: {
      main: '#FF8484',
    },
    secondary: {
      main: '#F8E1E1',
    },
    hover: {
      main: '#F8C7C7',
    },
  },
  typography: {
    fontFamily: ['MinSans', '-apple-system', 'Arial', 'sans-serif'].join(','),
  },
});
