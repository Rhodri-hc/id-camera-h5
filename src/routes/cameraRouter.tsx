import { lazy } from 'react';
const MemberAgreement = lazy(() => import('@/pages/camera/agreement/memberAgreement'));
const AutoRenewAgreement = lazy(() => import('@/pages/camera/agreement/autoRenewAgreement'));
const RechargeAgreement = lazy(() => import('@/pages/camera/agreement/rechargeAgreement'));
const UserAgreement = lazy(() => import('@/pages/camera/agreement/userAgreement'));
const PrivacyAgreement = lazy(() => import('@/pages/camera/agreement/privacyAgreement'));
const AppPrivacyAgreement = lazy(() => import('@/pages/camera/agreement/appPrivacyAgreement'));
const AppUserAgreement = lazy(() => import('@/pages/camera/agreement/appUserAgreement'));
const CameraFeedback = lazy(() => import('@/pages/camera/feedback'));

export default [
  {
    path: 'camera/member-agreement',
    title: '付费会员协议',
    element: <MemberAgreement />,
  },
  {
    path: 'camera/auto-renew-agreement',
    title: '自动续费服务协议',
    element: <AutoRenewAgreement />,
  },
  {
    path: 'camera/recharge-agreement',
    title: '充值协议',
    element: <RechargeAgreement />,
  },
  {
    path: 'camera/user-agreement',
    title: '用户协议',
    element: <UserAgreement />,
  },
  {
    path: 'camera/privacy-agreement',
    title: '隐私政策',
    element: <PrivacyAgreement />,
  },
  {
    path: 'camera/app-privacy-agreement',
    title: '微糖相机-隐私协议',
    element: <AppPrivacyAgreement />,
  },
  {
    path: 'camera/app-user-agreement',
    title: '微糖相机-用户协议',
    element: <AppUserAgreement />,
  },
  {
    path: 'camera/feedback',
    title: '信息反馈',
    element: <CameraFeedback />,
  },
];
