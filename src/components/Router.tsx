import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, NotFoundPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
