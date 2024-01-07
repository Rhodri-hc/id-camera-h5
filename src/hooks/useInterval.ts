/*
 * @Description: Do not edit
 * @Autor: New
 * @Date: 2023-04-11 16:31:40
 * @LastEditTime: 2023-04-11 16:32:27
 */
import { useCallback, useEffect, useRef } from 'react';

export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default function useInterval(
  fn: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean;
  },
) {
  const immediate = options?.immediate;

  const fnRef = useLatest(fn);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const timerRef = useRef<number | NodeJS.Timer>();

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) return;

    if (immediate) {
      fnRef.current();
    }
    timerRef.current = setInterval(() => {
      fnRef.current();
    }, delay);
    return () => {
      if (timerRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clearInterval(timerRef.current as NodeJS.Timer);
      }
    };
  }, [delay]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearInterval(timerRef.current as NodeJS.Timer);
    }
  }, []);

  return clear;
}
