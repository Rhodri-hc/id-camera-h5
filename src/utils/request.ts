import axios from 'axios';
import { EVN_KEY, QUICK_APP_KEY, REQUEST_ENV, MBTI_APP_KEY } from '@/constants/global';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

interface RequestOptions extends AxiosRequestConfig {
  showError?: boolean;
  raw?: boolean;
  ignoreToken?: boolean; // true 表示不需要带上token
  ignoreHeaderParams?: boolean;
  isDelay?: boolean;
  envKey?: EVN_KEY;
}
const env = import.meta.env.MODE === 'production' ? 'prod' : 'test';
const isDev = import.meta.env.MODE === 'dev';

function prepareOptions<T = any>(
  url: string,
  method: Method,
  options: RequestOptions,
  fetchData?: T,
) {
  const { ignoreToken, headers = {}, ...restOptions } = options || {};

  const option = {
    baseURL: '/', // 相对url时才加上，绝对url不加
    url,
    headers,
    method,
    ...restOptions,
  } as AxiosRequestConfig<T>;

  // 接口添加 Token
  const token = '';
  if (!ignoreToken && token) {
    if (headers) {
      headers.Authorization = token;
    } else {
      option.headers = { Authorization: token };
    }
  }

  if (method === 'get' || method === 'delete') {
    option.params = fetchData;
  } else {
    option.data = fetchData;
  }
  return option;
}

const defaultHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};
const getParams = async (key: string): Promise<string | null> => {
  return localStorage.getItem(key);
};
function fetchData(key: string, ignoreHeaderParams = false, awaitTime = 1000): Promise<string> {
  // 发送异步请求获取数据
  // 这里可以使用任何适合你的异步请求方式，比如使用 Fetch API 或者 Axios
  if (ignoreHeaderParams) {
    return Promise.resolve('');
  }
  return getParams(key).then((data) => {
    // 检查数据是否获取到
    if (data !== null && data !== undefined) {
      // 在这里执行你希望在数据获取到后进行的操作
      console.log('数据获取成功:', data);
      return data;
    } else {
      // 如果数据未获取到，则继续轮询
      console.log('数据未获取到，继续轮询...');
      return new Promise((resolve) => {
        // 设置轮询时间间隔，这里设置为 1 秒
        setTimeout(resolve, awaitTime); // 1 秒
      }).then(() => fetchData(key, ignoreHeaderParams, awaitTime));
    }
  });
}

const axiosInstance = axios.create({
  timeout: 2e4,
  headers: defaultHeaders,
});
axiosInstance.interceptors.request.use(
  async function (config) {
    const { envKey, isDelay, headers, ignoreHeaderParams } = config as RequestOptions;
    switch (envKey) {
      case 'NOVEL': {
        if (isDelay) {
          const hasParams = await fetchData(QUICK_APP_KEY); // 等待postMessage 消息触发再请求接口
          const appendData = JSON.parse(hasParams as string) || {};
          const p_head = atob(appendData.Phead || '').includes('brand')
            ? appendData.Phead
            : atob(appendData.Phead || '');
          // || 'dmVyPTk5OTAxLHBfaWQ9MjAwMDEsY2hhPXdlaWJvLHVpZD03NjY=';
          const ex_head = atob(appendData['Ex-Head'] || '').includes('i_code')
            ? appendData['Ex-Head']
            : atob(appendData['Ex-Head'] || '');
          // || 'aV9jb2RlPWJxb3N3cnQ3cnl5eXk=';
          config.headers = {
            ...headers,
            Phead: p_head,
            'Ex-Head': ex_head,
          };
        }
        if (isDev) {
          config.url = `/sunny${config.url}`;
        }
        break;
      }
      case 'MBTI': {
        const hasParams = await fetchData(MBTI_APP_KEY, ignoreHeaderParams); // 等待postMessage 消息触发再请求接口
        const appendData = hasParams ? JSON.parse(hasParams as string) : {};
        // const appendData = {
        //   Phead: 'Y2hhPWh3Y3NqLHBpZD0zOTA2Myx2ZXI9MSx1aWQ9ODEz',
        //   'Ex-Head': 'bq1jyjcuwyyyy',
        //   uid: '813',
        // };
        if (!isDev) {
          config.url = config.url?.replace('/api', '');
        }
        config.headers = {
          ...headers,
          ...appendData,
        };
        break;
      }
      default:
        break;
    }
    if (!isDev && envKey) {
      config.baseURL = REQUEST_ENV[envKey][env];
    }
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
export default function request<T = never, PARAM = never>(
  url: string,
  method: Method = 'post',
  options: RequestOptions = { isDelay: true, envKey: 'NOVEL' },
) {
  return async (fetchData?: PARAM): Promise<T> => {
    const { raw = false, showError = true, ...restOptions } = options || {};
    const lowerMethod = method.toLocaleLowerCase() as Method;
    const option = prepareOptions<PARAM>(url, lowerMethod, restOptions, fetchData);
    return axiosInstance({
      ...option,
      headers: {
        ...defaultHeaders,
      },
    })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .then((response) => {
        const {
          status,
          data: { data, dicts, code, msg },
        } = response as AxiosResponse<Record<string, T>, PARAM>;
        if (status === 200 && (code === 1 || code === 200)) {
          return raw ? (response as any) : dicts ? { data, dicts } : data;
        } else if (status === 200 && code === 0) {
          throw new Error(msg as string);
        } else {
          // if (showError) {
          // }
          throw new Error(msg as string);
        }
      });
  };
}

// const axiosBlobInstance = axios.create({
//   responseType: 'blob',
//   timeout: 3e4,
// });
//
// export function requestBlob(url: string, method: Method = 'post', options: RequestOptions = {}) {
//   return (fetchData: any) => {
//     const { showError = true, ...restOptions } = options || {};
//     const lowerMethod = method.toLocaleLowerCase() as Method;
//     const option = prepareOptions(url, lowerMethod, restOptions, fetchData);
//     const appendData = JSON.parse(getParams() as string) || {};
//     return axiosBlobInstance({
//       ...option,
//       headers: {
//         ...defaultHeaders,
//         Phead: appendData.Phead,
//         'Ex-Head': appendData['Ex-Head'],
//       },
//     })
//       .catch((error) => {
//         throw error;
//       })
//       .then((response) => {
//         const res = response.data;
//         if (isType('Blob')(res)) {
//           // 先判断是不是blob格式
//           if (response.data.type.includes('application/json')) {
//             // 判断是不是特殊情况(json)
//             const reader = new FileReader();
//             reader.onload = function () {
//               const readerResult: string = typeof reader.result === 'string' ? reader.result : '';
//               const result = JSON.parse(readerResult); // blob格式转成json
//             };
//             reader.readAsText(response.data);
//           }
//         }
//
//         return response;
//       });
//   };
// }
