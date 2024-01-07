/*
 * @Description: Do not edit
 * @Autor: New
 * @Date: 2023-04-11 16:01:04
 * @LastEditTime: 2023-04-12 15:30:10
 */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import cameraRouter from '@/routes/cameraRouter';
import mbtlRouter from '@/routes/mbtlRouter';
const NotFound = lazy(() => import('@/pages/not-found'));
const Landing = lazy(() => import('@/pages/landing'));
const LandingNew = lazy(() => import('@/pages/landingNew'));
const PrivacyAgreement = lazy(() => import('@/pages/privacyAgreement'));
const UserAgreement = lazy(() => import('@/pages/userAgreement'));
const Popularity = lazy(() => import('@/pages/popularity/list'));
const PopularityList = lazy(() => import('@/pages/popularityList'));
const BookshelfList = lazy(() => import('@/pages/bookshelf/list'));

const GoldRecord = lazy(() => import('@/pages/goldRecord'));
const Withdrawals = lazy(() => import('@/pages/withdrawals'));
const Feedback = lazy(() => import('@/pages/feedback'));
const CameraReport = lazy(() => import('@/pages/cameraReport'));

const SkitAgreement = lazy(() => import('@/pages/skitAgreement'));

// 业务路由
const basename = '/h5/sunny-novel';

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: 'noval-landing/:book_id',
      element: <Landing />,
    },
    {
      path: 'novel-landing',
      title: '漫漫风云',
      element: <LandingNew />,
    },
    {
      path: 'privacyAgreement',
      title: '隐私策略',
      element: <PrivacyAgreement />,
    },
    {
      path: 'userAgreement',
      title: '用户协议',
      element: <UserAgreement />,
    },
    {
      path: 'popularity',
      title: '榜单',
      element: <Popularity />,
    },
    {
      path: 'bookshelf-list',
      title: '阅读书架',
      element: <BookshelfList />,
    },
    {
      path: 'popularity-list',
      title: '人气排行榜',
      element: <PopularityList />,
    },
    {
      path: 'gold-records',
      title: '金币记录',
      element: <GoldRecord />,
    },
    {
      path: 'withdrawals',
      title: '提现',
      element: <Withdrawals />,
    },
    {
      path: 'feedback',
      title: '反馈',
      element: <Feedback />,
    },
    {
      path: 'camera-report',
      title: '举报',
      element: <CameraReport />,
    },
    {
      path: 'skit-agreement',
      title: '短剧协议',
      element: <SkitAgreement />,
    },
    ...cameraRouter,
    ...mbtlRouter,
  ],
  {
    basename,
  },
);
export default router;
