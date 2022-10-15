import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const refreshAuth = async () => {
  try {
    if (localStorage.getItem('access-token') === '') {
      const data = await axios.get(`
        ${process.env.REACT_APP_AUTH_SERVER_HOST}/auth/refresh
      `);
      localStorage.setItem('access-token', data.data.token);
    }
  } catch (e) {
    // dummy
  }
};

const initializeAxios = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${window.localStorage.getItem('access-token')}`;
  axios.defaults.withCredentials = true;
};

(async () => {
  await refreshAuth();
  initializeAxios();
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
})();
