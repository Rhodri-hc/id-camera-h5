import { DependencyList, useEffect } from 'react';

export default function useAsyncEffect(
  effect: (isCanceled: () => boolean) => Promise<void>,
  dep?: DependencyList,
) {
  return useEffect(() => {
    let canceled = false;
    effect(() => canceled);
    return () => {
      canceled = true;
    };
  }, dep);
}
