/* eslint-disable no-unused-vars */
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from '@mui/material/styles';

import { MuiSvgIcon } from './components';

declare module '@mui/material/styles' {
  interface Palette {
    cta: PaletteColor;
    tMain: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    hover: PaletteColor;
    button: PaletteColor;
    gray1: PaletteColor;
    gray2: PaletteColor;
  }
  interface PaletteOptions {
    cta?: PaletteColorOptions | undefined;
    tMain?: PaletteColorOptions | undefined;
    primary?: PaletteColorOptions | undefined;
    secondary?: PaletteColorOptions | undefined;
    hover?: PaletteColorOptions | undefined;
    button?: PaletteColorOptions | undefined;
    gray1?: PaletteColorOptions | undefined;
    gray2?: PaletteColorOptions | undefined;
  }
}

export default createTheme({
  palette: {
    cta: {
      main: '#FBCECE',
    },
    tMain: {
      main: '#FF8484',
    },
    primary: {
      main: '#FF8484',
    },
    secondary: {
      main: '#F8E1E1',
    },
    hover: {
      main: '#F8C7C7',
    },
    button: {
      main: '#af3030',
    },
    gray1: {
      main: '#606060',
    },
    gray2: {
      main: '#828282',
    },
  },
  typography: {
    fontFamily: ['MinSans', '-apple-system', 'Arial', 'sans-serif'].join(','),
  },
  components: { MuiSvgIcon },
});
