import request from '@/utils/request';

export type FeedbackParams = {
  content: string;
  type: number;
  question: string;
  phone: string;
  order_id: string;
};

export interface FeedbackInfoData {
  company_name: string;
  email: string;
  wechat: string;
  qr_code: string;
  pay_type?: 'wechat' | 'Alipay' | 'apple';
}

export default {
  userFeedback: request<any, FeedbackParams>(`/user-api/user/feedback`, 'put', {
    isDelay: false,
    envKey: 'NOVEL',
  }),

  getFeedbackInfo: request<FeedbackInfoData, { app_id: number }>(
    `/sunny-api/feedback/info`,
    'get',
    {
      isDelay: false,
      envKey: 'NOVEL',
    },
  ),
};
