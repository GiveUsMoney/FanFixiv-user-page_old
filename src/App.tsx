import { appStyles } from '@assets/styles/appStyles';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navigation } from '@src/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import theme from './assets/theme/theme';
import LoginPopup from './components/LoginPopup';
import SignupPopup from './components/SignupPopup';
import { router } from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={appStyles} />
            <Navigation />
            <LoginPopup />
            <RouterProvider router={router} />
            <SignupPopup />
          </ThemeProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
