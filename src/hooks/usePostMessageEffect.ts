import React, { useEffect } from 'react';

const UsePostMessageEffect = (fn: React.EffectCallback, deps?: React.DependencyList): void => {
  useEffect(() => {
    if (window.system) {
      window.system.onmessage = function (data: string) {
        localStorage.setItem('header_params', data);
        fn();
      };
    }
  }, deps);
};
export default UsePostMessageEffect;
