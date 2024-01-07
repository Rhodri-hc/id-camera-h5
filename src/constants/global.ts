const OSS_URL_IMG = 'https://sunny.tos-cn-guangzhou.volces.com/res/pic/';
const MBTI_URL = 'https://a.manchengkj.com/mbti/';
const QUICK_APP_KEY = 'header_params';
const MBTI_APP_KEY = 'app_header_params';
const REQUEST_ENV: Record<EVN_KEY, Record<'test' | 'prod', string>> = {
  NOVEL: {
    test: 'https://sunny-test.careduka.com', // 测试环境
    prod: 'https://sunny.careduka.com', // 正式环境
  },
  MBTI: {
    test: 'https://h5.careduka.com/test-api', // 测试环境
    prod: 'https://h5.careduka.com/api', // 正式环境
  },
};
type EVN_KEY = 'NOVEL' | 'MBTI';
export type { EVN_KEY };
export { OSS_URL_IMG, REQUEST_ENV, MBTI_URL, QUICK_APP_KEY, MBTI_APP_KEY };
