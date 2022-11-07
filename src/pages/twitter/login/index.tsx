import { useEffect } from 'react';

export default function TwitterLoginRedirectionPage() {
  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      window.localStorage.setItem('access-token', token);
    }
    location.href = process.env.REACT_APP_PUBLIC_URL;
  }, []);

  return <div></div>;
}
