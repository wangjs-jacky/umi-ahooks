import { useEffect } from "react";
import useLatest from "./useLatest";

// 就是 dom.addEventListener("mouseDown",()=>{},target); 给重新封装了一下
const useEventListener = (event: string, handler: (...e: any) => void, target: any = window) => {
  // 优先使用 useLatest(ref) 这种方式存数据，而不要使用 useState
  const handleRef = useLatest(handler);
  console.log("useEventListenr 刷新了",event);
  
  useEffect(() => {
    console.log("刷新2");
    
    const targetElement = "current" in target ? target.current : window;
    // 不要直接使用外部的 handler, 在内部重新维护一个内存引用地址
    const cb = (event: Event) => {
      return handleRef.current(event);
    }
    targetElement.addEventListener(event, cb);
    return () => {
      targetElement.removeEventListener(event, cb);
    }
  }, [event]);
}

export default useEventListener;