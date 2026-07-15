import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ErrorBoundary from './layouts/ErrorBoundary';
import SearchPage from './pages/SearchPage';
import CollectionPage from './pages/CollectionPage';
import NotFoundPage from './pages/NotFoundPage';

// Serve under Vite's base path (e.g. "/interview/" on GitHub Pages, "/" locally).
// React Router wants a basename without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <SearchPage /> },
        { path: 'collection', element: <CollectionPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename }
);
