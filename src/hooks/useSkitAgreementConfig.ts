import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSkitAgreementConfig } from '@/constants/skit';

export default function useSkitAgreementConfig() {
  const [searchParams] = useSearchParams();
  const type = Number(searchParams.get('type'));
  const pid = Number(searchParams.get('pid'));
  return useMemo(() => {
    return getSkitAgreementConfig(type, pid);
  }, [type, pid]);
}
