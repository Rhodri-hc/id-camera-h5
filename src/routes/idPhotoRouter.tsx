import { lazy } from 'react';

const Home = lazy(() => import('@/pages/photo/home'));

export default [
  {
    path: 'photo/home',
    title: '证件照',
    element: <Home />,
  },
];
