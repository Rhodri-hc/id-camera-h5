import { useEffect, useState } from 'react';

const useQuickAppInfo = (sum = 3) => {
  const [appData, setAppData] = useState<Record<string, any>>({});
  let count = 0;
  const getParams = (): string | null => {
    return localStorage.getItem('header_params');
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const params = getParams();
      count++;
      if (count === sum || params) {
        clearInterval(timer);
        params && setAppData(JSON.parse(params));
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return appData;
};
export default useQuickAppInfo;
