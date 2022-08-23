import { useEffect, useRef } from "react";

const useUnmount = (fn: () => void) => {
  // 先将函数保存下来，待到某一个时机执行
  // 此部分就是 useLatest 
  const ref = useRef(fn);
  ref.current = fn;
  // const latesetValue = useLatest(fn);
  // latestValue.current 

  // 这写法第一次见,unmount 是 第一个函数回调的执行
  useEffect(() => () => {
    fn?.();
  }, [])
};

export default useUnmount;