import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { appConfig, keys, TAppConfig } from '@/constants/const';

export default function useAppConfig(key: TAppConfig = 'default'): typeof appConfig[TAppConfig] {
  const [searchParams] = useSearchParams();
  const template: TAppConfig = (searchParams.get('apk') as TAppConfig) || key;
  return useMemo(() => {
    return appConfig[keys.includes(template) ? template : key];
  }, [key, template]);
}
