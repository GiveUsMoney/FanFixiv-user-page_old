import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './assets/theme/theme';
import Navigation from './components/Navigation';
import Router from './components/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Router />
    </ThemeProvider>
  );
}

export default App;
