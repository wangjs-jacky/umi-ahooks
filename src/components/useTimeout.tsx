import { useLatest } from "@ant-design/pro-components"
import { useEffect } from "react";

const useTimeout = (fn: () => void, delay?: number) => {
  const fnRef = useLatest(fn);
  let timer: any;

  useEffect(() => {
    if (!delay || delay < 0) return;
    timer = setTimeout(() => {
      fnRef.current();
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  }, [delay]);
  return () => {
    clearTimeout(timer);
  }
};

export default useTimeout;