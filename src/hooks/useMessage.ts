import { useEffect, useState } from 'react';

const useMessage = () => {
  const [message, setMessage] = useState<Record<string, any>>({});
  useEffect(() => {
    if (window.system && window.system.onmessage) {
      window.system.onmessage = function (data: string) {
        setMessage(JSON.parse(data));
      };
    }
  }, []);
  return {
    message,
  };
};
export default useMessage;
