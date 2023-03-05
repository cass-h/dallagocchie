import React from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';
const FoundationsIndex = React.lazy(() => import('./pages/foundations/Index'));
const About = React.lazy(() => import('./pages/About'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Home = React.lazy(() => import('./pages/Home'));
const SwordAloneIndex = React.lazy(() => import('./pages/sa/Index'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <React.Suspense fallback={<>...</>}>
        <About />
      </React.Suspense>
    ),
  },
  {
    path: '/settings',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Settings />
      </React.Suspense>
    ),
  },
  {
    path: '/f',
    children: [
      {
        path: '',
        element: (
          <React.Suspense fallback={<>...</>}>
            <FoundationsIndex />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: '/sa',
    children: [
      {
        path: '',
        element: (
          <React.Suspense fallback={<>...</>}>
            <SwordAloneIndex />
          </React.Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
