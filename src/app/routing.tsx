import React from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SwordAloneIndex from './pages/sa/Index';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/about', element: <About /> },
  {
    path: '/sa',
    children: [
      {
        path: '',
        element: <SwordAloneIndex />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
