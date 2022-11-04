import { HomePage, NotFoundPage } from '@src/pages';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL,
});
