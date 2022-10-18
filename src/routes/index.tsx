import { HomePage, NotFoundPage, SignUpPage } from '@src/pages';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: process.env.REACT_APP_PUBLIC_URL,
});
