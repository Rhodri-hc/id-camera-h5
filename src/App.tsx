import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import '@/styles/index.scss';
import './App.scss';

const App: FC = () => {
  const getAppParams = () => {
    window.jsBridge.sendCommand('publicParams', {}, (data: any) => {
      localStorage.setItem('app_header_params', data);
    });
  };

  useEffect(() => {
    if (window.system) {
      window.system.onmessage = function (data: string) {
        localStorage.setItem('header_params', data);
      };
    } else {
      getAppParams();
    }
  }, []);
  return <RouterProvider router={router} fallbackElement={<div>加载中。。。</div>} />;
};

export default App;
