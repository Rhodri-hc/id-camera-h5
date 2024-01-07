import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import appConfig, { AgreementConfig, keys, pkgNames, TPkgKeys } from '@/pages/camera/config';

export default function useCameraConfig(key: AgreementConfig = 'default'): {
  config: (typeof appConfig)[AgreementConfig];
  appName: string;
  company: string;
} {
  const [searchParams] = useSearchParams();
  const company = searchParams.get('company') || '惠州市铭远智创科技开发有限公司';
  const template: AgreementConfig = (searchParams.get('firm') as AgreementConfig) || key;
  const pkgKey: TPkgKeys = searchParams.get('pkg') as TPkgKeys;
  const config = useMemo(() => {
    return appConfig[keys.includes(template) ? template : key];
  }, [key, template]);
  const appName = useMemo(() => {
    return pkgNames[pkgKey] || pkgKey;
  }, [pkgKey]);
  return {
    config,
    appName,
    company,
  };
}
