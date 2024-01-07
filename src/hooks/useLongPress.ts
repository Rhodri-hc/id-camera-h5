import { useEffect, useRef, useState } from 'react';
type TEvent = () => void;
type TReturnData = {
  onMouseDown: TEvent;
  onMouseUp: TEvent;
  onMouseLeave: TEvent;
  onTouchStart: TEvent;
  onTouchEnd: TEvent;
};
const useLongPress = (callback = () => {}, ms = 300): TReturnData => {
  const [startLongPress, setStartLongPress] = useState<boolean>(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (startLongPress) {
      timeoutRef.current = setTimeout(callback, ms);
    } else {
      clearTimeout(timeoutRef.current);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [callback, ms, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  };
};

export default useLongPress;
