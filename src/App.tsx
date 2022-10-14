import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import theme from './assets/theme/theme';
import LoginPopup from './components/LoginPopup';
import Navigation from './components/Navigation';
import Router from './components/Router';

function App() {
  useEffect(() => {
    const initializeAxios = () => {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${window.localStorage.getItem('access-token')}`;
      axios.defaults.withCredentials = true;
    };
    initializeAxios();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <CssBaseline />
        <Navigation />
        <LoginPopup />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
