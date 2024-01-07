import { lazy } from 'react';
const MbtiHome = lazy(() => import('@/pages/mbti/home'));
const Answer = lazy(() => import('@/pages/mbti/answer'));
const Analyse = lazy(() => import('@/pages/mbti/analyse'));
const ResultPage = lazy(() => import('@/pages/mbti/result'));
export default [
  {
    path: 'mbti/home',
    title: '性格测试',
    element: <MbtiHome />,
  },
  {
    path: 'mbti/answer',
    title: '性格测试',
    element: <Answer />,
  },
  {
    path: 'mbti/analyse',
    title: '性格分析',
    element: <Analyse />,
  },
  {
    path: 'mbti/result/:orderId',
    title: '结果页',
    element: <ResultPage />,
  },
];
