import request from '@/utils/request';

const mbtiApi = {
  getQuestions: request<MbtiApi.QuestionItem[]>('/api/fortunetelling/MBTI/questions/new', 'GET', {
    envKey: 'MBTI',
  }),
  submitAnswers: request<MbtiApi.SubmitResponse, MbtiApi.SubmitParams>(
    '/api/fortunetelling/MBTI/submit',
    'POST',
    {
      envKey: 'MBTI',
    },
  ),
  getResultData: (orderId: string) =>
    request<MbtiApi.ResultResponse>(
      `/api/fortunetelling/MBTI/result/${orderId}/normal_test`,
      'GET',
      {
        envKey: 'MBTI',
        ignoreHeaderParams: true,
      },
    )(),
};
export default mbtiApi;
